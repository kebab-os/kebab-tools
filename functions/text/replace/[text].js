export async function onRequest(context) {
  const { text } = context.params;
  const [search, replace, ...rest] = text.split(',');
  const str = rest.join(',');
  const result = str.split(search).join(replace);
  return new Response("k| " + result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
