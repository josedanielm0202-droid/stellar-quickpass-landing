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
