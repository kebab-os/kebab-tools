export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  const n = parts[0];
  const decimals = isNaN(parts[1]) ? 2 : parts[1];
  if (isNaN(n)) return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(n.toFixed(decimals) + '%\n', { headers: { 'Content-Type': 'text/plain' } });
}
