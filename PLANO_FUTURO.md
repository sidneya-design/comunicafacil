# Plano Futuro — ComunicaFácil

---

## 🔐 Autenticação e Perfis de Usuário

### Objetivo
Adicionar uma página de login com dois perfis distintos:
- **Administrador**: acesso total, incluindo edição de cards, criação de categorias, upload de imagens e áudios.
- **Usuário comum**: acesso somente leitura — usa o app normalmente, sem ver os botões de edição.

### Hospedagem
- Plataforma: **Netlify**
- Autenticação: **Netlify Identity** (gratuito, integrado, suporte a JWT)
  - Alternativa: Firebase Auth ou Auth0 se precisar de mais controle.

### Arquitetura planejada

```
login.html        → Página de login (Netlify Identity Widget)
app.js            → Verifica role do usuário ao carregar
  └─ isAdmin()    → Retorna true se o usuário tem role "admin"
  └─ Esconde botões de edição se não for admin
```

### Variável de controle (já estruturada no código atual)
O código atual usa uma variável `isAdmin` para controlar visibilidade dos botões de edição.
Quando a autenticação for implementada, basta substituir:
```js
// Atual (desenvolvimento)
let isAdmin = true;

// Futuro (Netlify Identity)
const user = netlifyIdentity.currentUser();
let isAdmin = user?.app_metadata?.roles?.includes('admin') ?? false;
```

### Fluxo de login
1. Usuário acessa o site → Netlify Identity verifica sessão
2. Se não autenticado → redireciona para `login.html`
3. Após login → retorna para `index.html`
4. `isAdmin` é definido com base no role do token JWT
5. Botões de edição só aparecem para admins

### Arquivos a criar
- `login.html` — formulário de login com Netlify Identity Widget
- `netlify.toml` — configuração de redirects e funções serverless (se necessário)
- `netlify/functions/` — funções serverless para lógica protegida (futuro)

---

## 🃏 Personalização de Cards (Concluído Localmente)

### Objetivo
Permitir que administradores personalizem os cards de todas as seções:
- **Essenciais** (com as antigas "Rápidas" unificadas) e **Fomes e Forças**
- Adicionar, editar e excluir cards
- Upload de imagem e áudio por card
- Áudio personalizado toca no lugar do TTS quando disponível

### Status
- [x] Fomes e Forças — lógica de edição implementada
- [x] Essenciais — lógica de edição implementada e unificada com as antigas respostas rápidas em um único grid
- [x] Integração com `isAdmin` para ocultar botões (já estruturada no código)
- [x] Banco de dados IndexedDB (v8) estruturado para persistência local

---

## 🎨 Customização de Texto nos Exercícios (Concluído)

### Objetivo
Remover caixa alta automática e permitir cor e tamanho do texto por vídeo da playlist.

### Mudanças
- `style.css`: Remoção de `text-transform: uppercase`
- `app.js`: Persistência de cor e tamanho e renderização dinâmica

---

## ☁️ Banco de Dados e Storage Centralizado (Futuro)

### Objetivo
Migrar a persistência local (IndexedDB) para um banco de dados em nuvem centralizado e compartilhado entre todos os usuários ao implantar na Netlify.

### Arquitetura Supabase
- **Banco de Dados (PostgreSQL)**: Tabelas para armazenar metadados dos cards (palavra, cor da borda, ordem, links públicos).
- **Supabase Storage (Object Storage)**: Buckets para armazenar arquivos físicos de imagens e áudios enviados pelos admins via formulário, gerando URLs públicas salvas no banco.
- **Cache Local**: IndexedDB continuará ativo para cache offline e inicialização rápida do aplicativo.

---

## 🚀 Próximos Passos Priorizados

1. [ ] Criar projeto no **Supabase** e configurar tabelas de `core_cards` e `virtues`
2. [ ] Substituir funções locais de leitura/gravação no `app.js` pela API do Supabase (para admins)
3. [ ] Criar `login.html` com Netlify Identity Widget para autenticação
4. [ ] Configurar `netlify.toml` com redirects de autenticação e testar controle de perfil admin no Supabase
5. [ ] Publicar na Netlify e testar fluxo completo (Login Admin -> Upload de Imagem/Áudio para Supabase Storage -> Gravação no DB -> Exibição para Usuários Comuns)
