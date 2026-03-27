export async function onRequest(context) {
  const { request } = context;
  const lang = request.headers.get('Accept-Language') || 'unknown';
  return new Response(lang + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
