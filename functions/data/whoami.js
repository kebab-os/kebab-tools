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
  
  const output = "k| " + JSON.stringify(data, null, 2) + "\n";
  
  return new Response(output, {
    headers: { 'content-type': 'application/json' }
  });
}
