export async function onRequest(context) {
  const { text } = context.params;
  const ipv4Pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  const ipv6Pattern = /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^([\da-fA-F]{1,4}:)*::([\da-fA-F]{1,4}:)*[\da-fA-F]{1,4}$|^::[\da-fA-F]{1,4}$|^::$/;

  if (ipv4Pattern.test(text)) {
    const parts = text.split('.').map(Number);
    const valid = parts.every(p => p >= 0 && p <= 255);
    return new Response((valid ? 'true' : 'false') + "\n", {
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  if (ipv6Pattern.test(text)) {
    return new Response('true\n', { headers: { 'Content-Type': 'text/plain' } });
  }

  return new Response('false\n', { headers: { 'Content-Type': 'text/plain' } });
}
