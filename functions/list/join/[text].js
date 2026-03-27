export async function onRequest(context) {
  const { text } = context.params;
  const pipeIdx = text.indexOf('|');
  const separator = pipeIdx !== -1 ? text.slice(0, pipeIdx) : ', ';
  const listStr = pipeIdx !== -1 ? text.slice(pipeIdx + 1) : text;
  const items = listStr.split(',').map(s => s.trim());
  return new Response(items.join(separator) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
