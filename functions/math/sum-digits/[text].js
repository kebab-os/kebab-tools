export async function onRequest(context) {
  const { text } = context.params;
  const n = text.replace(/[^0-9]/g, '');
  if (!n) return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const sum = n.split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  return new Response(sum + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
