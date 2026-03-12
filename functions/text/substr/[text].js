export async function onRequest(context) {
  const { text } = context.params;
  const [start, length, ...rest] = text.split(',');
  const str = rest.join(',');
  const sub = str.substr(parseInt(start) || 0, parseInt(length) || str.length);
  return new Response("k| " + sub + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
