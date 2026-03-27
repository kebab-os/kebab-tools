export async function onRequest(context) {
  const { text } = context.params;
  const url = text.startsWith('http') ? text : 'https://' + text;
  try {
    new URL(url);
  } catch {
    return new Response('Invalid URL\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const start = Date.now();
  try {
    const resp = await fetch(url, { method: 'HEAD', redirect: 'follow' });
    const ms = Date.now() - start;
    return new Response(`${resp.status} ${resp.statusText} (${ms}ms)\n`, { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Error: ${e.message}\n`, { status: 502, headers: { 'Content-Type': 'text/plain' } });
  }
}
