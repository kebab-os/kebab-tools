export async function onRequest(context) {
  const { text } = context.params;
  let n = parseInt(text.replace(/[^0-9]/g, ''), 10);
  if (isNaN(n)) return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  while (n >= 10) {
    n = n.toString().split('').reduce((a, d) => a + parseInt(d, 10), 0);
  }
  return new Response(n + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
