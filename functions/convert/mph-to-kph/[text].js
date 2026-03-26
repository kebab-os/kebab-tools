export async function onRequest(context) {
  const { text } = context.params;
  const mph = parseFloat(text);
  if (isNaN(mph)) {
    return new Response('Invalid input. Provide a number of mph\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const kph = mph * 1.60934;
  return new Response(`${kph.toFixed(4)} kph\n`, { headers: { 'Content-Type': 'text/plain' } });
}
