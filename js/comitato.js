(() => {
  const profiles = [
    { name: 'Prof. Giuseppe Bruno', bio: 'Neurologo, Psicoanalista SPI, Responsabile della “Clinica della memoria”, Sapienza, Roma.' },
    { name: 'Prof. Yvonne Dohna Schlobitten', bio: 'Docente di filosofia e spiritualità dell’arte presso la Pontificia Università Gregoriana, facoltà di storia e beni culturali della Chiesa.' },
    { name: 'Prof.ssa Federica Galli', bio: 'Psicologa clinica e psicoterapeuta, prof. Associato, Università di medicina e Psicologia Università Sapienza Roma, esperta nel ruolo dei fattori psicologici in relazione a patologie mediche.' },
    { name: 'Prof. Stefano Livi', bio: 'Professore ordinario in psicologia Sociale presso la Facoltà di Medicina e Psicologia Sapienza di Roma dove insegna Psicologia sociale dei gruppi.' },
    { name: 'Prof. Filippo Murina', bio: 'Specialista in Ginecologia ed Ostetricia. Responsabile di patologia del Tratto Genitale inferiore e Centro Menopausa - Ospedale Buzzi - Università degli Studi di Milano - Presidente della Società italiana della Menopausa (SIM), Direttore Scientifico dell’Associazione Vulvodinia.' },
    { name: 'Prof. Franco Scaldaferri', bio: 'MD, PHD, Gastroenterologo UOS Malattie Infiammatorie Croniche Intestinali, IBD UNIT presso UOC CEMAD (malattie apparato digerente), Fondazione Policlinico A. Gemelli IRCCS, Docente di gastroenterologia presso Università Cattolica del Sacro Cuore, Roma.' },
    { name: 'Prof.ssa Raffaella Scarpa', bio: 'Docente di linguistica medica e clinica presso l’Università di Torino, autrice del volume “Lo stile dell’abuso, violenza domestica e linguaggio”, Treccani, Roma 2021; autrice del volume “La grammatica della menzogna”, Treccani, Roma.' },
    { name: 'Prof.ssa Maria Assunta Zocco', bio: 'MD, PHD, Specialista in Medicina Interna; Master in Ecografia internistica e terapie Eco guidate, Ricercatrice in Medicina Interna, Gastroenterologia e Malattie del fegato, Fondazione Policlinico Universitario A. Gemelli IRCCS – Roma.' }
  ];

  const iconSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>';

  function createProfile(profileData) {
    const vp = document.createElement('div');
    vp.className = 'cf-comitato-profile';
    vp.style.minHeight = 'auto';

    const toggle = document.createElement('button');
    toggle.className = 'cf-vp-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');

    const icon = document.createElement('span');
    icon.className = 'cf-equipe-area-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.innerHTML = iconSvg;

    const meta = document.createElement('span');
    meta.className = 'cf-vp-meta';
    const name = document.createElement('h4');
    name.className = 'cf-vp-name';
    name.textContent = profileData.name;
    meta.append(name);

    const arrow = document.createElement('span');
    arrow.className = 'cf-vp-arrow';
    arrow.setAttribute('aria-hidden', 'true');
    arrow.textContent = '›';

    toggle.append(icon, meta, arrow);

    const panel = document.createElement('div');
    panel.className = 'cf-vp-panel';

    const inner = document.createElement('div');
    inner.className = 'cf-vp-panel-inner';
    const p = document.createElement('p');
    p.textContent = profileData.bio;
    inner.append(p);
    panel.append(inner);

    vp.append(toggle, panel);

    toggle.addEventListener('click', (e) => {
      if (e) { e.stopPropagation(); }
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('is-open', open);
      if (open) {
        panel.style.maxHeight = '0px';
        void panel.offsetHeight;
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } else {
        panel.style.maxHeight = '0px';
      }
    });

    return vp;
  }

  const columns = document.querySelectorAll('[data-comitato-col]');
  if (!columns.length) return;

  const colArray = Array.from(columns);
  const half = Math.ceil(profiles.length / colArray.length);
  colArray.forEach((col, ci) => {
    const slice = profiles.slice(ci * half, (ci + 1) * half);
    slice.forEach((profile) => col.append(createProfile(profile)));
  });

  // Accordion: apri/chiudi l'elenco dei componenti del Comitato
  const trigger = document.querySelector('.cf-comitato-accordion-trigger');
  const panel = document.querySelector('.cf-comitato-accordion-panel');
  if (trigger && panel) {
    panel.style.maxHeight = '0px';
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      if (open) {
        panel.style.maxHeight = '0px';
        void panel.offsetHeight;
        panel.style.maxHeight = panel.scrollHeight + 'px';
        const onEnd = (e) => {
          if (e.propertyName === 'max-height') {
            panel.style.maxHeight = 'none';
            panel.removeEventListener('transitionend', onEnd);
          }
        };
        panel.addEventListener('transitionend', onEnd);
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        void panel.offsetHeight;
        panel.style.maxHeight = '0px';
      }
    });
  }
})();
