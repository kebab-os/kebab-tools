export async function onRequest(context) {
  const { text } = context.params;
  const ft = parseFloat(text);
  if (isNaN(ft)) {
    return new Response('Invalid input. Provide a number of feet\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const m = ft * 0.3048;
  return new Response(`${m.toFixed(4)} m\n`, { headers: { 'Content-Type': 'text/plain' } });
}
