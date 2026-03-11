export async function onRequest() {
  const message = `
k| kebab-tools
 | ================
 | 
 | For full list of tools, read /list\n
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
