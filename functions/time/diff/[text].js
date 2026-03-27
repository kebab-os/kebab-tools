export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length !== 2) return new Response('Usage: diff/timestamp1,timestamp2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const t1 = parseInt(parts[0], 10);
  const t2 = parseInt(parts[1], 10);
  if (isNaN(t1) || isNaN(t2)) return new Response('Invalid timestamps\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(Math.abs(t2 - t1) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
