export async function onRequest(context) {
  const { text } = context.params;
  const clean = text.replace(/[\s\-]/g, '');
  let valid = false;
  if (clean.length === 10) {
    let sum = 0;
    for (let i = 0; i < 9; i++) sum += parseInt(clean[i], 10) * (10 - i);
    const last = clean[9] === 'X' ? 10 : parseInt(clean[9], 10);
    sum += last;
    valid = sum % 11 === 0;
  } else if (clean.length === 13) {
    let sum = 0;
    for (let i = 0; i < 12; i++) sum += parseInt(clean[i], 10) * (i % 2 === 0 ? 1 : 3);
    const check = (10 - (sum % 10)) % 10;
    valid = check === parseInt(clean[12], 10);
  }
  return new Response((valid ? 'true' : 'false') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
