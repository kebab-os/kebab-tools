export async function onRequest(context) {
  const { text } = context.params;
  const mentions = text.match(/@[a-zA-Z0-9_]+/g) || [];
  return new Response(mentions.join('\n') + (mentions.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
}
