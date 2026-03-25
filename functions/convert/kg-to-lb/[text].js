export async function onRequest(context) {
  const { text } = context.params;
  const kg = parseFloat(text);
  if (isNaN(kg)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const lb = (kg * 2.20462).toFixed(4);
  return new Response(`${lb} lb\n`, { headers: { 'Content-Type': 'text/plain' } });
}
