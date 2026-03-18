export async function onRequest(context) {
  const { text } = context.params;

  const messages = {
    "1": `
Page 1 | HELP | kebab-tools
============================================

Welcome to kebab-tools. This application can be used in terminal or in browser.
For example you can curl it like this: 'curl https://tools.kebabos.me', or use it in browser like this 'https://tools.kebabos.me'.
`,

    "2": `
Page 2 | HELP | kebab-tools
============================================
You can add as many lines as you need
without using manual break characters.
`,

    "3": `
Page 3 | HELP | kebab-tools
============================================
`
  };

  // Get the mapped message; default to the input text if no match is found
  const output = (messages[text] || text) + "\n";

  return new Response(output, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
