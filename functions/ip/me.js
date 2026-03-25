export async function onRequest(context) {
  const { request } = context;
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  return new Response(ip + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
