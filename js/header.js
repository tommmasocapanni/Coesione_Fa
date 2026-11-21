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

    let scrollTimer = null;
    window.addEventListener('scroll', () => {
      if (isOpen) return;
      if (window.innerWidth <= 768) return;
      if (scrollTimer) clearTimeout(scrollTimer);
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
      // Reappear after user stops scrolling for 1.2s
      scrollTimer = setTimeout(() => {
        header.classList.remove('header-hidden');
      }, 1200);
    }, { passive: true });

    // keep header visible if focus inside
    header.addEventListener('focusin', () => header.classList.remove('header-hidden'));
  });

  // Sulla Home, il link "Home" scrolla in cima invece di ricaricare la pagina
  const onHome = /index\.html$/.test(location.pathname) || location.pathname === '/' || location.pathname.endsWith('/');
  if (onHome) {
    document.querySelectorAll('header nav a, .site-header .nav a').forEach((a) => {
      if (a.getAttribute('href') === 'index.html' || a.getAttribute('href') === '/') {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
    });

    // Scrollspy: evidenzia la voce di menu della sezione attualmente visibile
    const header = document.querySelector('.cf-header, .site-header');
    const navLinks = Array.from(document.querySelectorAll('header nav a, #mobile-menu a'));
    const seen = new Set();
    const uniqueLinks = navLinks.filter((a) => {
      const href = a.getAttribute('href') || '';
      if (seen.has(href)) return false;
      seen.add(href);
      return true;
    });
    const targets = [];

    uniqueLinks.forEach((a) => {
      const href = a.getAttribute('href') || '';
      if (href.length > 1 && href.charAt(0) === '#') {
        const el = document.querySelector(href);
        if (el) targets.push({ href, el });
      }
    });

    targets.sort((a, b) => {
      return a.el.getBoundingClientRect().top - b.el.getBoundingClientRect().top;
    });

    function setActive(href) {
      const links = Array.from(document.querySelectorAll('header nav a, #mobile-menu a'));
      links.forEach((a) => a.removeAttribute('aria-current'));
      if (href) {
        links.forEach((a) => {
          if (a.getAttribute('href') === href) a.setAttribute('aria-current', 'true');
        });
      } else {
        links.forEach((a) => {
          const h = a.getAttribute('href');
          if (h === 'index.html' || h === '/') a.setAttribute('aria-current', 'page');
        });
      }
    }

    function updateSpy() {
      if (!targets.length) return;
      const offset = (header ? header.offsetHeight : 0) + 90;
      const pos = window.scrollY + offset;
      let current = null;
      targets.forEach((t) => {
        const top = t.el.getBoundingClientRect().top + window.scrollY;
        if (top <= pos) current = t;
      });
      // Se siamo in fondo alla pagina, evidenzia l'ultima sezione
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = targets[targets.length - 1];
      }
      setActive(current ? current.href : null);
    }

    let spyTicking = false;
    window.addEventListener('scroll', () => {
      if (spyTicking) return;
      spyTicking = true;
      window.requestAnimationFrame(() => {
        updateSpy();
        spyTicking = false;
      });
    }, { passive: true });
    window.addEventListener('resize', updateSpy);
    window.addEventListener('load', updateSpy);
    updateSpy();
  }
})();