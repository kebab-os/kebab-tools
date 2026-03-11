export async function onRequest() {
  const message = `
    \nkebab-tools
    \n================
    \n
    \nFor full list of tools, read /list
    \n
  `;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
