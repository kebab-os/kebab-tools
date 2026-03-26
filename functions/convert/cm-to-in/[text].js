export async function onRequest(context) {
  const { text } = context.params;
  const cm = parseFloat(text);
  if (isNaN(cm)) {
    return new Response('Invalid input. Provide a number of centimeters\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
  const inches = cm / 2.54;
  return new Response(`${inches.toFixed(4)} in\n`, { headers: { 'Content-Type': 'text/plain' } });
}
