export async function onRequest(context) {
  const { text } = context.params;
  const n = parseFloat(text);
  if (isNaN(n)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const sign = n > 0 ? '1' : n < 0 ? '-1' : '0';
  return new Response(sign + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
