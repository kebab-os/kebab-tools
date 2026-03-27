export async function onRequest(context) {
  const { text } = context.params;
  const url = text.startsWith('http') ? text : 'https://' + text;
  try {
    new URL(url);
  } catch {
    return new Response('Invalid URL\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  try {
    const resp = await fetch(url, { redirect: 'follow' });
    return new Response(`Final URL: ${resp.url}\nStatus: ${resp.status}\n`, { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Error: ${e.message}\n`, { status: 502, headers: { 'Content-Type': 'text/plain' } });
  }
}
