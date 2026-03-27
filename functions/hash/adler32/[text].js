export async function onRequest(context) {
  const { text } = context.params;
  const bytes = new TextEncoder().encode(text);
  let a = 1, b = 0;
  for (const byte of bytes) {
    a = (a + byte) % 65521;
    b = (b + a) % 65521;
  }
  const checksum = ((b << 16) | a) >>> 0;
  return new Response(checksum.toString(16).padStart(8, '0') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
