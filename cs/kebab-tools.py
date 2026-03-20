import requests
def run_tools_cli():
    print("kebab-tools client shell (Press Ctrl+Z to exit)")
    while True:
        try:
            user_input = input("> ").strip()
            if not user_input:
                continue
            formatted_endpoint = user_input.replace(" ", "/")
            url = f"https://tools.kebabos.me/{formatted_endpoint}"
            response = requests.get(url, headers={"User-Agent": "curl/7.81.0"})
            print(response.text)
        except KeyboardInterrupt:
            print("\nExiting...")
            break
        except Exception as e:
            print(f"An error occurred: {e}")
if __name__ == "__main__":
    run_tools_cli()
