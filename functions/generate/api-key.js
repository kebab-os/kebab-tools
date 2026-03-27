export async function onRequest() {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const key = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
  return new Response(key + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
