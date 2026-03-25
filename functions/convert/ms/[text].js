export async function onRequest(context) {
  const { text } = context.params;
  const ms = parseFloat(text);
  if (isNaN(ms) || ms < 0) {
    return new Response('Invalid input. Provide a non-negative number of milliseconds\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const remainingMs = Math.floor(ms % 1000);

  const parts = [];
  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);
  if (minutes) parts.push(`${minutes}m`);
  if (seconds || remainingMs) parts.push(`${seconds}.${String(remainingMs).padStart(3, '0')}s`);
  if (parts.length === 0) parts.push('0s');

  return new Response(parts.join(' ') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
