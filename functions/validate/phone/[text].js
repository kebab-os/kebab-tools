export async function onRequest(context) {
  const { text } = context.params;
  const cleaned = text.replace(/[\s.()\-+]/g, '');
  const valid = /^\d{7,15}$/.test(cleaned);
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
