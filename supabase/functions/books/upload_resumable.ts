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
 * Requer sessão válida (Authorization: Bearer <access_token>) — o client usa
 * a service_role key, que bypassa RLS, então essa checagem é a única
 * barreira. Cada chunk é armazenado temporariamente em
 * `tmp/{userId}/{tmpPath}/{chunkIndex}`. Quando o último chunk chega, todos
 * os chunks são concatenados em ordem e o arquivo final é salvo em
 * `{userId}/{uuid}-{fileName}`. Metadados são inseridos na tabela `books`.
 */

serve(async (req) => {
  const url = new URL(req.url);
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405 });
  }

  // Antes: só validava o usuário no ÚLTIMO chunk, e nem checava se a busca
  // deu certo — sem token válido, `userId` ficava undefined e o insert em
  // `books` seguia em frente assim mesmo (uploaded_by nulo). Como o client
  // aqui usa a service_role key (bypassa RLS), essa era a única barreira —
  // e ela não bloqueava nada. Move a checagem pro início: sem sessão válida,
  // nenhum chunk é aceito.
  const authHeader = req.headers.get("Authorization") || "";
  const token = authHeader.replace("Bearer ", "");
  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  const userId = userData?.user?.id;
  if (userError || !userId) {
    return new Response(JSON.stringify({ error: "Não autenticado." }), { status: 401 });
  }

  const form = await req.formData();
  const file = form.get("file") as File | null;
  const chunkIndex = Number(form.get("chunkIndex"));
  const totalChunks = Number(form.get("totalChunks"));
  const fileName = (form.get("fileName") as string) ?? "unknown";
  // tmpPath prefixado pelo userId: um chunk de upload em andamento de um
  // usuário nunca colide/sobrescreve o de outro, mesmo que ambos mandem o
  // mesmo tmpPath por acidente ou de propósito.
  const clientTmpPath = (form.get("tmpPath") as string) ?? crypto.randomUUID();
  const tmpPath = `${userId}/${clientTmpPath}`;

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
    // Antes: finalPath era só `fileName`, escolhido pelo cliente, com
    // upsert:true — qualquer usuário conseguia sobrescrever o arquivo de
    // outro só mandando o mesmo nome. Prefixa com userId + um id aleatório
    // pra cada upload ter um caminho próprio, sem colisão possível.
    const finalPath = `${userId}/${crypto.randomUUID()}-${fileName}`;
    const finalUpload = await storage.upload(finalPath, finalBlob, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type,
    });
    if (finalUpload.error) {
      console.error("Final upload error", finalUpload.error);
      return new Response(JSON.stringify({ error: finalUpload.error.message }), { status: 500 });
    }
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
