import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

serve(async (req) => {
  // Only GET allowed
  if (req.method !== "GET") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }
  // Authenticate user via JWT in Authorization header
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");
  const { data: userData } = await supabase.auth.getUser(token);
  if (!userData?.user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }
  const userId = userData.user.id;

  const url = new URL(req.url);
  const title = url.searchParams.get("title");
  const author = url.searchParams.get("author");
  const mime = url.searchParams.get("mime");

  let query = supabase.from("books").select("id, title, author, mime_type, file_path, size_bytes, created_at").eq("uploaded_by", userId);
  if (title) query = query.ilike("title", `%${title}%`);
  if (author) query = query.ilike("author", `%${author}%`);
  if (mime) query = query.eq("mime_type", mime);

  const { data, error } = await query.order("created_at", { ascending: false });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  return new Response(JSON.stringify({ books: data }));
});
