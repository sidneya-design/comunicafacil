from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)  # Permite que o app.js local faça requisições para este servidor

# Configurações do Azure
AZURE_URL = "https://geniantis-org.services.ai.azure.com/api/projects/proj-geniantis-agente/openai/v1/responses"

# Carrega variáveis do arquivo .env local se ele existir
if os.path.exists('.env'):
    with open('.env') as f:
        for line in f:
            if line.strip() and not line.startswith('#'):
                try:
                    key, val = line.strip().split('=', 1)
                    os.environ[key.strip()] = val.strip()
                except ValueError:
                    pass

API_KEY = os.environ.get("AZURE_AI_KEY")

if not API_KEY:
    print("\n⚠️ AVISO: A variavel de ambiente AZURE_AI_KEY nao foi encontrada.")
    print("Por favor, crie um arquivo '.env' neste diretorio ou defina a variavel no seu terminal.")
    print("Exemplo de arquivo .env:")
    print("AZURE_AI_KEY=sua_chave_aqui\n")

my_agent = "falafacil"
my_version = "11"

def get_agent_response(messages):
    headers = {
        "Content-Type": "application/json",
        "api-key": API_KEY
    }
    payload = {
        "input": messages,
        "agent_reference": {
            "name": my_agent,
            "version": my_version,
            "type": "agent_reference"
        }
    }
    response = requests.post(AZURE_URL, headers=headers, json=payload)
    if response.status_code != 200:
        raise Exception(f"Erro na Azure ({response.status_code}): {response.text}")
    res_data = response.json()
    return res_data['output'][0]['content'][0]['text']

def transcribe_audio(audio_bytes):
    url = f"https://{AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=pt-BR"
    headers = {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
        "Accept": "application/json",
        "User-Agent": "ComunicaFacilSTT"
    }
    response = requests.post(url, headers=headers, data=audio_bytes)
    if response.status_code != 200:
        raise Exception(f"Erro no Azure STT ({response.status_code}): {response.text}")
    data = response.json()
    if data.get("RecognitionStatus") != "Success":
        raise Exception(f"Azure STT falhou: {data.get('RecognitionStatus')}")
    return data.get("DisplayText", "")

def synthesize_text(text):
    url = f"https://{AZURE_SPEECH_REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
    headers = {
        "Ocp-Apim-Subscription-Key": API_KEY,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
        "User-Agent": "ComunicaFacilTTS"
    }
    ssml = f"""<speak version='1.0' xml:lang='pt-BR'>
        <voice xml:lang='pt-BR' xml:gender='Female' name='pt-BR-FranciscaNeural'>
            {text}
        </voice>
    </speak>"""
    response = requests.post(url, headers=headers, data=ssml.encode('utf-8'))
    if response.status_code != 200:
        raise Exception(f"Erro no Azure TTS ({response.status_code}): {response.text}")
    return base64.b64encode(response.content).decode('utf-8')

@app.route('/chat', methods=['POST'])
def chat():
    try:
        # Verifica se é multipart/form-data (envio de áudio)
        if 'audio' in request.files:
            audio_file = request.files['audio']
            messages_json = request.form.get('messages', '[]')
            messages = json.loads(messages_json)
            
            # Transcreve áudio
            audio_bytes = audio_file.read()
            transcription = transcribe_audio(audio_bytes)
            
            # Adiciona mensagem do usuário
            messages.append({"role": "user", "content": transcription})
            
            # Obtém resposta do agente
            reply = get_agent_response(messages)
            
            # Sintetiza resposta para áudio
            audio_base64 = synthesize_text(reply)
            
            return jsonify({
                "reply": reply,
                "audio": audio_base64,
                "user_transcription": transcription
            })
            
        else:
            # Fluxo de texto clássico
            data = request.json or {}
            messages = data.get('messages', [])
            generate_audio = data.get('generateAudio', False)
            
            if not messages:
                return jsonify({"error": "Nenhuma mensagem recebida"}), 400
                
            reply = get_agent_response(messages)
            
            audio_base64 = None
            if generate_audio:
                audio_base64 = synthesize_text(reply)
                
            return jsonify({
                "reply": reply,
                "audio": audio_base64
            })
            
    except Exception as e:
        print(f"Erro no processamento da rota /chat: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🚀 Servidor IA do Comunica Fácil Iniciado!")
    print("URL do Backend: http://127.0.0.1:5001")
    print("="*50 + "\n")
    app.run(host='0.0.0.0', port=5001, debug=True)
