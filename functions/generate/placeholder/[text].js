export async function onRequest(context) {
  const { text } = context.params;
  const match = text.match(/^(\d+)[x×](\d+)$/i);
  if (!match) return new Response('Usage: placeholder/800x600\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const [, w, h] = match;
  return new Response(`https://via.placeholder.com/${w}x${h}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
