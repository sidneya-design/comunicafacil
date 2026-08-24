// supabase.js
// Initialize Supabase client for the Comunicafacil project
// Replace the placeholder values with your actual Supabase project URL and anon public key.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// Override opt-in só-localhost (?sb=staging) pra testar contra o projeto de
// staging do modelo multi-tenant — mesmo padrão de app.js/login.html. Sem o
// parâmetro (uso normal), continua 100% em produção como sempre foi.
const isLocalAppHost = ['localhost', '127.0.0.1'].includes(window.location.hostname) || window.location.protocol === 'file:';
const useStagingSupabase = isLocalAppHost && new URLSearchParams(window.location.search).get('sb') === 'staging';

const SUPABASE_URL = useStagingSupabase
    ? 'https://iqiiilddodttvrxodwbd.supabase.co'
    : 'https://rrubmvykindvilptjhma.supabase.co';
const SUPABASE_ANON_KEY = useStagingSupabase
    ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaWlpbGRkb2R0dHZyeG9kd2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzNjg4NjEsImV4cCI6MjEwMTk0NDg2MX0.Po7_bLntUw-RFt92Lw2WIsrJoasrrg1VBWl7zm1vDSM'
    : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';

// O cache de TTS em áudio (ver TTS_STORAGE_PREFIX em complete-frase.js/app.js) cresce sem
// limite no localStorage. Com o tempo isso estoura a quota do navegador, e daí um setItem
// comum do SDK falha ao persistir o token de sessão, deixando a sessão sem ser salva e
// causando um loop de login. Libera esse cache (facilmente reconstruído) quando necessário.
function evictTtsLocalStorageCache() {
    try {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && (key.startsWith('comunica_tts_v1:') || key.startsWith('comunica_tts_v2:'))) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(k => localStorage.removeItem(k));
    } catch (e) { /* localStorage indisponível: nada a fazer */ }
}
const resilientAuthStorage = {
    getItem: (key) => { try { return localStorage.getItem(key); } catch (e) { return null; } },
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            evictTtsLocalStorageCache();
            try { localStorage.setItem(key, value); } catch (e2) { /* segue sem persistir sessão */ }
        }
    },
    removeItem: (key) => { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }
};

// Este módulo é carregado tanto dentro de iframes embutidos em app.html (Livros, Complete a
// Frase) quanto, potencialmente, de forma isolada. Quando embutido, app.js (janela pai) já
// mantém sua própria instância do cliente Supabase renovando a sessão sozinha — se esta
// instância também tentasse renovar o mesmo token compartilhado no localStorage, as duas
// competiriam pela rotação do refresh token (o Supabase invalida o token anterior a cada
// renovação), podendo derrubar a sessão do usuário do nada. Só a instância "dona" da aba
// (não embutida) deve renovar; a embutida só lê a sessão que o pai já mantém em dia.
const isEmbeddedContext = window.self !== window.top || new URLSearchParams(window.location.search).get('embedded') === '1';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { storage: resilientAuthStorage, autoRefreshToken: !isEmbeddedContext }
});

// Optionally expose for debugging
window.supabase = supabase;
