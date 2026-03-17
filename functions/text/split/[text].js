export async function onRequest(context) {
  const { text } = context.params;
  const [str, delimiter] = text.split(',').map(s => s.trim());
  const parts = str.split(delimiter || '');
  return new Response(parts.join('\n') + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
