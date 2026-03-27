export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 3 || parts.some(isNaN)) {
    return new Response('Usage: clamp/value,min,max\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const [value, min, max] = parts;
  const result = Math.min(Math.max(value, min), max);
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
