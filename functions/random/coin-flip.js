export async function onRequest() {
  // Random coin flip
  const flip = Math.random() < 0.5 ? 'heads' : 'tails';
  return new Response("k| " + flip + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
