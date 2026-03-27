export async function onRequest(context) {
  const { request } = context;
  const headers = {};
  for (const [k, v] of request.headers.entries()) {
    headers[k] = v;
  }
  return new Response(JSON.stringify(headers, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
}
