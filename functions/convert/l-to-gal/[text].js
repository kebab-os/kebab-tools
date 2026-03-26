export async function onRequest(context) {
  const { text } = context.params;
  const l = parseFloat(text);
  if (isNaN(l)) {
    return new Response('Invalid input. Provide a number of liters\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const gal = l * 0.264172;
  return new Response(`${gal.toFixed(4)} gal\n`, { headers: { 'Content-Type': 'text/plain' } });
}
