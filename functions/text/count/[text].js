export async function onRequest(context) {
  const { text } = context.params;
  const [search, ...rest] = text.split(',');
  const str = rest.join(',');
  const count = (str.match(new RegExp(search, 'g')) || []).length;
  return new Response("k| " + count + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
