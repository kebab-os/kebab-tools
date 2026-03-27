export async function onRequest(context) {
  const { text } = context.params;
  const lines = decodeURIComponent(text).split('\n').filter(Boolean);
  if (!lines.length) return new Response('No data\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const rows = lines.map(l => l.split(','));
  const cols = Math.max(...rows.map(r => r.length));
  const widths = Array.from({length: cols}, (_, i) => Math.max(...rows.map(r => (r[i] || '').length)));
  const sep = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+';
  const formatRow = r => '|' + widths.map((w, i) => ' ' + (r[i] || '').padEnd(w) + ' ').join('|') + '|';
  const result = [sep, formatRow(rows[0]), sep, ...rows.slice(1).map(formatRow), sep];
  return new Response(result.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
