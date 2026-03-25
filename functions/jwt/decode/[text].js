export async function onRequest(context) {
  const { text } = context.params;
  const token = text.replace(/^Bearer\s+/i, '');
  const parts = token.split('.');

  if (parts.length !== 3) {
    return new Response('Invalid JWT: must have 3 parts separated by dots\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  try {
    const decodeBase64 = str => {
      const padded = str.replace(/-/g, '+').replace(/_/g, '/').padEnd(str.length + (4 - str.length % 4) % 4, '=');
      return JSON.parse(atob(padded));
    };

    const header = decodeBase64(parts[0]);
    const payload = decodeBase64(parts[1]);

    const result = {
      header,
      payload,
      signature: parts[2],
      note: 'Signature not verified'
    };

    return new Response(JSON.stringify(result, null, 2) + "\n", {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response('Failed to decode JWT\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
