export async function onRequest(context) {
  const ua = context.request.headers.get('user-agent');
  return new Response("k|\n"+ JSON.stringify({ user_agent: ua }, null, 2) + "\n", {
    headers: { 'content-type': 'application/json' }
  });
}
