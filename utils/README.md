# 📄 `generate.py` — kebab-tools Functions Generator

`generate.py` is a simple command‑line tool that converts any text‑based file into a ready‑to‑use Cloudflare Worker handler. It supports two generation modes:

- **static** — return the contents of a file as plain text  
- **param** — embed code that uses a route parameter inside the Worker

This is useful when you want to quickly scaffold Workers without manually writing boilerplate.

---

## 🚀 Features

- Generate Cloudflare Worker handlers from any file  
- Two output modes: `static` and `param`  
- Automatically embeds file contents  
- Clean, predictable output  
- Zero dependencies — works with any Python 3 installation  

---

## 📦 Requirements

- Python 3.7 or newer

---

## 🧪 Usage

### **Static Mode**

Returns the contents of a file directly in the Worker response.

```sh
python generate.py --type static --file text.txt
```

Output example:

```js
export async function onRequest() {
  const output = `
[contents of text.txt]
`;
  return new Response(output + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

---

### **Param Mode**

Embeds code that runs inside the Worker and uses a route parameter.

```sh
python generate.py --type param --file code.js
```

Output example:

```js
export async function onRequest(context) {
  const { text } = context.params;
  [contents of code.js]
  const output = text + "\n";
  return new Response(output + "\n", {
    headers: { 'Content-Type': 'text/plain' }
  });
}
```

---

## 📁 Input Files

You can pass any text‑based file:

- `.txt`
- `.js`
- `.ts`
- `.md`
- or anything else

The script reads the file and inserts its contents into the appropriate Worker template.

---

## 🛠 Command Reference

| Flag       | Description                                  | Required |
|------------|----------------------------------------------|----------|
| `--type`   | Output mode: `static` or `param`             | Yes      |
| `--file`   | Path to the file to embed                    | Yes      |

---

## 📝 Example Workflow

1. Write some logic in `logic.js`
2. Generate a Worker:

```sh
python generate.py --type param --file logic.js > worker.js
```

3. Deploy `worker.js` to Cloudflare

---
