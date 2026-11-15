const toggle = document.querySelector('#theme-toggle');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  toggle.textContent = isDark ? '☀' : '☾';
  toggle.setAttribute('aria-label', isDark ? 'Yorug‘ rejimga o‘tish' : 'Qorong‘i rejimga o‘tish');
});

