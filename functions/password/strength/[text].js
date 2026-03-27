export async function onRequest(context) {
  const { text } = context.params;
  let score = 0;
  if (text.length >= 8) score++;
  if (text.length >= 12) score++;
  if (text.length >= 16) score++;
  if (/[a-z]/.test(text)) score++;
  if (/[A-Z]/.test(text)) score++;
  if (/[0-9]/.test(text)) score++;
  if (/[^a-zA-Z0-9]/.test(text)) score++;
  const levels = ['very-weak', 'weak', 'weak', 'medium', 'medium', 'strong', 'strong', 'very-strong'];
  return new Response(levels[Math.min(score, 7)] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
