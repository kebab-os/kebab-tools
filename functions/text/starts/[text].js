export async function onRequest(context) {
  const { text } = context.params;
  const [prefix, ...rest] = text.split(',');
  const str = rest.join(',');
  const result = str.startsWith(prefix) ? 'yes' : 'no';
  return new Response("k| " + result + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
