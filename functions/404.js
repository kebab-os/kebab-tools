export async function onRequest() {
  const message = `
404 | Tool not found | kebab-tools\n
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
