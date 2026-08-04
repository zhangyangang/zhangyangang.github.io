const root=document.documentElement,button=document.querySelector('.lang');
function setLanguage(lang){root.dataset.lang=lang;root.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);button.textContent=lang==='en'?'中文':'EN';localStorage.setItem('language',lang)}
button.addEventListener('click',()=>setLanguage(root.dataset.lang==='en'?'zh':'en'));
setLanguage(localStorage.getItem('language')||((navigator.language||'').startsWith('zh')?'zh':'en'));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
