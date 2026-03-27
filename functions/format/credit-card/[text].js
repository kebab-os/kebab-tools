export async function onRequest(context) {
  const { text } = context.params;
  const digits = text.replace(/\D/g, '');
  if (digits.length < 13 || digits.length > 19) {
    return new Response('Invalid card number length\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const groups = [];
  for (let i = 0; i < digits.length; i += 4) groups.push(digits.slice(i, i + 4));
  return new Response(groups.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
