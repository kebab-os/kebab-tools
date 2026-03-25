export async function onRequest(context) {
  const { request } = context;
  const city = request.cf?.city || 'unknown';
  return new Response(city + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
