import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

/**
 * Edge Function: upload_resumable
 * Recebe multipart/form-data com:
 *  - file (Blob do chunk)
 *  - chunkIndex (0‑based)
 *  - totalChunks
 *  - fileName (nome original)
 *  - tmpPath (identificador único gerado pelo cliente)
 *
 * Cada chunk é armazenado temporariamente em `tmp/{tmpPath}/{chunkIndex}`.
 * Quando o último chunk chega, todos os chunks são concatenados em ordem e o
 * arquivo final é salvo em `books/{fileName}`. Metadados são inseridos na tabela
 * `books`.
 */

serve(async (req) => {
  const url = new URL(req.url);
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  const form = await req.formData();
  const file = form.get("file") as File | null;
  const chunkIndex = Number(form.get("chunkIndex"));
  const totalChunks = Number(form.get("totalChunks"));
  const fileName = (form.get("fileName") as string) ?? "unknown";
  const tmpPath = (form.get("tmpPath") as string) ?? crypto.randomUUID();

  if (!file) {
    return new Response(JSON.stringify({ error: "Missing file chunk" }), { status: 400 });
  }

  const storage = supabase.storage.from("books");
  const tempObjectPath = `${tmpPath}/${chunkIndex}`;

  // Upload chunk to temporary location
  const uploadRes = await storage.upload(tempObjectPath, file, {
    cacheControl: "3600",
    upsert: true,
  });
  if (uploadRes.error) {
    console.error("Chunk upload error", uploadRes.error);
    return new Response(JSON.stringify({ error: uploadRes.error.message }), { status: 500 });
  }

  // If this is the last chunk, concatenate all chunks
  if (chunkIndex === totalChunks - 1) {
    // Gather all chunks in order
    const parts: Uint8Array[] = [];
    for (let i = 0; i < totalChunks; i++) {
      const { data, error } = await storage.download(`${tmpPath}/${i}`);
      if (error) {
        console.error("Chunk download error", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
      }
      const arrayBuffer = await data!.arrayBuffer();
      parts.push(new Uint8Array(arrayBuffer));
    }
    // Concatenate
    const totalLength = parts.reduce((sum, p) => sum + p.length, 0);
    const combined = new Uint8Array(totalLength);
    let offset = 0;
    for (const p of parts) {
      combined.set(p, offset);
      offset += p.length;
    }
    const finalBlob = new Blob([combined]);
    const finalPath = `${fileName}`;
    const finalUpload = await storage.upload(finalPath, finalBlob, {
      cacheControl: "3600",
      upsert: true,
      contentType: file.type,
    });
    if (finalUpload.error) {
      console.error("Final upload error", finalUpload.error);
      return new Response(JSON.stringify({ error: finalUpload.error.message }), { status: 500 });
    }
    // Insert metadata into `books` table (assume authenticated user via JWT in Authorization header)
    const authHeader = req.headers.get("Authorization") || "";
    const token = authHeader.replace("Bearer ", "");
    const { data: userData } = await supabase.auth.getUser(token);
    const userId = userData?.user?.id;
    await supabase.from("books").insert({
      title: fileName,
      mime_type: file.type,
      file_path: finalPath,
      uploaded_by: userId,
      size_bytes: finalBlob.size,
      is_large: finalBlob.size > 50 * 1024 * 1024,
    });
    // Cleanup temporary chunks
    for (let i = 0; i < totalChunks; i++) {
      await storage.remove([`${tmpPath}/${i}`]);
    }
    return new Response(JSON.stringify({ success: true, filePath: finalPath }));
  }

  // Not the last chunk – just acknowledge
  return new Response(JSON.stringify({ success: true, chunkIndex }));
});
