export async function onRequest(context) {
  const { request } = context;
  const accept = request.headers.get('Accept') || '*/*';
  return new Response(accept + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
