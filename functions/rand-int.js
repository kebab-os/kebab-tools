export async function onRequest() {
  // Generate a random integer
  const randomInt = Math.floor(Math.random() * 10);
  return new Response(randomInt, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
