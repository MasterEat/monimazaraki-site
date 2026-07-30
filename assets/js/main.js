(() => {
  const header = document.querySelector('.site-header');
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  header?.classList.add('menu-ready');
  const closeMenu = () => { if (!button || !nav) return; nav.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); };
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open);
    });
    nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMenu(); button.focus(); } });
  }
  const compact = () => header?.classList.toggle('is-compact', window.scrollY > 24);
  compact(); window.addEventListener('scroll', compact, { passive: true });
  const form = document.querySelector('[data-preview-form]');
  form?.addEventListener('submit', e => { e.preventDefault(); const status = form.querySelector('.form-status'); status.hidden = false; status.focus(); });
  document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
  document.querySelector('[data-share]')?.addEventListener('click', async e => {
    if (navigator.share) await navigator.share({ title: document.title, url: location.href });
    else { await navigator.clipboard?.writeText(location.href); e.currentTarget.textContent = 'Ο σύνδεσμος αντιγράφηκε'; }
  });
})();
