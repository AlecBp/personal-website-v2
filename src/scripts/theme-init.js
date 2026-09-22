(() => {
  let stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch {}
  const system = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = stored === 'light' || stored === 'dark' ? stored : system;
})();
