export async function onRequest() {
  // Generate a random number
  const random = Math.random() + "\n";
  return new Response("k| "+ random, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
