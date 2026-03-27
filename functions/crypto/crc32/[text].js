export async function onRequest(context) {
  const { text } = context.params;
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1;
    table[i] = c;
  }
  const bytes = new TextEncoder().encode(text);
  let crc = 0xFFFFFFFF;
  for (const byte of bytes) crc = table[(crc ^ byte) & 0xFF] ^ (crc >>> 8);
  crc = (crc ^ 0xFFFFFFFF) >>> 0;
  return new Response('0x' + crc.toString(16).padStart(8, '0') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
