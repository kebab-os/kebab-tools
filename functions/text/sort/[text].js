export async function onRequest(context) {
  const { text } = context.params;
  const sorted = text.split('').sort().join('');
  return new Response("k| " + sorted + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
