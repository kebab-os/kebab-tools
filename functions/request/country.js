export async function onRequest(context) {
  const { request } = context;
  const country = request.cf?.country || request.headers.get('cf-ipcountry') || 'unknown';
  return new Response(country + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
