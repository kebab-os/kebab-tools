export async function onRequest() {
  const tools = [
    'base64-encode/[text]',
    'base64-decode/[text]',
    'uuid',
    'timestamp',
    'md5/[text] (coming soon)',
    'sha256/[text] (coming soon)'
  ];
  
  return new Response(tools.join('\n'), {
    headers: { 'Content-Type': 'text/plain' }
  });
}
