export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.split('').map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
  return new Response("k| " + hex + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
