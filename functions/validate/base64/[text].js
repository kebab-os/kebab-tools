export async function onRequest(context) {
  const { text } = context.params;
  const valid = /^[A-Za-z0-9+/]*={0,2}$/.test(text) && text.length % 4 === 0;
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
