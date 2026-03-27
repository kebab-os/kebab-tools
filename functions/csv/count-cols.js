function countCSVCols(line) {
  let count = 1, inQuote = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (inQuote) {
      if (c === '"' && line[i + 1] === '"') { i++; }
      else if (c === '"') { inQuote = false; }
    } else {
      if (c === '"') { inQuote = true; }
      else if (c === ',') { count++; }
    }
  }
  return count;
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
  return new Response(countCSVCols(firstLine) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
