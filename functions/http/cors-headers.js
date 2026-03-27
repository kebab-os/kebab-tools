export async function onRequest() {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
    'Access-Control-Max-Age': '86400',
    'Access-Control-Allow-Credentials': 'true'
  };
  const lines = Object.entries(headers).map(([k, v]) => `${k}: ${v}`);
  return new Response(lines.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
