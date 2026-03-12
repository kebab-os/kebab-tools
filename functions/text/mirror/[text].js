export async function onRequest(context) {
  const { text } = context.params;
  const mirrored = text + text.split('').reverse().join('');
  return new Response("k| " + mirrored + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
