export async function onRequest(context) {
  const { text } = context.params;
  const match = text.trim().match(/^(\d+):(\d{2}):(\d{2})$/);
  if (!match) return new Response('Usage: time-to-seconds/HH:MM:SS\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const [, h, m, s] = match.map(Number);
  return new Response((h * 3600 + m * 60 + s) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
