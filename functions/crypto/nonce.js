export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  const nonce = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(nonce + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
