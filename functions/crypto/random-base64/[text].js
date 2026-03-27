export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 1 || n > 256) return new Response('Provide a byte count between 1 and 256\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const bytes = crypto.getRandomValues(new Uint8Array(n));
  const b64 = btoa(String.fromCharCode(...bytes));
  return new Response(b64 + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
