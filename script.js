const root=document.documentElement,button=document.getElementById('lang');
function setLang(lang){root.dataset.lang=lang;root.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=el.dataset[lang]);button.textContent=lang==='en'?'中文':'EN';localStorage.setItem('language',lang)}
button.onclick=()=>setLang(root.dataset.lang==='en'?'zh':'en');
setLang(localStorage.getItem('language')||((navigator.language||'').startsWith('zh')?'zh':'en'));document.getElementById('year').textContent=new Date().getFullYear();
