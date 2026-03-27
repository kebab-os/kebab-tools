export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(Number);
  const px = parts[0];
  const base = parts[1] || 16;
  if (isNaN(px)) return new Response('Usage: px-to-em/px or px-to-em/px,base\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((px / base).toFixed(4) + 'em\n', { headers: { 'Content-Type': 'text/plain' } });
}
