export async function onRequest() {
  return new Response(Math.E.toPrecision(20) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
