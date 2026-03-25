export async function onRequest(context) {
  const { text } = context.params;
  let n = parseInt(text, 10);
  if (isNaN(n) || n <= 0 || n > 3999) {
    return new Response('Invalid input. Provide an integer between 1 and 3999\n', {
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) {
      result += syms[i];
      n -= vals[i];
    }
  }

  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
