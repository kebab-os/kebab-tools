export async function onRequest() {
  return new Response(Math.floor(Date.now() / 1000) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
