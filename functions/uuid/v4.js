export async function onRequest() {
  return new Response(crypto.randomUUID() + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
