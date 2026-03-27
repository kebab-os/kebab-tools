export async function onRequest(context) {
  const { text } = context.params;
  const acres = parseFloat(text);
  if (isNaN(acres)) return new Response('Invalid acres value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((acres * 4046.8564).toFixed(4) + ' m²\n', { headers: { 'Content-Type': 'text/plain' } });
}
