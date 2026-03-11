export async function onRequest(context) {
  const { request } = context;
  const cf = request.cf;
  const data = {
    ip: request.headers.get('cf-connecting-ip'),
    country: cf.country,
    city: cf.city,
    timezone: cf.timezone,
    colo: cf.colo // Data centre code
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: { 'content-type': 'application/json' }
  });
}
