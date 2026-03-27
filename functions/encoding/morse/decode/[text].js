export async function onRequest(context) {
  const { text } = context.params;
  const morse = {'.-':'A','-...':'B','-.-.':'C','-..':'D','.':'E','..-.':'F','--.':'G','....':'H','..':'I','.---':'J','-.-':'K','.-..':'L','--':'M','-.':'N','---':'O','.--.':'P','--.-':'Q','.-.':'R','...':'S','-':'T','..-':'U','...-':'V','.--':'W','-..-':'X','-.--':'Y','--..':'Z',
    '-----':'0','.----':'1','..---':'2','...--':'3','....-':'4','.....':'5','-....':'6','--...':'7','---..':'8','----.':'9'};
  const result = text.split(' / ').map(word =>
    word.split(' ').map(code => morse[code] || '?').join('')
  ).join(' ');
  return new Response(result + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
