export async function onRequest(context) {
  const { text } = context.params;
  const rad = parseFloat(text);
  if (isNaN(rad)) {
    return new Response('Invalid input. Provide a number of radians\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const deg = rad * (180 / Math.PI);
  return new Response(deg + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
