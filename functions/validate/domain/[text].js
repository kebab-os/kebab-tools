export async function onRequest(context) {
  const { text } = context.params;
  const valid = /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/.test(text);
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
