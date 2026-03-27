export async function onRequest() {
  return new Response('kebab-tools 2026\n', { headers: { 'Content-Type': 'text/plain' } });
}
