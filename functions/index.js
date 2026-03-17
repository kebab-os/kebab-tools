export async function onRequest() {
  const message = `
| HOME | kebab-tools
| ========================================
| 
| Welcome to kebab-tools! Use this to
| easily access tools straight from your
| terminal, or the web.
| 
| Example usage:
| curl https://tools.kebabos.me/random/int
| 
| For full list of tools, read /list\n
| 
|                         kebab-tools 2026
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
