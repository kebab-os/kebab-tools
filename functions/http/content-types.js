export async function onRequest() {
  const types = [
    'application/json',
    'application/xml',
    'text/html',
    'text/plain',
    'text/csv',
    'text/markdown',
    'application/x-www-form-urlencoded',
    'multipart/form-data',
    'application/javascript',
    'application/octet-stream',
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/svg+xml',
    'application/pdf'
  ];
  return new Response(types.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
