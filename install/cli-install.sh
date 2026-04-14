#!/bin/bash
set -e

INSTALL_DIR="/usr/local/bin"
SCRIPT_URL="https://raw.githubusercontent.com/kebab-os/kebab-tools/refs/heads/main/cli/kebab"
DEST="$INSTALL_DIR/kebab"

echo "Installing kebab CLI..."

if ! command -v python3 &>/dev/null; then
  echo "Error: python3 is required but not found." >&2
  exit 1
fi

if ! python3 -c "import requests" &>/dev/null; then
  echo "Installing required Python package: requests..."
  pip3 install --user requests
fi

if [ ! -w "$INSTALL_DIR" ]; then
  echo "Error: no write permission to $INSTALL_DIR. Try running with sudo." >&2
  exit 1
fi

curl -fsSL "$SCRIPT_URL" -o "$DEST"
chmod +x "$DEST"

echo "kebab CLI installed to $DEST"
echo "Run 'kebab --help' to get started."
