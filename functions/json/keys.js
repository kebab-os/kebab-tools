export async function onRequest(context) {
  const { request } = context;
  let raw;
  if (request.method === 'POST') {
    raw = await request.text();
  } else {
    const url = new URL(request.url);
    raw = url.searchParams.get('data') || '';
  }
  if (!raw.trim()) {
    return new Response('No JSON provided. POST a body or use ?data=...\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || Array.isArray(parsed) || parsed === null) {
      return new Response('Input must be a JSON object\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
    }
    return new Response(Object.keys(parsed).join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid JSON: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
