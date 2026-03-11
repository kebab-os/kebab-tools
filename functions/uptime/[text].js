export async function onRequest(context) {
  let site = context.params.url;
  
  // Basic check to ensure it starts with http
  if (!site.startsWith('http')) {
    site = `https://${site}`;
  }

  const start = Date.now();
  try {
    const res = await fetch(site, { method: 'HEAD' });
    const duration = Date.now() - start;
    
    const data = {
      target: site,
      status: res.status,
      ok: res.ok,
      ms: duration
    };
    
    return new Response(JSON.stringify(data, null, 2), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Unreachable", target: site }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
