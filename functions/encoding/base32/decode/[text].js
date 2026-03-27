export async function onRequest(context) {
  const { text } = context.params;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  const input = text.toUpperCase().replace(/=+$/, '');
  let bits = 0, value = 0;
  const output = [];
  for (const char of input) {
    const idx = alphabet.indexOf(char);
    if (idx === -1) return new Response('Invalid base32\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
    value = (value << 5) | idx;
    bits += 5;
    if (bits >= 8) { output.push((value >>> (bits - 8)) & 255); bits -= 8; }
  }
  const result = new TextDecoder().decode(new Uint8Array(output));
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
