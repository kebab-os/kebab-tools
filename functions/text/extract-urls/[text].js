export async function onRequest(context) {
  const { text } = context.params;
  const urls = text.match(/https?:\/\/[^\s<>"{}|\\^`\[\]]+/g) || [];
  return new Response(urls.join('\n') + (urls.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
}
