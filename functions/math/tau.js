export async function onRequest() {
  const tau = 2 * Math.PI;
  return new Response(tau.toPrecision(20) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
