export async function onRequest(context) {
  const { text } = context.params;
  const km = parseFloat(text);
  if (isNaN(km)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const miles = (km * 0.621371).toFixed(4);
  return new Response(`${miles} miles\n`, { headers: { 'Content-Type': 'text/plain' } });
}
