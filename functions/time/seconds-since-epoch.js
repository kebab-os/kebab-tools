export async function onRequest() {
  // Count seconds since epoch
  const seconds = Math.floor(Date.now() / 1000) + "\n";
  return new Response("k| " + seconds, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
