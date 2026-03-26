export async function onRequest(context) {
  const { text } = context.params;
  const inches = parseFloat(text);
  if (isNaN(inches)) {
    return new Response('Invalid input. Provide a number of inches\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const cm = inches * 2.54;
  return new Response(`${cm.toFixed(4)} cm\n`, { headers: { 'Content-Type': 'text/plain' } });
}
