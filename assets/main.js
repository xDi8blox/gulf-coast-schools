(function(){
  var WA='2348087908556';
  var t=document.querySelector('.nav__toggle'),d=document.getElementById('drawer');
  if(t&&d){
    t.addEventListener('click',function(){var o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));d.hidden=o;});
    d.addEventListener('click',function(e){if(e.target.tagName==='A'){t.setAttribute('aria-expanded','false');d.hidden=true;}});
  }
  function wa(msg){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(msg);}
  var f=document.getElementById('enquire');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var msg='Hello Gulf Coast Schools, I would like to enquire about admission for my child into '+f.level.value+' ('+f.mode.value+'). Please share the details.';
    window.open(wa(msg),'_blank','noopener');
  });}
  var a=document.getElementById('apply-wa');
  if(a){a.href=wa('Hello Gulf Coast Schools, I would like to apply for a teaching role. Subject: ');a.target='_blank';a.rel='noopener';}
  document.querySelectorAll('a[href="https://wa.me/'+WA+'"]').forEach(function(x){x.href=wa('Hello Gulf Coast Schools, I have an enquiry.');x.target='_blank';x.rel='noopener';});
  if('IntersectionObserver' in window){
    var els=document.querySelectorAll('.sec-head,.about__body,.pull,.curr li,.school,.boarding,.steps li,.enquire,.roles,.g,.visit__info,.life__cols');
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){el.classList.add('rv');io.observe(el);});
  }
})();
