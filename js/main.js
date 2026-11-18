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

// EmailJS + reCAPTCHA configuration
const EMAILJS_SERVICE_ID = 'service_y14howl';
const EMAILJS_TEMPLATE_ID = 'template_fyddn25';
const EMAILJS_PUBLIC_KEY = 'ysgbXJj73z6HHSoCK';

if (typeof emailjs !== 'undefined') {
  try { emailjs.init(EMAILJS_PUBLIC_KEY); } catch (e) { /* noop */ }
}

// Global callback used by reCAPTCHA widget (expired token)
window.onRecaptchaExpired = function () {
  const err = document.getElementById('recaptcha-error');
  if (err) {
    err.textContent = 'Il CAPTCHA è scaduto. Ripeti la verifica.';
    err.classList.add('show');
  }
};

// Form handling
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  let sending = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return;

    // reset errors
    form.querySelectorAll('.error').forEach(el => { el.classList.remove('show'); el.textContent = ''; });
    if (status) { status.className = 'form-status'; status.style.display = 'none'; status.textContent = ''; }

    let valid = true;
    const nome = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const categoria = form.querySelector('[name="categoria"]');
    const messaggio = form.querySelector('[name="messaggio"]');
    const privacy = form.querySelector('[name="privacy"]');

    if (!nome.value.trim()) { showErr(nome, 'Inserisci il tuo nome.'); valid = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { showErr(email, 'Inserisci un\'email valida.'); valid = false; }
    if (!messaggio.value.trim()) { showErr(messaggio, 'Scrivi un messaggio.'); valid = false; }
    if (!privacy.checked) { showErr(privacy, 'Devi accettare l\'informativa privacy.'); valid = false; }

    // reCAPTCHA token
    let token = '';
    if (typeof grecaptcha !== 'undefined') {
      try { token = grecaptcha.getResponse(); } catch (err) { token = ''; }
    }
    const recaptchaErr = document.getElementById('recaptcha-error');
    if (!token) {
      if (recaptchaErr) {
        recaptchaErr.textContent = 'Completa la verifica CAPTCHA.';
        recaptchaErr.classList.add('show');
      }
      valid = false;
    }

    if (!valid) return;

    sending = true;
    submitBtn.disabled = true;
    const original = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner"></span>Invio in corso...';

    try {
      const params = {
        name: nome.value.trim(),
        email: email.value.trim(),
        tipologia: categoria ? categoria.value : '',
        message: messaggio.value.trim(),
        'g-recaptcha-response': token
      };

      if (typeof emailjs === 'undefined' || typeof emailjs.send !== 'function') {
        throw new Error('EmailJS non disponibile');
      }
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

      if (status) {
        status.className = 'form-status success';
        status.textContent = 'Messaggio inviato. Ti risponderemo al più presto.';
        status.style.display = 'block';
      }
      form.reset();
      if (typeof grecaptcha !== 'undefined') {
        try { grecaptcha.reset(); } catch (err) { /* noop */ }
      }
      if (recaptchaErr) { recaptchaErr.classList.remove('show'); recaptchaErr.textContent = ''; }
    } catch (err) {
      if (status) {
        status.className = 'form-status error';
        status.textContent = 'Si è verificato un errore. Riprova più tardi.';
        status.style.display = 'block';
      }
      if (typeof grecaptcha !== 'undefined') {
        try { grecaptcha.reset(); } catch (e) { /* noop */ }
      }
    } finally {
      sending = false;
      submitBtn.disabled = false;
      submitBtn.innerHTML = original;
    }
  });
}
function showErr(field, msg) {
  const err = field.parentElement.querySelector('.error') || (field.closest && field.closest('.form-group') ? field.closest('.form-group').querySelector('.error') : null);
  if (err) { err.textContent = msg; err.classList.add('show'); }
}