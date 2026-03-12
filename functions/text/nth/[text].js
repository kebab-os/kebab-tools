export async function onRequest(context) {
  const { text } = context.params;
  const [n, ...rest] = text.split(',');
  const index = parseInt(n) || 0;
  const parts = rest.join(',').split(',');
  const item = parts[index] || '';
  return new Response("k| " + item.trim() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
