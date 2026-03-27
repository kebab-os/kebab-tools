export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  const em = parts[0];
  const base = parts[1] || 16;
  if (isNaN(em)) return new Response('Usage: em-to-px/em or em-to-px/em,base\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((em * base).toFixed(4) + 'px\n', { headers: { 'Content-Type': 'text/plain' } });
}
