export async function onRequest(context) {
  const { text } = context.params;
  const bytes = parseFloat(text);
  if (isNaN(bytes) || bytes < 0) return new Response('Invalid byte count\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let i = 0, val = bytes;
  while (val >= 1024 && i < units.length - 1) { val /= 1024; i++; }
  return new Response((i === 0 ? val.toFixed(0) : val.toFixed(2)) + ' ' + units[i] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
