export async function onRequest(context) {
  const { text } = context.params;
  const n = parseInt(text, 10);
  if (isNaN(n)) {
    return new Response('Invalid number\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }

  const abs = Math.abs(n);
  let suffix;
  const mod100 = abs % 100;
  const mod10 = abs % 10;

  if (mod100 >= 11 && mod100 <= 13) {
    suffix = 'th';
  } else if (mod10 === 1) {
    suffix = 'st';
  } else if (mod10 === 2) {
    suffix = 'nd';
  } else if (mod10 === 3) {
    suffix = 'rd';
  } else {
    suffix = 'th';
  }

  return new Response(`${n}${suffix}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
