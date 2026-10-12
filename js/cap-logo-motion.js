(function(){
var CX=480,CY=400,R=300,CW=224;
var OUT='cubic-bezier(.16,.84,.26,1)',POP='cubic-bezier(.34,1.56,.64,1)',SOFT='cubic-bezier(.2,1.25,.35,1)',IO='cubic-bezier(.65,0,.35,1)';
function rad(d){return d*Math.PI/180}
function A(el,kf,o){return el.animate(kf,Object.assign({fill:'both',easing:OUT},o))}
var stages=[];
document.querySelectorAll('.var').forEach(function(sec){
  var st=sec.querySelector('.stage');st.appendChild(document.getElementById('tpl').content.cloneNode(true));
  var s={sec:sec,v:sec.dataset.v,st:st,box:sec.querySelector('.box'),played:false};
  s.sq=st.querySelector('.sq');s.q=st.querySelectorAll('.q');s.mk=st.querySelector('.mk');s.paths=s.mk.querySelectorAll('path');
  s.rg=st.querySelectorAll('.rg');s.gl=st.querySelector('.gl');s.cards=[].slice.call(st.querySelectorAll('.cap-node'));s.lns=st.querySelector('.lns');
  if(s.v==='b')s.sq.classList.add('solid');
  if(s.v==='c')s.sq.classList.add('solid','ring');
  sec.querySelector('.rp').onclick=function(){play(s)};
  stages.push(s);
});
function layout(s){
  var k=s.box.clientWidth/960;s.st.style.transform='scale('+k+')';s.box.style.height=(800*k)+'px';
  s.lns.innerHTML='';s.geo=[];
  s.cards.forEach(function(c,i){
    var a=rad(-90+i*60),cx=CX+R*Math.cos(a),cy=CY+R*Math.sin(a),h=c.offsetHeight||170;
    c.style.left=(cx-CW/2)+'px';c.style.top=(cy-h/2)+'px';
    var ux=Math.cos(a),uy=Math.sin(a),x1=CX+ux*93,y1=CY+uy*62,hw=CW/2,hh=h/2;
    var ex=Math.max(-hw,Math.min(hw,-ux*hw/Math.max(Math.abs(ux),Math.abs(uy)*hw/hh)));
    var ey=Math.max(-hh,Math.min(hh,-uy*hh/Math.max(Math.abs(uy),Math.abs(ux)*hh/hw)));
    var x2=cx+ex,y2=cy+ey,len=Math.hypot(x2-x1,y2-y1),ang=Math.atan2(y2-y1,x2-x1)*180/Math.PI;
    var ln=document.createElement('div');ln.className='ln';ln.style.cssText='left:'+x1+'px;top:'+y1+'px;width:'+len+'px;--r:'+ang+'deg';
    var dt=document.createElement('div');dt.className='dt';dt.style.cssText='left:'+x2+'px;top:'+y2+'px';
    s.lns.appendChild(ln);s.lns.appendChild(dt);
    s.geo.push({a:a,cx:cx,cy:cy,ux:ux,uy:uy,ang:ang,ln:ln,dt:dt});
  });
}
function line(g,d,dur){
  A(g.ln,[{opacity:0,transform:'rotate('+g.ang+'deg) scaleX(0)'},{opacity:1,transform:'rotate('+g.ang+'deg) scaleX(1)'}],{duration:dur||460,delay:d,easing:IO});
  A(g.dt,[{opacity:0,transform:'scale(0)'},{opacity:1,transform:'scale(1)'}],{duration:260,delay:d+(dur||460)-120,easing:POP});
}
function settle(s,d){
  s.rg.forEach(function(r,i){A(r,[{opacity:0,transform:'scale(.7)'},{opacity:1,transform:'scale(1)'}],{duration:700,delay:d+i*90})});
  A(s.gl,[{opacity:0},{opacity:1}],{duration:900,delay:d});
}
function orbit(s,g,i,d){var N=16,SW=rad(80),kf=[];
  for(var k=0;k<=N;k++){var t=k/N,e=1-Math.pow(1-t,3),r=R*(.15+.85*e),a=g.a-SW*(1-e);
    kf.push({transform:'translate('+(CX+r*Math.cos(a)-g.cx).toFixed(1)+'px,'+(CY+r*Math.sin(a)-g.cy).toFixed(1)+'px) scale('+(.4+.6*e).toFixed(3)+')',opacity:Math.min(1,t*3.2)});}
  A(s.cards[i],kf,{duration:1050,delay:d,easing:'linear'});
}
var V={
a:function(s){
  A(s.sq,[{opacity:0,transform:'scale(0)'},{opacity:1,transform:'scale(1)',offset:.62},{opacity:1,transform:'scale(.92)'}],{duration:720,easing:'ease-out'});
  var dir=[[-1,-1,-10],[1,-1,10],[-1,1,10],[1,1,-10]];
  s.q.forEach(function(q,i){var d=dir[i];
    A(q,[{transform:'none',opacity:1},{transform:'translate('+d[0]*58+'px,'+d[1]*58+'px) rotate('+d[2]+'deg) scale(.7)',opacity:0}],{duration:620,delay:760,easing:IO})});
  A(s.mk,[{opacity:0,transform:'scale(.55)'},{opacity:1,transform:'scale(1)'}],{duration:720,delay:820,easing:SOFT});
  settle(s,1100);
  s.geo.forEach(function(g,i){var d=1150+i*90;
    A(s.cards[i],[{opacity:0,transform:'translate('+(CX-g.cx)+'px,'+(CY-g.cy)+'px) scale(.3)'},{opacity:1,offset:.35},{opacity:1,transform:'none'}],{duration:900,delay:d,easing:SOFT});
    line(g,d+420,420);
  });
},
b:function(s){
  s.mk.style.opacity=1;
  s.paths.forEach(function(p,i){p.style.strokeDasharray='1 2';
    A(p,[{strokeDashoffset:1},{strokeDashoffset:0}],{duration:560,delay:150+i*45,easing:OUT})});
  settle(s,700);
  s.geo.forEach(function(g,i){var d=850+i*85;
    orbit(s,g,i,d);
    line(g,d+820,380);
  });
},
c:function(s){
  A(s.sq,[{opacity:0,transform:'rotate(45deg) scale(0)'},{opacity:1,transform:'rotate(45deg) scale(1)'}],{duration:480,easing:POP});
  A(s.sq,[{transform:'rotate(45deg) scale(1)',borderRadius:'16px',backgroundColor:'rgba(18,131,221,1)',opacity:1},
          {transform:'rotate(180deg) scale(1.35)',borderRadius:'50%',backgroundColor:'rgba(18,131,221,0)',opacity:1,offset:.7},
          {transform:'rotate(225deg) scale(1.62)',borderRadius:'50%',backgroundColor:'rgba(18,131,221,0)',opacity:0}],{duration:1000,delay:560,easing:IO,fill:'forwards'});
  A(s.mk,[{opacity:1,clipPath:'circle(0% at 50% 50%)',transform:'rotate(-30deg) scale(.9)'},{opacity:1,clipPath:'circle(72% at 50% 50%)',transform:'none'}],{duration:800,delay:760,easing:OUT});
  settle(s,1200);
  s.geo.forEach(function(g,i){var d=1150+i*85;
    orbit(s,g,i,d);
    line(g,d+820,380);
  });
}};
function play(s){
  s.st.getAnimations({subtree:true}).forEach(function(a){a.cancel()});
  s.paths.forEach(function(p){p.style.strokeDasharray=''});
  layout(s);V[s.v](s);s.played=true;
}
function relayout(){stages.forEach(function(s){var k=s.box.clientWidth/960;s.st.style.transform='scale('+k+')';s.box.style.height=(800*k)+'px'})}
window.addEventListener('resize',relayout);
document.getElementById('all').onclick=function(){stages.forEach(play)};
var ready=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
ready.then(function(){
  stages.forEach(function(s){layout(s)});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){var s=stages.find(function(x){return x.box===e.target});if(e.isIntersecting&&!s.played)play(s)})},{threshold:.45});
  stages.forEach(function(s){io.observe(s.box)});
});
})();
