export async function onRequest(context) {
  const { text } = context.params;
  const f = parseFloat(text);
  if (isNaN(f)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const c = ((f - 32) * 5 / 9).toFixed(4);
  return new Response(`${c}°C\n`, { headers: { 'Content-Type': 'text/plain' } });
}
