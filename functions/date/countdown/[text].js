export async function onRequest(context) {
  const { text } = context.params;
  const target = new Date(text);
  if (isNaN(target.getTime())) return new Response('Invalid date\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const diff = target - Date.now();
  if (diff < 0) return new Response('0 days, 0 hours, 0 minutes, 0 seconds (past)\n', { headers: { 'Content-Type': 'text/plain' } });
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return new Response(`${days}d ${hours}h ${mins}m ${secs}s\n`, { headers: { 'Content-Type': 'text/plain' } });
}
