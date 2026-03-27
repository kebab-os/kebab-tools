export async function onRequest(context) {
  const { request } = context;
  const ip = request.headers.get('CF-Connecting-IP') ||
             request.headers.get('X-Forwarded-For')?.split(',')[0]?.trim() ||
             'unknown';
  return new Response(ip + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
