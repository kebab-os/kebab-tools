export async function onRequest(context) {
  const { text } = context.params;
  const ts = parseInt(text, 10);
  if (isNaN(ts)) return new Response('Invalid Unix timestamp\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const d = new Date(ts * 1000);
  const pad = n => String(n).padStart(2, '0');
  const fmt = `${d.getUTCFullYear()}-${pad(d.getUTCMonth()+1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
  return new Response(fmt + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
