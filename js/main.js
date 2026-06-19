(function(){
  const yearEl=document.querySelector('[data-year]');
  if(yearEl) yearEl.textContent=new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', e=>{
      const target=document.querySelector(link.getAttribute('href'));
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
})();
