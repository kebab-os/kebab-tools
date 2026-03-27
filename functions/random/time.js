export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(3));
  const h = bytes[0] % 24, m = bytes[1] % 60, s = bytes[2] % 60;
  const pad = n => String(n).padStart(2, '0');
  return new Response(`${pad(h)}:${pad(m)}:${pad(s)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
