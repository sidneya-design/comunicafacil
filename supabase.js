// supabase.js
// Initialize Supabase client for the Comunicafacil project
// Replace the placeholder values with your actual Supabase project URL and anon public key.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://rrubmvykindvilptjhma.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJydWJtdnlraW5kdmlscHRqaG1hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0ODE2OTksImV4cCI6MjA5ODA1NzY5OX0.4eKcRhUReuaKaaq4ftIOWe6vvB9qxL4Sjiii-3QX5eM';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Optionally expose for debugging
window.supabase = supabase;
