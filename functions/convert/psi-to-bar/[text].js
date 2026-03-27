export async function onRequest(context) {
  const { text } = context.params;
  const psi = parseFloat(text);
  if (isNaN(psi)) return new Response('Invalid PSI value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response((psi * 0.0689476).toFixed(6) + ' bar\n', { headers: { 'Content-Type': 'text/plain' } });
}
