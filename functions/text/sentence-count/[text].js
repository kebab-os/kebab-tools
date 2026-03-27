export async function onRequest(context) {
  const { text } = context.params;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  return new Response(sentences.length + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
