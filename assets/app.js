(function(){
  var els=document.querySelectorAll('[data-en]');
  els.forEach(function(e){e._es=e.innerHTML;});
  var b=document.getElementById('lang'),cur='es';
  b.addEventListener('click',function(){
    cur=cur==='es'?'en':'es';
    els.forEach(function(e){e.innerHTML=cur==='es'?e._es:e.getAttribute('data-en');});
    document.documentElement.lang=cur;b.textContent=cur==='es'?'EN':'ES';
  });
  var r=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});},{threshold:.12});
    r.forEach(function(e){e.classList.add('pre');io.observe(e);});
  }
})();
/* Inclinacion de la tarjeta principal siguiendo el mouse */
(function(){
  if(!matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches)return;
  var c=document.querySelector('.card.dash');if(!c)return;
  c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg) translateY(-4px)';});
  c.addEventListener('mouseleave',function(){c.style.transform='';});
})();
/* Armar la bandera al verla */
(function(){var f=document.querySelector('.cr-flag');if(!f)return;if(!('IntersectionObserver' in window)){f.classList.add('go');return;}
new IntersectionObserver(function(es,o){es.forEach(function(e){if(e.isIntersecting){f.classList.add('go');o.disconnect();}});},{threshold:.6}).observe(f);})();
