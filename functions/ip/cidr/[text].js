export async function onRequest(context) {
  const { text } = context.params;
  const [ip, prefix] = text.split('/');
  const prefixLen = parseInt(prefix, 10);
  if (!ip || isNaN(prefixLen) || prefixLen < 0 || prefixLen > 32) {
    return new Response('Usage: cidr/192.168.1.0/24\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some(p => isNaN(p) || p < 0 || p > 255)) {
    return new Response('Invalid IPv4 address\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const ipInt = parts.reduce((acc, p) => (acc << 8) | p, 0) >>> 0;
  const mask = prefixLen === 0 ? 0 : (~0 << (32 - prefixLen)) >>> 0;
  const network = (ipInt & mask) >>> 0;
  const broadcast = (network | ~mask) >>> 0;
  const toIP = n => [(n>>>24)&255,(n>>>16)&255,(n>>>8)&255,n&255].join('.');
  const hosts = prefixLen >= 31 ? Math.pow(2, 32 - prefixLen) : Math.pow(2, 32 - prefixLen) - 2;
  return new Response([
    `Network:   ${toIP(network)}/${prefixLen}`,
    `Broadcast: ${toIP(broadcast)}`,
    `Netmask:   ${toIP(mask)}`,
    `Hosts:     ${hosts}`
  ].join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
