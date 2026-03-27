export async function onRequest(context) {
  const { text } = context.params;
  const emails = text.match(/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g) || [];
  return new Response(emails.join('\n') + (emails.length ? '\n' : ''), { headers: { 'Content-Type': 'text/plain' } });
}
