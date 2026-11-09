(() => {
  const profiles = {
    franco: {
      name: 'Prof. Franco Scaldaferri',
      biography: [
        'Dirigente medico presso la Fondazione Policlinico Universitario A. Gemelli IRCCS di Roma, dirige l’Unità Operativa Semplice dedicata alle Malattie Infiammatorie Croniche Intestinali (MICI) del CEMAD. Svolge inoltre attività accademica e di ricerca clinica e traslazionale, con particolare attenzione alle nuove strategie terapeutiche, al microbiota intestinale e ai meccanismi dell’infiammazione.',
        'La sua attività integra competenza specialistica, ricerca scientifica e un approccio multidisciplinare e personalizzato alla cura del paziente.'
      ]
    },
    rita: {
      name: 'Dott.ssa Rita Monterubbianesi',
      biography: [
        'Dirigente medico presso la UOC di Gastroenterologia dell’Ospedale San Camillo di Roma. Si occupa delle patologie del tratto gastrointestinale, con particolare attenzione alle malattie infiammatorie croniche intestinali e alle patologie funzionali come la sindrome del colon irritabile.',
        'Quando possibile predilige trattare i sintomi attraverso l’alimentazione e la medicina complementare, mantenendo un approccio olistico.'
      ]
    },
    rosalba: {
      name: 'Dott.ssa Rosalba Merola',
      biography: [
        'Pedagogista clinico, mediatrice familiare e pedagogista con esperienza pluriennale per DSA e BES.',
        'Fornisce consulenza e supporto per percorsi di crescita serena e consapevole a individui e famiglie.',
        'La pedagogia clinica offre aiuto alla persona nei momenti di crisi, lavorando sulle sue risorse. Il disegno onirico è uno degli strumenti maggiormente utilizzati.',
        'La mediazione familiare offre uno spazio neutro e privo di giudizio per gestire il conflitto e raggiungere accordi duraturi, ponendo al centro il benessere e l’interesse dei figli.',
        'La pedagogia supporta le difficoltà comportamentali e di apprendimento dall’infanzia all’adolescenza, coinvolgendo anche gli adulti di riferimento.'
      ]
    }
  };

  const areas = {
    medico: [
      { name: 'Avvocato' },
      { name: 'Mediatore familiare', profiles: ['rosalba'] },
      { name: 'Consulente familiare' },
      { name: 'Psicologo' },
      { name: 'Psicoterapeuta' },
      { name: 'Psichiatra' },
      { name: 'Pedagogista' },
      { name: 'Gastroenterologo', profiles: ['franco', 'rita'] },
      { name: 'Ginecologo' },
      { name: 'Neurologo' },
      { name: 'Cardiologo' },
      { name: 'Geriatra' },
      { name: 'Nefrologo' }
    ],
    educativa: [
      { name: 'Maestri di scacchi' },
      { name: 'Arteterapeuti nelle diverse declinazioni' },
      { name: 'Pedagogisti specializzati in disegno onirico', profiles: ['rosalba'] },
      { name: 'Teatro e associazioni collegate' }
    ]
  };

  function createItem(areaName, profession, index) {
    const item = document.createElement('div');
    item.className = 'cf-equipe-item';

    const listedProfiles = (profession.profiles || []).map((profileId) => profiles[profileId]);
    if (!listedProfiles.length) {
      item.classList.add('cf-equipe-item--listed');
      const label = document.createElement('span');
      label.className = 'cf-equipe-label';
      label.textContent = profession.name;
      item.append(label);
      return item;
    }

    const button = document.createElement('button');
    const buttonId = `equipe-${areaName}-${index}`;
    const panelId = `${buttonId}-panel`;
    button.className = 'cf-equipe-toggle';
    button.type = 'button';
    button.id = buttonId;
    button.textContent = profession.name;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panelId);

    const panel = document.createElement('div');
    panel.className = 'cf-equipe-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', buttonId);
    panel.setAttribute('aria-hidden', 'true');

    const inner = document.createElement('div');
    inner.className = 'cf-equipe-panel-inner';

    const list = document.createElement('div');
    list.className = 'cf-equipe-profiles';
    listedProfiles.forEach((profileData) => {
      const profile = document.createElement('article');
      profile.className = 'cf-equipe-profile';
      const name = document.createElement('h4');
      name.textContent = profileData.name;
      profile.append(name);
      profileData.biography.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        profile.append(paragraph);
      });
      list.append(profile);
    });
    inner.append(list);

    panel.append(inner);
    item.append(button, panel);

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      item.parentElement.querySelectorAll('.cf-equipe-item.is-open').forEach((openItem) => {
        const openButton = openItem.querySelector('.cf-equipe-toggle');
        const openPanel = openItem.querySelector('.cf-equipe-panel');
        openItem.classList.remove('is-open');
        openButton.setAttribute('aria-expanded', 'false');
        openPanel.setAttribute('aria-hidden', 'true');
      });
      if (open) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
        panel.setAttribute('aria-hidden', 'false');
      }
    });

    return item;
  }

  Object.entries(areas).forEach(([areaName, professions]) => {
    const list = document.querySelector(`[data-equipe-area="${areaName}"]`);
    if (!list) return;
    professions.forEach((profession, index) => {
      list.append(createItem(areaName, profession, index));
    });
  });
})();
