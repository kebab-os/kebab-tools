export async function onRequest(context) {
  const { text } = context.params;
  const c = parseFloat(text);
  if (isNaN(c)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const f = (c * 9 / 5) + 32;
  return new Response(`${f}°F\n`, { headers: { 'Content-Type': 'text/plain' } });
}
