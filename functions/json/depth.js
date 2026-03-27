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
    const getDepth = v => {
      if (v === null || typeof v !== 'object') return 0;
      if (Object.keys(v).length === 0) return 1;
      return 1 + Math.max(...Object.values(v).map(getDepth));
    };
    const depth = getDepth(JSON.parse(raw));
    return new Response(depth + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid JSON: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
