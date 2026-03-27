export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  const rem = parts[0];
  const base = parts[1] || 16;
  if (isNaN(rem)) return new Response('Usage: rem-to-px/rem or rem-to-px/rem,base\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((rem * base).toFixed(4) + 'px\n', { headers: { 'Content-Type': 'text/plain' } });
}
