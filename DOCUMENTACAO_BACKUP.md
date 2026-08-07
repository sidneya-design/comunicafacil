# Documentacao de Backup - Comunica Facil

## Identificacao

- Projeto: Comunica Facil
- Data do backup: 14/07/2026
- Commit Git: `6504fba`
- Branch: `main`
- Origem: `origin/main`

## Conteudo do Projeto

Este projeto e uma aplicacao web estatica com integracao Supabase e backend local opcional para recursos de IA/voz.

Arquivos principais:

- `index.html`: landing page de entrada.
- `login.html`: tela de login e recuperacao de senha.
- `app.html`: interface principal do aplicativo.
- `app.js`: regras de navegacao, autenticacao, permissoes, cards, midias, jogos, IA e telemetria.
- `style.css`: estilos da aplicacao principal.
- `landing.css`: estilos da landing page.
- `server.py`: servidor Flask local para recursos de IA/voz quando usado fora das Edge Functions.
- `supabase/`: migrations e Edge Functions.
- `img/`: imagens locais usadas pelos cards e pela interface.
- `vendor/`: fontes e Font Awesome locais.

## Como Rodar Localmente

Na pasta do projeto, inicie um servidor estatico:

```bash
python3 -m http.server 8090
```

Acesse:

```text
http://localhost:8090
```

Se a porta `8090` estiver ocupada, use outra porta:

```bash
python3 -m http.server 8091
```

## Login e Administracao

O login usa Supabase Auth. As funcoes administrativas dependem da tabela `user_roles`.

Papeis esperados:

- `viewer`: usa o app sem editar.
- `editor`: pode editar conteudo.
- `admin`: pode editar conteudo e acessar o painel Admin.

Se a aba Admin nao aparecer, verifique no Supabase se o usuario logado possui `role = 'admin'`.

## Backend Local Opcional

O arquivo `server.py` roda um servidor Flask na porta `5001` para rotas locais de IA/voz.

Para usar:

```bash
pip install -r requirements.txt
python3 server.py
```

Se for usar Azure, configure a variavel `AZURE_AI_KEY` em um arquivo `.env` local ou no terminal.

## Backup

O backup compactado deve ficar em:

```text
backups/
```

O pacote exclui:

- `.git/`
- `backups/`
- caches temporarios comuns

Assim o arquivo pode ser guardado ou compartilhado sem carregar historico Git nem backups dentro de backups.

## Restauracao

Para restaurar:

1. Extraia o arquivo `.zip` em uma nova pasta.
2. Abra a pasta restaurada no editor.
3. Rode `python3 -m http.server 8090`.
4. Acesse `http://localhost:8090`.

Se quiser voltar a versionar essa copia com Git, inicialize um novo repositorio ou conecte ao remoto desejado.
