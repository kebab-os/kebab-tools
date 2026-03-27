export async function onRequest(context) {
  const { text } = context.params;
  const match = text.trim().match(/^([\d.]+)\s*(b|kb|mb|gb|tb|pb)?$/i);
  if (!match) return new Response('Usage: human-to-bytes/10KB or 5.2GB\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const units = { b: 1, kb: 1024, mb: 1024**2, gb: 1024**3, tb: 1024**4, pb: 1024**5 };
  const val = parseFloat(match[1]);
  const unit = (match[2] || 'b').toLowerCase();
  return new Response(Math.round(val * units[unit]) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
