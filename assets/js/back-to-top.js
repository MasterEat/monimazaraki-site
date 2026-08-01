(() => {
  const button = document.querySelector('.back-to-top');

  if (!button) {
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let ticking = false;

  const updateVisibility = () => {
    button.classList.toggle('is-visible', window.scrollY > 500);
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    }
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? 'auto' : 'smooth'
    });
  });

  updateVisibility();
  window.addEventListener('scroll', handleScroll, { passive: true });
})();
