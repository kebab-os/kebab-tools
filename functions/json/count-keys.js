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
    const countKeys = v => {
      if (v === null || typeof v !== 'object') return 0;
      const keys = Object.keys(v).length;
      return keys + Object.values(v).reduce((sum, child) => sum + countKeys(child), 0);
    };
    return new Response(countKeys(JSON.parse(raw)) + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`Invalid JSON: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
