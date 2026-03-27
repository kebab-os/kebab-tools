export async function onRequest() {
  return new Response(Math.PI.toPrecision(20) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
