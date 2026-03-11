export async function onRequest() {
  // Generate a random UUID v4
  const uuid = crypto.randomUUID() + "\n";
  return new Response("k| "+ uuid, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
