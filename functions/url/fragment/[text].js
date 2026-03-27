export async function onRequest(context) {
  const { text } = context.params;
  try {
    const url = new URL(text.startsWith('http') ? text : 'https://' + text);
    return new Response(url.hash + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('Invalid URL\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
