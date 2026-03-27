export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  if (parts.length !== 2 || parts.some(isNaN) || parts[1] === 0) {
    return new Response('Usage: percent-of/part,total\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const [part, total] = parts;
  const result = ((part / total) * 100).toFixed(4);
  return new Response(result + "%\n", { headers: { 'Content-Type': 'text/plain' } });
}
