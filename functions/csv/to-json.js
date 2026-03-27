function parseCSV(raw) {
  const rows = [];
  let row = [], field = '', inQuote = false;
  for (let i = 0; i < raw.length; i++) {
    const c = raw[i];
    if (inQuote) {
      if (c === '"' && raw[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') { inQuote = false; }
      else { field += c; }
    } else {
      if (c === '"') { inQuote = true; }
      else if (c === ',') { row.push(field); field = ''; }
      else if (c === '\n' || (c === '\r' && raw[i + 1] === '\n')) {
        if (c === '\r') i++;
        row.push(field); field = '';
        rows.push(row); row = [];
      } else { field += c; }
    }
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.some(f => f !== ''));
}

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
  const rows = parseCSV(raw);
  if (rows.length < 1) return new Response('Empty CSV\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const headers = rows[0];
  const result = rows.slice(1).map(row =>
    Object.fromEntries(headers.map((h, i) => [h, row[i] ?? '']))
  );
  return new Response(JSON.stringify(result, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
}
