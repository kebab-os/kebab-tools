export async function onRequest(context) {
  const { text } = context.params;
  const tags = text.match(/#[a-zA-Z0-9_]+/g) || [];
  return new Response(tags.join('\n') + (tags.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
}
