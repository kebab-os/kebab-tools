export async function onRequest(context) {
  const { text } = context.params;
  const [search, ...rest] = text.split(',');
  const str = rest.join(',');
  const idx = str.indexOf(search);
  return new Response("k| " + idx + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
