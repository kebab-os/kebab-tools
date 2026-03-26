export async function onRequest(context) {
  const { text } = context.params;
  const kph = parseFloat(text);
  if (isNaN(kph)) {
    return new Response('Invalid input. Provide a number of kph\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const mph = kph / 1.60934;
  return new Response(`${mph.toFixed(4)} mph\n`, { headers: { 'Content-Type': 'text/plain' } });
}
