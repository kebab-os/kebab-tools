export async function onRequest() {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'];
  return new Response(methods.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
