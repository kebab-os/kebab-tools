export async function onRequest(context) {
  const { text } = context.params;
  try {
    const parts = text.split('::');
    let groups;
    if (parts.length === 2) {
      const left = parts[0] ? parts[0].split(':') : [];
      const right = parts[1] ? parts[1].split(':') : [];
      const missing = 8 - left.length - right.length;
      groups = [...left, ...Array(missing).fill('0'), ...right];
    } else {
      groups = text.split(':');
    }
    if (groups.length !== 8) throw new Error('invalid');
    const expanded = groups.map(g => g.padStart(4, '0')).join(':');
    return new Response(expanded + "\n", { headers: { 'Content-Type': 'text/plain' } });
  } catch {
    return new Response('Invalid IPv6 address\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
}
