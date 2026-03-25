export async function onRequest(context) {
  const { text } = context.params;
  const lb = parseFloat(text);
  if (isNaN(lb)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const kg = (lb * 0.453592).toFixed(4);
  return new Response(`${kg} kg\n`, { headers: { 'Content-Type': 'text/plain' } });
}
