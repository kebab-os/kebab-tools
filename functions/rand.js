export async function onRequest() {
  // Generate a random number
  const random = Math.random() + "\n";
  return new Response(random, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
