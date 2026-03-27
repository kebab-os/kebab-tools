export async function onRequest() {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
  const length = 16;
  const bytes = crypto.getRandomValues(new Uint8Array(length));
  const password = Array.from(bytes).map(b => charset[b % charset.length]).join('');
  return new Response(password + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
