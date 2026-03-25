export async function onRequest(context) {
  const { text } = context.params;
  try {
    const parsed = new URL(text.startsWith('http') ? text : `https://${text}`);
    const result = {
      href: parsed.href,
      protocol: parsed.protocol,
      host: parsed.host,
      hostname: parsed.hostname,
      port: parsed.port || null,
      pathname: parsed.pathname,
      search: parsed.search || null,
      hash: parsed.hash || null,
      origin: parsed.origin
    };
    return new Response(JSON.stringify(result, null, 2) + "\n", {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch {
    return new Response('Invalid URL\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}
