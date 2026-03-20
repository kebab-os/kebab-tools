import requests
import sys

def run_tools_cli():
    print("\nkebab-tools client shell (Press Ctrl+C to exit)")    
    while True:
        try:
            user_input = input("> ").strip()
            if not user_input:
                continue
            formatted_endpoint = user_input.replace(" ", "/")
            url = f"https://tools.kebabos.me/{formatted_endpoint}"
            response = requests.get(url, headers={"User-Agent": "curl/7.81.0"}, timeout=10)
            print(response.text.rstrip())
        except KeyboardInterrupt:
            print("\n\nExiting...")
            sys.exit(0)
        except EOFError:
            print("\nExiting...")
            sys.exit(0)
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    run_tools_cli()
