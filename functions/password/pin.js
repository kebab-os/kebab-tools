export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  const pin = Array.from(bytes).map(b => b % 10).join('');
  return new Response(pin + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
