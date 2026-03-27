export async function onRequest() {
  const phi = (1 + Math.sqrt(5)) / 2;
  return new Response(phi.toPrecision(20) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
