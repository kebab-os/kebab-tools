export async function onRequest(context) {
  const { text } = context.params;

  // Basic semver regex: major.minor.patch with optional pre-release and build metadata
  const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
  const valid = semverRegex.test(text.replace(/^v/, ''));
  return new Response(String(valid) + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
