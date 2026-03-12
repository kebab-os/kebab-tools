export async function onRequest(context) {
  const { text } = context.params;
  const [pattern, ...rest] = text.split(',');
  const str = rest.join(',');
  const matches = str.match(new RegExp(pattern, 'g')) || [];
  return new Response("k| " + matches.join(', ') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
