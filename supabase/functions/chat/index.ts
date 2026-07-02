import { encodeBase64 } from "https://deno.land/std@0.224.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Configurações do Azure
const AZURE_SPEECH_REGION = "eastus2";
const AZURE_AI_AGENT_URL = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses";

Deno.serve(async (req) => {
  // Trata requisições OPTIONS (CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("azure_ai_key");
    if (!apiKey) {
      throw new Error("Variavel de ambiente azure_ai_key nao configurada no Supabase.");
    }

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      // ----------------------------------------------------
      // FLUXO DE ÁUDIO (Speech-to-Text -> Agente -> Text-to-Speech)
      // ----------------------------------------------------
      const formData = await req.formData();
      const audioFile = formData.get("audio") as File;
      const messagesJson = formData.get("messages") as string;
      const messages = JSON.parse(messagesJson || "[]");

      if (!audioFile) {
        return new Response(
          JSON.stringify({ error: "Nenhum arquivo de audio recebido" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      // Transcreve a fala usando Azure STT
      const audioBytes = new Uint8Array(await audioFile.arrayBuffer());
      const transcription = await transcribeAudioWithAzure(audioBytes, apiKey);

      // Adiciona o texto transcrito ao historico como mensagem do usuario
      messages.push({ role: "user", content: transcription });

      // Chama o Agente Azure AI Foundry
      const reply = await getAgentResponse(messages, apiKey);

      // Gera o audio falado da resposta usando Azure TTS
      const audioBase64 = await synthesizeTextWithAzure(reply, apiKey);

      return new Response(
        JSON.stringify({ reply, audio: audioBase64, user_transcription: transcription }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );

    } else {
      // ----------------------------------------------------
      // FLUXO DE TEXTO CLÁSSICO
      // ----------------------------------------------------
      const { messages, generateAudio } = await req.json();

      if (!messages) {
        return new Response(
          JSON.stringify({ error: "Nenhuma mensagem enviada" }),
          { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
        );
      }

      const reply = await getAgentResponse(messages, apiKey);

      let audioBase64 = null;
      if (generateAudio) {
        audioBase64 = await synthesizeTextWithAzure(reply, apiKey);
      }

      return new Response(
        JSON.stringify({ reply, audio: audioBase64 }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 }
      );
    }

  } catch (error) {
    console.error("Erro na Edge Function:", error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500 
      }
    );
  }
});

// Helper: Fala com o Agente de IA na Azure
async function getAgentResponse(messages: any[], apiKey: string): Promise<string> {
  const payload = {
    input: messages,
    agent_reference: {
      name: "falafacil",
      version: "11",
      type: "agent_reference"
    }
  };

  const response = await fetch(AZURE_AI_AGENT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": apiKey
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure AI Agent respondeu com erro ${response.status}: ${errText}`);
  }

  const resData = await response.json();
  return resData.output[0].content[0].text;
}

// Helper: Azure Speech-to-Text (Transcrição de Voz)
async function transcribeAudioWithAzure(audioBytes: Uint8Array, apiKey: string): Promise<string> {
  const azureSttUrl = `https://${AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR`;
  
  const response = await fetch(azureSttUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
      "Accept": "application/json",
      "User-Agent": "ComunicaFacilSTT"
    },
    body: audioBytes
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure STT falhou com erro ${response.status}: ${errText}`);
  }

  const data = await response.json();
  if (data.RecognitionStatus !== "Success") {
    throw new Error(`Azure STT falhou em reconhecer a fala: ${data.RecognitionStatus}`);
  }
  
  return data.DisplayText;
}

// Helper: Azure Text-to-Speech (Síntese de Voz)
async function synthesizeTextWithAzure(text: string, apiKey: string): Promise<string> {
  const azureTtsUrl = `https://${AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;
  
  // Formatando o SSML com a voz feminina FranciscaNeural
  const ssml = `<speak version='1.0' xml:lang='pt-BR'>
    <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
      ${text}
    </voice>
  </speak>`;

  const response = await fetch(azureTtsUrl, {
    method: "POST",
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey,
      "Content-Type": "application/ssml+xml",
      "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
      "User-Agent": "ComunicaFacilTTS"
    },
    body: ssml
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Azure TTS falhou com erro ${response.status}: ${errText}`);
  }

  const audioArrayBuffer = await response.arrayBuffer();
  return encodeBase64(audioArrayBuffer);
}
