export async function onRequest(context) {
  const { text } = context.params;
  const bar = parseFloat(text);
  if (isNaN(bar)) return new Response('Invalid bar value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((bar / 0.0689476).toFixed(4) + ' psi\n', { headers: { 'Content-Type': 'text/plain' } });
}
