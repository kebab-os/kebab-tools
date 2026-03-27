export async function onRequest(context) {
  const { text } = context.params;
  const domain = text.replace(/^https?:\/\//, '').split('/')[0];
  try {
    const resp = await fetch('https://' + domain, { method: 'HEAD' });
    return new Response(`SSL OK: ${domain} responded with ${resp.status}\n`, { headers: { 'Content-Type': 'text/plain' } });
  } catch (e) {
    return new Response(`SSL Error: ${e.message}\n`, { status: 502, headers: { 'Content-Type': 'text/plain' } });
  }
}
