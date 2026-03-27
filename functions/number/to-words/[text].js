export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n) || n < 0 || n > 999999999) {
    return new Response('Provide an integer between 0 and 999,999,999\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const ones = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const toWords = num => {
    if (num === 0) return 'zero';
    if (num < 20) return ones[num];
    if (num < 100) return tens[Math.floor(num/10)] + (num%10 ? '-' + ones[num%10] : '');
    if (num < 1000) return ones[Math.floor(num/100)] + ' hundred' + (num%100 ? ' ' + toWords(num%100) : '');
    if (num < 1000000) return toWords(Math.floor(num/1000)) + ' thousand' + (num%1000 ? ' ' + toWords(num%1000) : '');
    return toWords(Math.floor(num/1000000)) + ' million' + (num%1000000 ? ' ' + toWords(num%1000000) : '');
  };
  return new Response(toWords(n) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
