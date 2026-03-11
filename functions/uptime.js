export async function onRequest(context) {
  const urlParam = new URL(context.request.url).searchParams.get('url');
  if (!urlParam) return new Response("Add ?url=https://example.com to the URL");

  const start = Date.now();
  try {
    const res = await fetch(urlParam, { method: 'HEAD', timeout: 5000 });
    const duration = Date.now() - start;
    
    return new Response(JSON.stringify({
      status: res.status,
      ok: res.ok,
      ms: duration
    }, null, 2));
  } catch (e) {
    return new Response(JSON.stringify({ error: "Site unreachable", details: e.message }), { status: 500 });
  }
}
