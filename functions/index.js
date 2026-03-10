export async function onRequest() {
  const tools = [
    'base64-encode/[text]',
    'base64-decode/[text]',
    'uuid',
    'timestamp'
  ];
  
  return new Response(tools.join('\n'), {
    headers: { 'Content-Type': 'text/plain' }
  });
}
