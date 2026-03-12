export async function onRequest(context) {
  const { text } = context.params;
  const unique = [...new Set(text)].join('');
  return new Response("k| " + unique + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
