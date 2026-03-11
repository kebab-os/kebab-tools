export async function onRequest() {
  const timestamp = Math.floor(Date.now() / 1000) + "\n";
  return new Response("k| "+ timestamp.toString(), {
    headers: { 'Content-Type': 'text/plain' }
  });
}
