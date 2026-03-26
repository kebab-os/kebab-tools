export async function onRequest() {
  const now = new Date().toISOString();
  return new Response(now + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
