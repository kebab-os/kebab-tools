export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 1 || n > 512) return new Response('Provide a length between 1 and 512\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const bytes = crypto.getRandomValues(new Uint8Array(Math.ceil(n / 2)));
  const hex = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, n);
  return new Response(hex + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
