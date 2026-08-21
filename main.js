// ==========================================================================
// My PORTFOLIO Saadi
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('is-open'));
    });
  }

// Mark active nav link based on current file name
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlinks a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current) a.classList.add('is-active');
  });

   // Copy-to-clipboard for email contact cards
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', (e) => {
      const text = el.getAttribute('data-copy');
      if (!text) return;
      navigator.clipboard?.writeText(text).then(() => {
        const note = el.querySelector('.copy-note');
        if (note) {
          const original = note.textContent;
          note.textContent = 'COPIED TO CLIPBOARD';
          setTimeout(() => { note.textContent = original; }, 1800);
        }
      });
    });
  });
});