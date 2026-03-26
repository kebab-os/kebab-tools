export async function onRequest() {
  const bool = Math.random() < 0.5 ? 'true' : 'false';
  return new Response(bool + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
