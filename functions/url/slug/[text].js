export async function onRequest(context) {
  const { text } = context.params;
  const slug = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');
  return new Response(slug + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
