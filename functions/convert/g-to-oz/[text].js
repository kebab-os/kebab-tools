export async function onRequest(context) {
  const { text } = context.params;
  const g = parseFloat(text);
  if (isNaN(g)) {
    return new Response('Invalid input. Provide a number of grams\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const oz = g / 28.3495;
  return new Response(`${oz.toFixed(4)} oz\n`, { headers: { 'Content-Type': 'text/plain' } });
}
