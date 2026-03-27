export async function onRequest(context) {
  const { text } = context.params;
  try {
    JSON.parse(decodeURIComponent(text));
    return new Response('true\n', { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
  }
}
