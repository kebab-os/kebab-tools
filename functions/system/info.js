export async function onRequest() {
  const info = {
    platform: 'Cloudflare Workers',
    runtime: 'V8',
    node_env: 'edge',
    timestamp: new Date().toISOString()
  };
  return new Response(JSON.stringify(info, null, 2) + "\n", { headers: { 'Content-Type': 'application/json' } });
}
