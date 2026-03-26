#!/usr/bin/env python3
"""
Kebab-Tools Generator
=====================
Generates Cloudflare Pages Function files for new kebab-tools endpoints.

Usage:
    python generate.py <path> [options]

Examples:
    python generate.py text/upper                     # simple text transform (path param)
    python generate.py random/token --type static     # no URL parameter
    python generate.py json/sort --type post          # POST body input
    python generate.py math/max --type param          # path parameter (default)
    python generate.py color/mix --type param --desc "Mix two hex colors"
"""

import argparse
import os
import sys
import textwrap


TEMPLATES = {
    "param": """\
export async function onRequest(context) {{
  const {{ text }} = context.params;
  // TODO: implement {name}
  const result = text;
  return new Response(result + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
""",

    "static": """\
export async function onRequest() {{
  // TODO: implement {name}
  const result = '';
  return new Response(result + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
""",

    "post": """\
export async function onRequest(context) {{
  const {{ request }} = context;
  let raw;

  if (request.method === 'POST') {{
    raw = await request.text();
  }} else {{
    const url = new URL(request.url);
    raw = url.searchParams.get('data') || '';
  }}

  if (!raw.trim()) {{
    return new Response('No data provided. POST a body or use ?data=...\\n', {{
      status: 400,
      headers: {{ 'Content-Type': 'text/plain' }}
    }});
  }}

  // TODO: implement {name}
  const result = raw;
  return new Response(result + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
""",

    "context": """\
export async function onRequest(context) {{
  const {{ request }} = context;
  // TODO: implement {name}
  const result = '';
  return new Response(result + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
""",
}


def find_functions_dir():
    """Find the functions/ directory by searching up from the script location."""
    script_dir = os.path.dirname(os.path.abspath(__file__))

    # Check if functions/ is next to the tools/ dir (repo root)
    repo_root = os.path.dirname(script_dir)
    candidate = os.path.join(repo_root, 'functions')
    if os.path.isdir(candidate):
        return candidate

    # Fallback: check current working directory
    cwd_candidate = os.path.join(os.getcwd(), 'functions')
    if os.path.isdir(cwd_candidate):
        return cwd_candidate

    return None


def generate_tool(tool_path, template_type, description, functions_dir, dry_run=False):
    """Generate a Cloudflare Pages Function file for the given tool path."""
    parts = tool_path.strip('/').split('/')
    name = parts[-1]

    if template_type == 'param':
        # Path param: functions/dir/name/[text].js
        file_parts = parts + ['[text].js']
    elif template_type in ('static', 'context'):
        # No param: functions/dir/name.js
        file_parts = parts[:-1] + [f'{name}.js']
    elif template_type == 'post':
        # POST body: functions/dir/name.js
        file_parts = parts[:-1] + [f'{name}.js']
    else:
        print(f"Unknown template type: {template_type}", file=sys.stderr)
        sys.exit(1)

    output_path = os.path.join(functions_dir, *file_parts)
    content = TEMPLATES[template_type].format(name=name)

    if description:
        comment = f"// {description}\n"
        content = comment + content

    if dry_run:
        print(f"[DRY RUN] Would create: {output_path}")
        print("--- Content ---")
        print(content)
        return

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    if os.path.exists(output_path):
        overwrite = input(f"File already exists: {output_path}\nOverwrite? [y/N] ").strip().lower()
        if overwrite != 'y':
            print("Aborted.")
            return

    with open(output_path, 'w') as f:
        f.write(content)

    print(f"Created: {output_path}")
    print(f"Endpoint: /{tool_path}" + ("/<text>" if template_type == 'param' else ""))
    print()
    print("Next steps:")
    print(f"  1. Edit {output_path} to implement the logic")
    print(f"  2. Run: node generate-file-list.js  (from repo root, if that script exists)")


def list_templates():
    print("Available template types:")
    print()
    print("  param    - Accepts a URL path parameter (e.g. /tool/text-here)")
    print("             Creates: functions/<path>/[text].js")
    print()
    print("  static   - No URL parameters, returns static/computed output")
    print("             Creates: functions/<path>.js")
    print()
    print("  post     - Accepts POST body or ?data= query parameter")
    print("             Creates: functions/<path>.js")
    print()
    print("  context  - Access to full request context (headers, CF data, etc.)")
    print("             Creates: functions/<path>.js")


def main():
    parser = argparse.ArgumentParser(
        description='Generate Cloudflare Pages Function files for kebab-tools.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent("""\
            Examples:
              python generate.py text/truncate
              python generate.py random/token --type static
              python generate.py json/keys --type post
              python generate.py request/timezone --type context
              python generate.py color/mix --desc "Mix two hex colors (hex1,hex2)"
              python generate.py math/clamp --dry-run
        """)
    )

    parser.add_argument(
        'path',
        nargs='?',
        help='Tool path relative to functions/ (e.g. color/hex-to-rgb or math/clamp)'
    )
    parser.add_argument(
        '--type', '-t',
        choices=['param', 'static', 'post', 'context'],
        default='param',
        help='Template type (default: param)'
    )
    parser.add_argument(
        '--desc', '-d',
        default='',
        help='Short description to add as a comment'
    )
    parser.add_argument(
        '--functions-dir', '-f',
        default=None,
        help='Path to the functions/ directory (auto-detected if not provided)'
    )
    parser.add_argument(
        '--dry-run', '-n',
        action='store_true',
        help='Print what would be created without writing any files'
    )
    parser.add_argument(
        '--list-templates',
        action='store_true',
        help='List available template types and exit'
    )

    args = parser.parse_args()

    if args.list_templates:
        list_templates()
        return

    if not args.path:
        parser.print_help()
        sys.exit(1)

    functions_dir = args.functions_dir
    if not functions_dir:
        functions_dir = find_functions_dir()
        if not functions_dir:
            print("Could not find functions/ directory.", file=sys.stderr)
            print("Use --functions-dir to specify the path.", file=sys.stderr)
            sys.exit(1)
        print(f"Using functions directory: {functions_dir}")

    generate_tool(
        tool_path=args.path,
        template_type=args.type,
        description=args.desc,
        functions_dir=functions_dir,
        dry_run=args.dry_run
    )


if __name__ == '__main__':
    main()
