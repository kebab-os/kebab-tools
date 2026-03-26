export async function onRequest(context) {
  const { text } = context.params;
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^([\da-fA-F]{1,4}:)*::([\da-fA-F]{1,4}:)*[\da-fA-F]{1,4}$|^::[\da-fA-F]{1,4}$|^::$/;

  if (ipv4Pattern.test(text)) {
    const parts = text.split('.').map(Number);
    if (parts.every(p => p >= 0 && p <= 255)) {
      return new Response('IPv4\n', { headers: { 'Content-Type': 'text/plain' } });
    }
  }

  if (ipv6Pattern.test(text)) {
    return new Response('IPv6\n', { headers: { 'Content-Type': 'text/plain' } });
  }

  return new Response('unknown\n', { headers: { 'Content-Type': 'text/plain' } });
}
