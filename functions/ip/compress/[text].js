export async function onRequest(context) {
  const { text } = context.params;
  const groups = text.split(':');
  if (groups.length !== 8) return new Response('Provide full IPv6 (8 groups)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const stripped = groups.map(g => g.replace(/^0+/, '') || '0');
  let bestStart = -1, bestLen = 0, curStart = -1, curLen = 0;
  for (let i = 0; i < stripped.length; i++) {
    if (stripped[i] === '0') { if (curStart === -1) { curStart = i; curLen = 1; } else curLen++; if (curLen > bestLen) { bestStart = curStart; bestLen = curLen; } }
    else { curStart = -1; curLen = 0; }
  }
  if (bestLen >= 2) {
    const left = stripped.slice(0, bestStart).join(':');
    const right = stripped.slice(bestStart + bestLen).join(':');
    return new Response((left ? left + '::' : '::') + right + "\n", { headers: { 'Content-Type': 'text/plain' } });
  }
  return new Response(stripped.join(':') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
