export async function onRequest(context) {
  const { text } = context.params;
  const miles = parseFloat(text);
  if (isNaN(miles)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const km = (miles * 1.60934).toFixed(4);
  return new Response(`${km} km\n`, { headers: { 'Content-Type': 'text/plain' } });
}
