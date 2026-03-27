export async function onRequest(context) {
  const { text } = context.params;
  const commaIdx = text.indexOf(',');
  if (commaIdx === -1) {
    return new Response('Usage: levenshtein/string1,string2\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const a = text.slice(0, commaIdx);
  const b = text.slice(commaIdx + 1);
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => i === 0 ? j : j === 0 ? i : 0)
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  }
  return new Response(dp[m][n] + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
