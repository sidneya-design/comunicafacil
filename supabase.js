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

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Optionally expose for debugging
window.supabase = supabase;
