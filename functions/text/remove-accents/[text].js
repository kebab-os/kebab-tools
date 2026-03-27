export async function onRequest(context) {
  const { text } = context.params;
  const result = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
