import requests
import sys

def main():
    vu = "https://tools.kebabos.me/version"
    v = requests.get(vu, headers={"User-Agent": "curl/7.81.0"}, timeout=10)
    print(f"\nkebab-tools {v.text.strip()} | Client Shell (Use Ctrl+Z to exit)")
    print("Type 'help', 'license', 'about' or 'copyright' for more information.")
    while True:
        try:
            i = input("> ").strip()
            if not i:
                continue
            f = i.replace(" ", "/")
            u = f"https://tools.kebabos.me/{f}"
            r = requests.get(u, headers={"User-Agent": "curl/7.81.0"}, timeout=10)
            print(r.text.rstrip())
        except KeyboardInterrupt:
            print("\n\nExiting...")
            sys.exit(0)
        except EOFError:
            print("\nExiting...")
            sys.exit(0)
        except Exception as e:
            print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
