export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');
  if (!/^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{3}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const full = hex.length === 3 ? hex.split('').map(c => c+c).join('') : hex;
  const lin = v => { v /= 255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); };
  const r = lin(parseInt(full.slice(0,2),16));
  const g = lin(parseInt(full.slice(2,4),16));
  const b = lin(parseInt(full.slice(4,6),16));
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return new Response(L.toFixed(6) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
