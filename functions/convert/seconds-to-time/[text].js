export async function onRequest(context) {
  const { text } = context.params;
  const total = parseInt(text, 10);
  if (isNaN(total) || total < 0) return new Response('Invalid seconds value\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const fmt = n => String(n).padStart(2, '0');
  return new Response(`${fmt(h)}:${fmt(m)}:${fmt(s)}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
