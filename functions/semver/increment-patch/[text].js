export async function onRequest(context) {
  const { text } = context.params;
  const match = text.trim().match(/^v?(\d+)\.(\d+)\.(\d+)/);
  if (!match) return new Response('Invalid semver\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  return new Response(`${match[1]}.${match[2]}.${parseInt(match[3]) + 1}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
