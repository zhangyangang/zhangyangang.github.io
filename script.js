const root = document.documentElement;
const button = document.getElementById('lang');
const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');

const seoCopy = {
  en: {
    title: 'Yangang Zhang (张彦刚) | Robotics & Embodied AI',
    description: 'Yangang Zhang (张彦刚) is a robotics technology leader working on embodied AI, robot learning, multimodal reasoning, navigation, manipulation, and scalable robotics systems.'
  },
  zh: {
    title: '张彦刚（Yangang Zhang）| 机器人与具身智能',
    description: '张彦刚（Yangang Zhang）是机器人技术负责人，长期从事具身智能、机器人学习、多模态推理、导航、操作与可规模化机器人系统研发。'
  }
};

function setLang(lang) {
  const copy = seoCopy[lang] || seoCopy.en;
  root.dataset.lang = lang;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en]').forEach((element) => {
    element.textContent = element.dataset[lang] || element.dataset.en;
  });
  document.title = copy.title;
  metaDescription.content = copy.description;
  ogTitle.content = copy.title;
  ogDescription.content = copy.description;
  ogLocale.content = lang === 'zh' ? 'zh_CN' : 'en_US';
  button.textContent = lang === 'en' ? '中文' : 'EN';
  button.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换为英文');
  localStorage.setItem('language', lang);
}

button.addEventListener('click', () => setLang(root.dataset.lang === 'en' ? 'zh' : 'en'));
setLang(localStorage.getItem('language') || ((navigator.language || '').startsWith('zh') ? 'zh' : 'en'));
document.getElementById('year').textContent = new Date().getFullYear();

