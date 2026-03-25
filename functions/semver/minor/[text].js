export async function onRequest(context) {
  const { text } = context.params;
  const match = text.replace(/^v/, '').match(/^\d+\.(\d+)\./);
  if (!match) {
    return new Response('Invalid semver\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response(match[1] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
