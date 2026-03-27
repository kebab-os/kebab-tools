export async function onRequest(context) {
  const { text } = context.params;
  const hex = text.replace(/^#/, '');
  if (!/^[0-9a-fA-F]{6}$|^[0-9a-fA-F]{3}$/.test(hex)) {
    return new Response('Invalid hex color\n', { status: 400, headers: { 'Content-Type': 'text/plain' } });
  }
  const full = hex.length === 3 ? hex.split('').map(c => c+c).join('') : hex;
  let r = parseInt(full.slice(0,2),16)/255, g = parseInt(full.slice(2,4),16)/255, b = parseInt(full.slice(4,6),16)/255;
  const max = Math.max(r,g,b), min = Math.min(r,g,b), l = (max+min)/2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d/(2-max-min) : d/(max+min);
    switch(max){case r:h=((g-b)/d+(g<b?6:0))/6;break;case g:h=((b-r)/d+2)/6;break;case b:h=((r-g)/d+4)/6;break;}
  }
  const hue2rgb=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};
  const hslToHex=(hh,ss,ll)=>{let rr,gg,bb;if(ss===0){rr=gg=bb=ll;}else{const q=ll<0.5?ll*(1+ss):ll+ss-ll*ss;const p=2*ll-q;rr=hue2rgb(p,q,hh+1/3);gg=hue2rgb(p,q,hh);bb=hue2rgb(p,q,hh-1/3);}return '#'+[rr,gg,bb].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('');};
  const c1 = hslToHex((h + 30/360 + 1) % 1, s, l);
  const c2 = hslToHex((h - 30/360 + 1) % 1, s, l);
  return new Response(`#${full}, ${c1}, ${c2}\n`, { headers: { 'Content-Type': 'text/plain' } });
}
