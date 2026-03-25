export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',').map(s => parseInt(s.trim(), 10));

  if (parts.length !== 3 || parts.some(n => isNaN(n) || n < 0 || n > 255)) {
    return new Response('Invalid input. Use format: r,g,b (e.g. 255,87,51)\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const hex = '#' + parts.map(n => n.toString(16).padStart(2, '0')).join('');
  return new Response(hex + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
