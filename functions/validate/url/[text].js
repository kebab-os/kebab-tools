export async function onRequest(context) {
  const { text } = context.params;
  try {
    const url = new URL(text);
    const valid = url.protocol === 'http:' || url.protocol === 'https:';
    return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  }
}
