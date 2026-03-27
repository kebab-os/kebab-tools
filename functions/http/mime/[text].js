export async function onRequest(context) {
  const { text } = context.params;
  const ext = text.toLowerCase().replace(/^.*\./, '');
  const mimes = {
    'html':'text/html','htm':'text/html','css':'text/css','js':'application/javascript',
    'ts':'application/typescript','json':'application/json','xml':'application/xml',
    'csv':'text/csv','txt':'text/plain','md':'text/markdown',
    'png':'image/png','jpg':'image/jpeg','jpeg':'image/jpeg','gif':'image/gif',
    'webp':'image/webp','svg':'image/svg+xml','ico':'image/x-icon','bmp':'image/bmp',
    'mp4':'video/mp4','webm':'video/webm','ogg':'video/ogg','avi':'video/avi',
    'mp3':'audio/mpeg','wav':'audio/wav','flac':'audio/flac','aac':'audio/aac',
    'pdf':'application/pdf','zip':'application/zip','tar':'application/x-tar',
    'gz':'application/gzip','7z':'application/x-7z-compressed','rar':'application/vnd.rar',
    'doc':'application/msword','docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls':'application/vnd.ms-excel','xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'ppt':'application/vnd.ms-powerpoint','pptx':'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'wasm':'application/wasm','ttf':'font/ttf','woff':'font/woff','woff2':'font/woff2',
    'eot':'application/vnd.ms-fontobject','sh':'application/x-sh','py':'text/x-python',
    'java':'text/x-java-source','rb':'application/x-ruby','go':'text/x-go','rs':'text/x-rust'
  };
  const mime = mimes[ext] || 'application/octet-stream';
  return new Response(mime + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
