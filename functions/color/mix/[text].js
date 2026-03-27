export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length < 2) {
    return new Response('Usage: mix/hex1,hex2 or mix/hex1,hex2,ratio\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const parseHex = h => {
    const hex = h.trim().replace(/^#/, '');
    if (hex.length === 3) return [parseInt(hex[0]+hex[0],16), parseInt(hex[1]+hex[1],16), parseInt(hex[2]+hex[2],16)];
    return [parseInt(hex.slice(0,2),16), parseInt(hex.slice(2,4),16), parseInt(hex.slice(4,6),16)];
  };
  const [c1, c2] = [parseHex(parts[0]), parseHex(parts[1])];
  const ratio = parts[2] !== undefined ? parseFloat(parts[2]) : 0.5;
  const mixed = c1.map((v, i) => Math.round(v * (1 - ratio) + c2[i] * ratio));
  const hex = '#' + mixed.map(v => v.toString(16).padStart(2,'0')).join('');
  return new Response(hex + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
