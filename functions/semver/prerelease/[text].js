export async function onRequest(context) {
  const { text } = context.params;
  const match = text.trim().match(/^v?\d+\.\d+\.\d+-(\S+)/);
  if (!match) return new Response('No prerelease tag found\n', { headers: { 'Content-Type': 'text/plain' } });
  return new Response(match[1] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
