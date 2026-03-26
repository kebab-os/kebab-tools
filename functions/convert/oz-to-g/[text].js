export async function onRequest(context) {
  const { text } = context.params;
  const oz = parseFloat(text);
  if (isNaN(oz)) {
    return new Response('Invalid input. Provide a number of ounces\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const g = oz * 28.3495;
  return new Response(`${g.toFixed(4)} g\n`, { headers: { 'Content-Type': 'text/plain' } });
}
