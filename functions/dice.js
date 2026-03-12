export async function onRequest() {
  // Random dice roll (1-6)
  const roll = Math.floor(Math.random() * 6) + 1 + "\n";
  return new Response("k| " + roll, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
