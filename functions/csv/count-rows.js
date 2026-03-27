export async function onRequest(context) {
  const { request } = context;
  let raw;
  if (request.method === 'POST') {
    raw = await request.text();
  } else {
    const url = new URL(request.url);
    raw = url.searchParams.get('data') || '';
  }
  if (!raw.trim()) return new Response('No CSV provided\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const rows = raw.trim().split('\n').filter(Boolean).length - 1;
  return new Response(Math.max(0, rows) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
