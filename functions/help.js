export async function onRequest() {
  const message = `
| HELP | kebab-tools
| ========================================
| 
| kebab-tools is a tool app hosted on
| cloudfare pages. It can be used on
| terminal (e.g. using curl) or from
| browser.
| 
| The URL is 'https://tools.kebabos.me',
| and endpoints follow the pattern:
| 'https://tools.kebabos.me/random/int'.
| 
| Using a browser is just the same as using
| a terminal to access kebab-tools.
| 
| Report any issues at:
| https://github.com/kebab-os/kebab-tools/issues
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
