export async function onRequest(context) {
  const ua = context.request.headers.get('user-agent');
  return new Response(JSON.stringify({ user_agent: ua }, null, 2), {
    headers: { 'content-type': 'application/json' }
  });
}
