export async function onRequest(context) {
  const { text } = context.params;
  try {
    return new Response(decodeURIComponent(text) + "\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  } catch {
    return new Response('Invalid URL-encoded string\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
