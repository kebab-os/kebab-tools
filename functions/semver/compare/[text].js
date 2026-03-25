export async function onRequest(context) {
  const { text } = context.params;
  const [v1, v2] = text.split(',');

  if (!v1 || !v2) {
    return new Response('Use format: version1,version2 (e.g. 1.2.3,1.3.0)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const parseParts = v => v.replace(/^v/, '').split('-')[0].split('.').map(Number);
  const a = parseParts(v1);
  const b = parseParts(v2);

  for (let i = 0; i < 3; i++) {
    if ((a[i] || 0) > (b[i] || 0)) return new Response('1\n', { headers: { 'Content-Type': 'text/plain' } });
    if ((a[i] || 0) < (b[i] || 0)) return new Response('-1\n', { headers: { 'Content-Type': 'text/plain' } });
  }

  return new Response('0\n', { headers: { 'Content-Type': 'text/plain' } });
}
