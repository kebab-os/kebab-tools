export async function onRequest() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const hex = '#' + [r, g, b].map(n => n.toString(16).padStart(2, '0')).join('');
  return new Response(`${hex}\nrgb(${r}, ${g}, ${b})\n`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
