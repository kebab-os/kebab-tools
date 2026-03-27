export async function onRequest(context) {
  const { text } = context.params;
  const length = parseInt(text, 10);
  if (isNaN(length) || length < 1 || length > 20) {
    return new Response('Length must be between 1 and 20\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  const pin = Array.from(bytes).map(b => b % 10).join('');
  return new Response(pin + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
