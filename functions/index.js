export async function onRequest() {
  const message = `
kebab-tools
================

For full list of tools, read /list

  `;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
