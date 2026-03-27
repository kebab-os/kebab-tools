export async function onRequest() {
  const now = new Date();
  return new Response(now.toUTCString() + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
