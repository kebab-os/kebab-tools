function parseCSVRow(line) {
  const fields = [];
  let field = '', inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuote) {
      if (c === '"' && line[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') { inQuote = false; }
      else { field += c; }
    } else {
      if (c === '"') { inQuote = true; }
      else if (c === ',') { fields.push(field); field = ''; }
      else { field += c; }
    }
  }
  fields.push(field);
  return fields;
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
  const firstLine = raw.trim().split('\n')[0].replace(/\r$/, '');
  const headers = parseCSVRow(firstLine);
  return new Response(headers.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
