import argparse
import sys
from pathlib import Path

def generate_static(file_content):
    return f"""export async function onRequest() {{
  const output = `
{file_content}
`;
  return new Response(output + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
"""

def generate_param(file_content):
    return f"""export async function onRequest(context) {{
  const {{ text }} = context.params;
{file_content}
  return new Response(output + "\\n", {{
    headers: {{ 'Content-Type': 'text/plain' }}
  }});
}}
"""

def main():
    parser = argparse.ArgumentParser(description="Generate Cloudflare Worker code.")
    parser.add_argument("--type", required=True, choices=["static", "param"], help="Type of output to generate")
    parser.add_argument("--file", required=True, help="Path to the file to embed")

    args = parser.parse_args()

    file_path = Path(args.file)
    if not file_path.exists():
        print(f"Error: file '{args.file}' not found.")
        sys.exit(1)

    file_content = file_path.read_text()

    # Indent file content for param mode
    indented_content = "\n".join("  " + line for line in file_content.splitlines())

    if args.type == "static":
        output = generate_static(file_content)
    else:
        output = generate_param(indented_content)

    print(output)


if __name__ == "__main__":
    main()
