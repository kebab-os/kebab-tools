export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    return new Response('Usage: lerp/a,b,t (t between 0 and 1)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const [a, b, t] = parts;
  const result = a + (b - a) * t;
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
