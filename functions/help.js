export async function onRequest() {
  const message = `
HELP | kebab-tools
========================================

Kebab-tools is a versatile suite of command-line utilities designed for seamless integration into your terminal workflow via curl. Built for developers who value efficiency and minimalism, it eliminates the need to switch between windows or leave the CLI to perform common tasks. Whether you're debugging, formatting data, or managing system operations, kebab-tools provides a fast, dependency-free way to access essential developer resources directly from your shell.

To use kebab-tools, curl the endpoint for the tool that you wish to use like this: 'curl https://tools.kebabos.me/random/int'.

Kebab-tools is a tool app hosted on cloudflare pages, using cloudflare pages functions: 'https://developers.cloudflare.com/pages/functions'.

The URL is 'https://tools.kebabos.me', and endpoints follow the pattern: 'https://tools.kebabos.me/dir/name', 'https://tools.kebabos.me/dir/name/text' or 'https://tools.kebabos.me/dir/subdir/name'.

To view a json visualisation for the list of all the tools, curl 'https://tools.kebabos.me/list'.

Using a browser is just the same as using a terminal to access kebab-tools.

Report any issues at:
https://github.com/kebab-os/kebab-tools/issues\n
`;
  
  return new Response(message, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
