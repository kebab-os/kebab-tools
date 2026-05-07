#!/usr/bin/env python3
from pathlib import Path

ROOT = Path('/home/runner/work/kebab-tools/kebab-tools')
FUNCTIONS_DIR = ROOT / 'functions' / 'dev'
TARGET_NEW_TOOLS = 500

TEMPLATE = """export async function onRequest(context) {{
  const {{ text }} = context.params;
  const input = (text || '').trim();
  if (!input) {{
    return new Response('No text provided. Use /dev/{tool}/<text>\\n', {{
      status: 400,
      headers: {{ 'Content-Type': 'text/plain' }}
    }});
  }}
  return new Response(`{name}: ${{input}}\\n`, {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
"""


def main() -> None:
    FUNCTIONS_DIR.mkdir(parents=True, exist_ok=True)

    created = 0
    index = 1

    while created < TARGET_NEW_TOOLS:
        tool_name = f'generated-{index:03d}'
        tool_dir = FUNCTIONS_DIR / tool_name
        tool_file = tool_dir / '[text].js'

        if not tool_file.exists():
            tool_dir.mkdir(parents=True, exist_ok=True)
            tool_file.write_text(
                TEMPLATE.format(name=tool_name, tool=tool_name),
                encoding='utf-8'
            )
            created += 1

        index += 1

    print(f'Created {created} new tools under {FUNCTIONS_DIR}')


if __name__ == '__main__':
    main()
