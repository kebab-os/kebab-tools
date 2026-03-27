export async function onRequest(context) {
  const { text } = context.params;
  const length = parseInt(text, 10);
  if (isNaN(length) || length < 4 || length > 128) {
    return new Response('Length must be between 4 and 128\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  const password = Array.from(bytes).map(b => charset[b % charset.length]).join('');
  return new Response(password + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
