export async function onRequest(context) {
  const { text } = context.params;
  const [str, delimiter] = text.split(',').map(s => s.trim());
  const parts = str.split(delimiter || '');
  return new Response("k| " + parts.join('\nk| ') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
