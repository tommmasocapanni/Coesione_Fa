(function () {
  const headers = document.querySelectorAll('.site-header, .cf-header');
  headers.forEach((header) => {
    // find toggle
    let toggle = header.querySelector('.nav-toggle');
    if (!toggle) {
      // create hamburger for cf-header (desktop nav) on mobile
      const nav = header.querySelector('nav');
      if (nav) {
        toggle = document.createElement('button');
        toggle.className = 'nav-toggle';
        toggle.setAttribute('aria-label', 'Apri menu');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'mobile-menu');
        toggle.innerHTML = '<span></span><span></span><span></span>';
        header.appendChild(toggle);
      }
    }
    if (!toggle) return;

    // build mobile menu panel from nav links
    let panel = document.getElementById('mobile-menu');
    if (!panel) {
      const nav = header.querySelector('nav');
      const links = nav ? nav.querySelectorAll('a') : [];
      panel = document.createElement('div');
      panel.id = 'mobile-menu';
      panel.className = 'mobile-menu-panel';
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-modal', 'true');
      panel.setAttribute('aria-label', 'Menu di navigazione');
      const ul = document.createElement('ul');
      links.forEach((a) => {
        const li = document.createElement('li');
        const clone = a.cloneNode(true);
        li.appendChild(clone);
        ul.appendChild(li);
      });
      panel.appendChild(ul);
      document.body.appendChild(panel);
    }

    let isOpen = false;
    let lastScrollY = window.scrollY;
    let ticking = false;

    function openMenu() {
      isOpen = true;
      panel.classList.add('open');
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Chiudi menu');
      document.body.style.overflow = 'hidden';
      const firstLink = panel.querySelector('a');
      if (firstLink) firstLink.focus();
    }
    function closeMenu(returnFocus = true) {
      isOpen = false;
      panel.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Apri menu');
      document.body.style.overflow = '';
      if (returnFocus) toggle.focus();
    }

    toggle.addEventListener('click', () => {
      if (isOpen) closeMenu(); else openMenu();
    });

    panel.addEventListener('click', (e) => {
      if (e.target === panel) closeMenu();
    });
    panel.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => closeMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) closeMenu();
      if (e.key === 'Tab' && isOpen) {
        const focusables = panel.querySelectorAll('a, button');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // desktop scroll hide/show
    let headerHeight = header.offsetHeight;
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        if (isOpen) closeMenu(false);
      }
      headerHeight = header.offsetHeight;
    });

    window.addEventListener('scroll', () => {
      if (isOpen) return;
      if (window.innerWidth <= 768) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          const delta = current - lastScrollY;
          if (Math.abs(delta) > 8) {
            if (current > 120 && delta > 0) {
              header.classList.add('header-hidden');
            } else {
              header.classList.remove('header-hidden');
            }
            lastScrollY = current;
          }
          if (current < 80) header.classList.remove('header-hidden');
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // keep header visible if focus inside
    header.addEventListener('focusin', () => header.classList.remove('header-hidden'));
  });
})();