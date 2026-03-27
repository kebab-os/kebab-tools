export async function onRequestGet({ request, params }) {
  try {
    const url = new URL(request.url);

    // Required: ?i=data:image/png;base64,....
    const dataUrl = url.searchParams.get("i");
    if (!dataUrl) {
      return new Response("Missing query param 'i' (data URL with base64 image).", { status: 400 });
    }

    const { mime, bytes } = parseDataUrlBase64(dataUrl);

    // Optional tuning
    const w = clampInt(url.searchParams.get("w") ?? "120", 10, 300); // output columns
    const charsetName = (url.searchParams.get("c") ?? "standard").toLowerCase();
    const invert = (url.searchParams.get("invert") ?? "0") === "1";

    const charset = pickCharset(charsetName, invert);

    // Decode image -> ImageData
    const imageData = await decodeToImageData(bytes, mime);

    // Convert to ASCII
    const ascii = imageDataToAscii(imageData, {
      outWidth: w,
      charset,
      // typical correction: characters are taller than they are wide
      aspectCorrection: 0.5,
    });

    // Optional: params.text available at /image/ascii-art/<text>
    // (Not used by default—kept here in case you want to overlay or annotate.)
    const text = typeof params?.text === "string" ? params.text : "";

    const headerLines = [];
    if (text) headerLines.push(`# ${text}`);
    headerLines.push(`# ${imageData.width}x${imageData.height} -> ${w} cols`);

    return new Response(headerLines.join("\n") + "\n" + ascii + "\n", {
      status: 200,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  } catch (err) {
    return new Response(`Error: ${err?.message || String(err)}`, { status: 500 });
  }
}

function parseDataUrlBase64(dataUrl) {
  const m = /^data:([^;,]+)?;base64,(.+)$/i.exec(dataUrl.trim());
  if (!m) throw new Error("Invalid data URL. Expected format: data:image/png;base64,AAA...");
  const mime = (m[1] || "application/octet-stream").toLowerCase();

  // Fix: '+' may arrive as ' ' depending on query parsing; also remove newlines/spaces
  let b64 = m[2].replace(/\s+/g, "");
  b64 = b64.replace(/ /g, "+");

  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);

  return { mime, bytes };
}

async function decodeToImageData(bytes, mime) {
  // ImageDecoder is available in Workers runtime (and Pages Functions).
  // https://developers.cloudflare.com/workers/runtime-apis/imagedecoder/
  const decoder = new ImageDecoder({
    data: bytes,
    type: mime,
  });

  const { image } = await decoder.decode({ frameIndex: 0 });
  const width = image.displayWidth;
  const height = image.displayHeight;

  // RGBA pixel buffer
  const rgba = new Uint8ClampedArray(width * height * 4);
  await image.copyTo(rgba);

  return { width, height, data: rgba };
}

function imageDataToAscii(imageData, { outWidth, charset, aspectCorrection = 0.5 }) {
  const { width: srcW, height: srcH, data } = imageData;

  // Derive output height with aspect correction
  const scale = outWidth / srcW;
  const outHeight = Math.max(1, Math.round(srcH * scale * aspectCorrection));

  const lines = [];
  for (let y = 0; y < outHeight; y++) {
    const sy = Math.min(srcH - 1, Math.floor((y / outHeight) * srcH));
    let line = "";
    for (let x = 0; x < outWidth; x++) {
      const sx = Math.min(srcW - 1, Math.floor((x / outWidth) * srcW));
      const idx = (sy * srcW + sx) * 4;

      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // If transparent, treat as white background
      const alpha = a / 255;
      const rr = r * alpha + 255 * (1 - alpha);
      const gg = g * alpha + 255 * (1 - alpha);
      const bb = b * alpha + 255 * (1 - alpha);

      // Perceptual luminance
      const lum = 0.2126 * rr + 0.7152 * gg + 0.0722 * bb; // 0..255
      const t = lum / 255; // 0..1

      const charIndex = Math.round(t * (charset.length - 1));
      line += charset[charIndex];
    }
    lines.push(line);
  }

  return lines.join("\n");
}

function pickCharset(name, invert) {
  // Dark-to-light ordering is usually best for ASCII art (dense = dark).
  // We map luminance 0..1 to index 0..N-1, so charset should be light->dark or dark->light depending.
  const sets = {
    // Light -> dark (so higher luminance => darker char if we invert later)
    // We'll define default as dark->light to make "bright pixels become spaces" typical style.
    standard: " .:-=+*#%@",
    detailed: " .'`^\",:;Il!i~+_-?][}{1)(|\\/*tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$",
    blocks: " ░▒▓█",
  };

  let s = sets[name] || sets.standard;

  // We want: lum=0 (black) -> densest char, lum=1 (white) -> space
  // So charset should be densest->lightest.
  // Our sets above are light->dark, so reverse by default.
  s = s.split("").reverse().join("");

  if (invert) s = s.split("").reverse().join("");
  return s;
}

function clampInt(v, min, max) {
  const n = Number.parseInt(String(v), 10);
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}
