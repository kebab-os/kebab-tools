export async function onRequest(context) {
  const { text } = context.params;
  try {
    const url = new URL(text.startsWith('http') ? text : 'https://x.com?' + text);
    const params = {};
    for (const [k, v] of url.searchParams.entries()) {
      params[k] = v;
    }
    return new Response(JSON.stringify(params, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
  } catch {
    return new Response('Invalid URL or query string\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
