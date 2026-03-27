export async function onRequest() {
  return new Response('00000000-0000-0000-0000-000000000000\n', {
    headers: { 'Content-Type': 'text/plain' }
  });
}
