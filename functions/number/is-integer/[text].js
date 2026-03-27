export async function onRequest(context) {
  const { text } = context.params;
  const n = Number(text);
  return new Response((Number.isFinite(n) && Number.isInteger(n) ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
