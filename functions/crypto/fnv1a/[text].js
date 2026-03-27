export async function onRequest(context) {
  const { text } = context.params;
  const bytes = new TextEncoder().encode(text);
  let hash = 0x811c9dc5;
  for (const byte of bytes) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return new Response('0x' + hash.toString(16).padStart(8, '0') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
