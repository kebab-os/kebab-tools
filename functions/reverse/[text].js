export async function onRequest(context) {
  const { text } = context.params;
  const reversed = text.split('').reverse().join('');
  return new Response("k| " + reversed + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
