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
  if (!rows.length) return new Response('Empty CSV\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const cols = Math.max(...rows.map(r => r.length));
  const widths = Array.from({ length: cols }, (_, i) => Math.max(...rows.map(r => (r[i] || '').length)));
  const sep = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  const formatRow = r => '|' + widths.map((w, i) => ' ' + (r[i] || '').padEnd(w) + ' ').join('|') + '|';
  const result = [sep, formatRow(rows[0]), sep, ...rows.slice(1).map(formatRow), sep];
  return new Response(result.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
