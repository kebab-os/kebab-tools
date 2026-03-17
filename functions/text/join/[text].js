export async function onRequest(context) {
  const { text } = context.params;
  const [delimiter, ...parts] = text.split(',');
  const joined = parts.join(delimiter || '');
  return new Response(joined + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
