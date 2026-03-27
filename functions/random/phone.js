export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(7));
  const area = 200 + (bytes[0] % 800);
  const prefix = 200 + (bytes[1] % 800);
  const line = ((bytes[2] << 16) | (bytes[3] << 8) | bytes[4]) % 10000;
  return new Response(`+1 (${area}) ${prefix}-${String(line).padStart(4,'0')}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
