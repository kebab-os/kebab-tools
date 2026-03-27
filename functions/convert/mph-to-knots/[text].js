export async function onRequest(context) {
  const { text } = context.params;
  const mph = parseFloat(text);
  if (isNaN(mph)) return new Response('Invalid mph value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((mph / 1.15078).toFixed(4) + ' kn\n', { headers: { 'Content-Type': 'text/plain' } });
}
