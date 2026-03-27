export async function onRequest(context) {
  const { text } = context.params;
  const url = text.startsWith('http') ? text : 'https://' + text;
  try {
    new URL(url);
  } catch {
    return new Response('Invalid URL\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  try {
    const resp = await fetch(url, { method: 'HEAD' });
    const headers = {};
    for (const [k, v] of resp.headers.entries()) {
      headers[k] = v;
    }
    return new Response(JSON.stringify(headers, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(`Error: ${e.message}\n`, { status: 502, headers: { 'Content-Type': 'text/plain' } });
  }
}
