export async function onRequest(context) {
  const { text } = context.params;
  const bytes = new TextEncoder().encode(text);
  let hash = 5381;
  for (const byte of bytes) {
    hash = (Math.imul(hash, 33) + byte) >>> 0;
  }
  return new Response(hash.toString(16).padStart(8, '0') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
