export async function onRequest(context) {
  const { text } = context.params;

  const messages = {
    "1": `
Page 1 | HELP | kebab-tools
============================================

Kebab-tools is a versatile suite of command-line utilities designed for seamless integration into your terminal workflow via curl. Built for developers who value efficiency and minimalism, it eliminates the need to switch between windows or leave the CLI to perform common tasks. Whether you're debugging, formatting data, or managing system operations, kebab-tools provides a fast, dependency-free way to access essential developer resources directly from your shell.

To use kebab-tools, curl the endpoint for the tool that you wish to use like this: 'curl https://tools.kebabos.me/random/int'.\n
`,

    "2": `
Page 2 | HELP | kebab-tools
============================================

Kebab-tools is a tool app hosted on cloudfare pages, using cloudfare pages functions: 'https://developers.cloudflare.com/pages/functions'.

The URL is 'https://tools.kebabos.me', and endpoints follow the pattern: 'https://tools.kebabos.me/dir/name', 'https://tools.kebabos.me/dir/name/text' or 'https://tools.kebabos.me/dir/subdir/name'.\n
`,

    "3": `
Page 3 | HELP | kebab-tools
============================================

To view a json visualisation for the list of all the tools, curl 'https://tools.kebabos.me/list'.

Using a browser is just the same as using a terminal to access kebab-tools.\n
`
  };

  // Get the mapped message; default to the input text if no match is found
  const output = (messages[text] || text) + "\n";

  return new Response(output, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
