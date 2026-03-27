export async function onRequest(context) {
  const { text } = context.params;
  const ts = parseInt(text, 10);
  if (isNaN(ts)) return new Response('Invalid Unix timestamp\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const ms = Date.now() - ts * 1000;
  const secs = Math.floor(Math.abs(ms) / 1000);
  const label = ms < 0 ? 'in the future' : 'ago';
  if (secs < 60) return new Response(`${secs} seconds ${label}\n`, { headers: { 'Content-Type': 'text/plain' } });
  if (secs < 3600) return new Response(`${Math.floor(secs/60)} minutes ${label}\n`, { headers: { 'Content-Type': 'text/plain' } });
  if (secs < 86400) return new Response(`${Math.floor(secs/3600)} hours ${label}\n`, { headers: { 'Content-Type': 'text/plain' } });
  return new Response(`${Math.floor(secs/86400)} days ${label}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
