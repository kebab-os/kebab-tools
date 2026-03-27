export async function onRequest(context) {
  const { request } = context;
  const tz = request.headers.get('CF-Timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  return new Response(tz + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
