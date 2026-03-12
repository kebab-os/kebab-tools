export async function onRequest(context) {
  const { text } = context.params;
  const [start, end, ...rest] = text.split(',');
  const str = rest.join(',');
  const sliced = str.slice(parseInt(start) || 0, parseInt(end) || str.length);
  return new Response("k| " + sliced + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
