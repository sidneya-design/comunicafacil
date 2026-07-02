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

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    messages = data.get('messages', [])
    
    if not messages:
        return jsonify({"error": "Nenhuma mensagem recebida"}), 400
    
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
    
    try:
        # Faz a chamada HTTP direta à Azure
        response = requests.post(AZURE_URL, headers=headers, json=payload)
        
        if response.status_code != 200:
            return jsonify({"error": f"Azure retornou erro {response.status_code}: {response.text}"}), response.status_code
            
        res_data = response.json()
        
        # Extrai a resposta textual do agente baseado no formato da API
        reply = res_data['output'][0]['content'][0]['text']
        
        return jsonify({"reply": reply})
        
    except Exception as e:
        print(f"Erro na comunicação com Azure AI: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🚀 Servidor IA do Comunica Fácil Iniciado!")
    print("URL do Backend: http://127.0.0.1:5001")
    print("="*50 + "\n")
    app.run(host='0.0.0.0', port=5001, debug=True)
