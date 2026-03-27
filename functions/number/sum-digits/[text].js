export async function onRequest(context) {
  const { text } = context.params;
  const digits = text.replace(/[^0-9]/g, '');
  if (!digits) return new Response('No digits found\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const sum = digits.split('').reduce((a, d) => a + parseInt(d, 10), 0);
  return new Response(sum + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
