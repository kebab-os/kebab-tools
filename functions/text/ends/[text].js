export async function onRequest(context) {
  const { text } = context.params;
  const [suffix, ...rest] = text.split(',');
  const str = rest.join(',');
  const result = str.endsWith(suffix) ? 'yes' : 'no';
  return new Response("k| " + result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
