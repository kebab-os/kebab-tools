export async function onRequest(context) {
  const { text } = context.params;
  const m = parseFloat(text);
  if (isNaN(m)) {
    return new Response('Invalid input. Provide a number of meters\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const ft = m / 0.3048;
  return new Response(`${ft.toFixed(4)} ft\n`, { headers: { 'Content-Type': 'text/plain' } });
}
