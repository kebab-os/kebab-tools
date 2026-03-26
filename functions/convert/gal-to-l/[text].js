export async function onRequest(context) {
  const { text } = context.params;
  const gal = parseFloat(text);
  if (isNaN(gal)) {
    return new Response('Invalid input. Provide a number of gallons\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const l = gal / 0.264172;
  return new Response(`${l.toFixed(4)} l\n`, { headers: { 'Content-Type': 'text/plain' } });
}
