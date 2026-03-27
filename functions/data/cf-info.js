export async function onRequest(context) {
  const { request } = context;
  const info = {
    ip: request.headers.get('CF-Connecting-IP'),
    country: request.headers.get('CF-IPCountry'),
    ray: request.headers.get('CF-RAY'),
    datacenter: request.headers.get('CF-RAY')?.split('-')[1] || null,
    visitor_lat: request.headers.get('CF-IPLatitude'),
    visitor_lon: request.headers.get('CF-IPLongitude'),
    timezone: request.headers.get('CF-Timezone'),
    city: request.headers.get('CF-IPCity'),
    region: request.headers.get('CF-Region')
  };
  return new Response(JSON.stringify(info, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
}
