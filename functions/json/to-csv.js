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
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr) || arr.length === 0) {
      return new Response('Input must be a non-empty JSON array of objects\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
    }
    const headers = [...new Set(arr.flatMap(o => Object.keys(o)))];
    const escape = v => {
      const s = String(v ?? '');
      return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g,'""')}"` : s;
    };
    const rows = [headers.join(','), ...arr.map(row => headers.map(h => escape(row[h])).join(','))];
    return new Response(rows.join('\n') + "\n", { headers: { 'Content-Type': 'text/csv' } });
  } catch (e) {
    return new Response(`Invalid JSON: ${e.message}\n`, { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
