export async function onRequest() {
  const timestamp = Math.floor(Date.now() / 1000);
  return new Response(timestamp.toString(), {
    headers: { 'Content-Type': 'text/plain' }
  });
}
