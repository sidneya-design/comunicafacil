const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Trata requisições OPTIONS (Pré-voo do CORS)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!messages) {
      return new Response(
        JSON.stringify({ error: "Nenhuma mensagem enviada" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 400 }
      );
    }

    const azureUrl = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses";
    
    // Obtém a Chave de API da Azure que você vai salvar nas configurações do Supabase
    const apiKey = Deno.env.get("azure_ai_key");

    if (!apiKey) {
      throw new Error("Variável de ambiente azure_ai_key não configurada no Supabase.");
    }

    const payload = {
      input: messages,
      agent_reference: {
        name: "falafacil",
        version: "11",
        type: "agent_reference"
      }
    };

    // Faz a chamada HTTP direta para a Azure de forma segura
    const response = await fetch(azureUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Azure respondeu com erro ${response.status}: ${errText}`);
    }

    const resData = await response.json();
    const reply = resData.output[0].content[0].text;

    return new Response(
      JSON.stringify({ reply }),
      { 
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200 
      }
    );

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
