export async function onRequest() {
  // Return Cloudflare datacenter location
  const colo = request.cf?.colo || 'unknown';
  return new Response("k| " + colo + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
