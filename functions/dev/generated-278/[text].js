export async function onRequest(context) {
  const { text } = context.params;
  const input = (text || '').trim();
  if (!input) {
    return new Response('No text provided. Use /dev/generated-278/<text>\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  return new Response(`generated-278: ${input}\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
