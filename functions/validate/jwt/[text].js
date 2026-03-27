export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split('.');
  if (parts.length !== 3) return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  const base64url = /^[A-Za-z0-9_-]+$/;
  const valid = parts.every(p => base64url.test(p));
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
