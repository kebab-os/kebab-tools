export async function onRequest(context) {
  const { text } = context.params;
  const parts = text.split(',');
  const hex = parts[0].trim().replace(/^#/, '');
  const count = parseInt(parts[1] || '5', 10);
  if (!/^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{3}$/.test(hex) || isNaN(count) || count < 1 || count > 20) {
    return new Response('Usage: palette/hexcolor,count (count 1-20)\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const full = hex.length === 3 ? hex.split('').map(c => c+c).join('') : hex;
  let r = parseInt(full.slice(0,2),16)/255, g = parseInt(full.slice(2,4),16)/255, b = parseInt(full.slice(4,6),16)/255;
  const max=Math.max(r,g,b),min=Math.min(r,g,b),l=(max+min)/2;
  let h=0,s=0;
  if(max!==min){const d=max-min;s=l>0.5?d/(2-max-min):d/(max+min);switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}}
  const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};
  const hslToHex=(hh,ss,ll)=>{let rr,gg,bb;if(ss===0){rr=gg=bb=ll;}else{const q=ll<0.5?ll*(1+ss):ll+ss-ll*ss;const p=2*ll-q;rr=hue2rgb(p,q,hh+1/3);gg=hue2rgb(p,q,hh);bb=hue2rgb(p,q,hh-1/3);}return '#'+[rr,gg,bb].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('');};
  const colors = Array.from({length: count}, (_, i) => hslToHex(h, s, (i + 0.5) / count));
  return new Response(colors.join('\n') + "\n", { headers: { 'Content-Type': 'text/plain' } });
}
