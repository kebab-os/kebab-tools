export async function onRequest() {
  return new Response(new Date().toUTCString() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
