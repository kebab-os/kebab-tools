export async function onRequest() {
  const types = [
    'text/html',
    'text/plain',
    'application/json',
    'application/xml',
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'application/octet-stream',
    '*/*'
  ];
  return new Response(types.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
