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
    return new Response('No JSON provided. POST a body or use ?data=... and ?keys=key1,key2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const reqUrl = new URL(request.url);
  const keysParam = reqUrl.searchParams.get('keys') || '';
  const keys = keysParam.split(',').map(k => k.trim()).filter(Boolean);
  if (!keys.length) {
    return new Response('Provide ?keys=key1,key2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  try {
    const parsed = JSON.parse(raw);
    const result = Object.fromEntries(keys.filter(k => k in parsed).map(k => [k, parsed[k]]));
    return new Response(JSON.stringify(result, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(`Invalid JSON: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
