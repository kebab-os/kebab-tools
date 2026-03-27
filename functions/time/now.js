export async function onRequest() {
  return new Response(Date.now() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
