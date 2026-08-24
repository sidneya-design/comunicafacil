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

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { storage: resilientAuthStorage } });

// Optionally expose for debugging
window.supabase = supabase;
