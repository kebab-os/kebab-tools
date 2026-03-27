export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  const year = 1970 + (bytes[0] % 55);
  const month = (bytes[1] % 12) + 1;
  const day = (bytes[2] % 28) + 1;
  const pad = n => String(n).padStart(2, '0');
  return new Response(`${year}-${pad(month)}-${pad(day)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
