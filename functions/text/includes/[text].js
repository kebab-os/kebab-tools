export async function onRequest(context) {
  const { text } = context.params;
  const [search, ...rest] = text.split(',');
  const str = rest.join(',');
  const result = str.includes(search) ? 'yes' : 'no';
  return new Response("k| " + result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
