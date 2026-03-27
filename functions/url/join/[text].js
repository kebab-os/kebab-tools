export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(s => s.trim());
  if (parts.length < 2) return new Response('Usage: join/base,path1,path2,...\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  let result = parts[0].replace(/\/+$/, '');
  for (let i = 1; i < parts.length; i++) {
    result += '/' + parts[i].replace(/^\/+/, '').replace(/\/+$/, '');
  }
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
