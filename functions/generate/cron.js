export async function onRequest() {
  const examples = [
    '* * * * *       Every minute',
    '0 * * * *       Every hour',
    '0 0 * * *       Every day at midnight',
    '0 0 * * 0       Every Sunday at midnight',
    '0 9 * * 1-5     Weekdays at 9am',
    '0 0 1 * *       First day of every month',
    '*/5 * * * *     Every 5 minutes',
    '0 0,12 * * *    Every day at noon and midnight',
    '0 0 1 1 *       Every year on Jan 1',
    '30 8 * * 1-5    Weekdays at 8:30am'
  ];
  return new Response(examples.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
