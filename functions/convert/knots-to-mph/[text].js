export async function onRequest(context) {
  const { text } = context.params;
  const knots = parseFloat(text);
  if (isNaN(knots)) return new Response('Invalid knots value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((knots * 1.15078).toFixed(4) + ' mph\n', { headers: { 'Content-Type': 'text/plain' } });
}
