export async function onRequest(context) {
  const { request } = context;
  const headers = {};
  for (const [key, value] of request.headers.entries()) {
    headers[key] = value;
  }
  return new Response(JSON.stringify(headers, null, 2) + "\n", {
    headers: { 'Content-Type': 'application/json' }
  });
}
