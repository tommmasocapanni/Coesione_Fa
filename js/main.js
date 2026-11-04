// Nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
  }));
}
// Close on outside click
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('open') && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// Preselect from query param ?cat=professionista
const params = new URLSearchParams(window.location.search);
if (params.get('cat') === 'professionista') {
  const sel = document.querySelector('select[name="categoria"]');
  if (sel) sel.value = 'Professionista';
}

// Form handling
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // reset errors
    form.querySelectorAll('.error').forEach(el => el.classList.remove('show'));
    let valid = true;
    const nome = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const messaggio = form.querySelector('[name="messaggio"]');
    const privacy = form.querySelector('[name="privacy"]');
    if (!nome.value.trim()) { showErr(nome, 'Inserisci il tuo nome.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { showErr(email, 'Inserisci un\'email valida.'); valid = false; }
    if (!messaggio.value.trim()) { showErr(messaggio, 'Scrivi un messaggio.'); valid = false; }
    if (!privacy.checked) { showErr(privacy, 'Devi accettare l\'informativa privacy.'); valid = false; }
    if (!valid) return;
    // endpoint from data attribute
    const endpoint = form.getAttribute('data-endpoint');
    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      status.className = 'form-status error';
      status.textContent = 'Il modulo non è ancora configurato. Inserisci l\'endpoint Formspree/Netlify in data-endpoint.';
      status.style.display = 'block';
      return;
    }
    submitBtn.disabled = true;
    const original = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span>Invio...';
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (res.ok) {
        status.className = 'form-status success';
        status.textContent = 'Messaggio inviato. Ti risponderemo al più presto.';
        form.reset();
      } else {
        throw new Error('fail');
      }
    } catch (err) {
      status.className = 'form-status error';
      status.textContent = 'Si è verificato un errore. Riprova più tardi.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
    }
  });
}
function showErr(field, msg) {
  const err = field.parentElement.querySelector('.error') || field.closest('.form-group').querySelector('.error');
  if (err) { err.textContent = msg; err.classList.add('show'); }
}