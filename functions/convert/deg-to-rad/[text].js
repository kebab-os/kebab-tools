export async function onRequest(context) {
  const { text } = context.params;
  const deg = parseFloat(text);
  if (isNaN(deg)) {
    return new Response('Invalid input. Provide a number of degrees\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const rad = deg * (Math.PI / 180);
  return new Response(rad + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
