export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  if (parts.length !== 2) {
    return new Response('Usage: contrast-ratio/hex1,hex2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const getLuminance = hex => {
    const h = hex.trim().replace(/^#/,'');
    const full = h.length === 3 ? h.split('').map(c=>c+c).join('') : h;
    const lin = v => { v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4); };
    return 0.2126*lin(parseInt(full.slice(0,2),16))+0.7152*lin(parseInt(full.slice(2,4),16))+0.0722*lin(parseInt(full.slice(4,6),16));
  };
  const L1 = getLuminance(parts[0]), L2 = getLuminance(parts[1]);
  const ratio = (Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
  let grade = 'Fail';
  if (ratio >= 7) grade = 'AAA';
  else if (ratio >= 4.5) grade = 'AA';
  else if (ratio >= 3) grade = 'AA Large';
  return new Response(`${ratio.toFixed(2)}:1 (WCAG: ${grade})\n`, { headers: { 'Content-Type': 'text/plain' } });
}
