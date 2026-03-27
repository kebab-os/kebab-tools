export async function onRequest(context) {
  const { text } = context.params;
  const match = text.match(/^(\d+):(\d{2}):(\d{2})$/);
  if (!match) return new Response('Usage: time/HH:MM:SS\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const [, h, m, s] = match.map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  const pad = n => String(n).padStart(2, '0');
  return new Response(`${h12}:${pad(m)}:${pad(s)} ${period}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
