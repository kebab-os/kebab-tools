export async function onRequest(context) {
  const { text } = context.params;
  const negative = text.startsWith('-');
  const digits = text.replace(/[^0-9]/g, '');
  if (!digits) return new Response('No digits found\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const reversed = parseInt(digits.split('').reverse().join(''), 10);
  return new Response((negative ? -reversed : reversed) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
