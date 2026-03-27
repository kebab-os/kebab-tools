export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length !== 2) return new Response('Usage: satisfies/1.2.3,>=1.0.0\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const ver = parts[0].trim().replace(/^v/, '').split('-')[0].split('.').map(Number);
  const range = parts[1].trim();
  const m = range.match(/^(>=|<=|>|<|=|~|\^)?v?(\d+)\.(\d+)\.(\d+)/);
  if (!m) return new Response('Invalid range\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const [, op, ...rv] = m;
  const ref = rv.slice(0, 3).map(Number);
  const cmp = [0,1,2].reduce((r, i) => r !== 0 ? r : ver[i] - ref[i], 0);
  const ops = { '>=': cmp >= 0, '<=': cmp <= 0, '>': cmp > 0, '<': cmp < 0, '=': cmp === 0, '': cmp === 0 };
  const result = ops[op ?? ''] ?? false;
  return new Response((result ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
