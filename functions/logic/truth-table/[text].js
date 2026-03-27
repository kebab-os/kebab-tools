export async function onRequest(context) {
  const { text } = context.params;
  const ops = { and: (a,b)=>a&&b, or: (a,b)=>a||b, xor: (a,b)=>a!==b, nand: (a,b)=>!(a&&b), nor: (a,b)=>!(a||b) };
  const op = text.trim().toLowerCase();
  if (!ops[op]) return new Response('Usage: truth-table/and|or|xor|nand|nor\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  const fn = ops[op];
  const rows = [[false,false],[false,true],[true,false],[true,true]];
  const header = 'A     B     Result';
  const lines = rows.map(([a,b]) => `${String(a).padEnd(6)}${String(b).padEnd(6)}${fn(a,b)}`);
  return new Response([header, ...lines].join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
