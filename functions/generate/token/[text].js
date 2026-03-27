export async function onRequest(context) {
  const { text } = context.params;
  const length = Math.min(parseInt(text, 10) || 32, 256);
  if (isNaN(length) || length < 1) return new Response('Provide a length between 1 and 256\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const bytes = crypto.getRandomValues(new Uint8Array(Math.ceil(length / 2)));
  const token = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, length);
  return new Response(token + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
