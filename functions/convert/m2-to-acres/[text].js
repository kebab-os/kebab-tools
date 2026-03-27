export async function onRequest(context) {
  const { text } = context.params;
  const m2 = parseFloat(text);
  if (isNaN(m2)) return new Response('Invalid m² value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((m2 / 4046.8564).toFixed(6) + ' acres\n', { headers: { 'Content-Type': 'text/plain' } });
}
