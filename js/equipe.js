(() => {
  const profiles = {
    franco: {
      name: 'Prof. Franco Scaldaferri',
      qualification: 'Gastroenterologo',
      summary: 'Dirigente medico presso la Fondazione Policlinico Universitario A. Gemelli IRCCS di Roma.',
      biography: [
        'Dirigente medico presso la Fondazione Policlinico Universitario A. Gemelli IRCCS di Roma, dirige l’Unità Operativa Semplice dedicata alle Malattie Infiammatorie Croniche Intestinali (MICI) del CEMAD. Svolge inoltre attività accademica e di ricerca clinica e traslazionale, con particolare attenzione alle nuove strategie terapeutiche, al microbiota intestinale e ai meccanismi dell’infiammazione.',
        'La sua attività integra competenza specialistica, ricerca scientifica e un approccio multidisciplinare e personalizzato alla cura del paziente.'
      ]
    },
    rita: {
      name: 'Dott.ssa Rita Monterubbianesi',
      qualification: 'Gastroenterologa',
      summary: 'Dirigente medico presso la UOC di Gastroenterologia dell’Ospedale San Camillo di Roma.',
      biography: [
        'Dirigente medico presso la UOC di Gastroenterologia dell’Ospedale San Camillo di Roma. Si occupa delle patologie del tratto gastrointestinale, con particolare attenzione alle malattie infiammatorie croniche intestinali e alle patologie funzionali come la sindrome del colon irritabile.',
        'Quando possibile predilige trattare i sintomi attraverso l’alimentazione e la medicina complementare, mantenendo un approccio olistico.'
      ]
    },
    rosalba: {
      name: 'Dott.ssa Rosalba Merola',
      qualification: 'Mediatrice familiare e pedagogista clinica',
      summary: 'Fornisce consulenza e supporto per percorsi di crescita serena e consapevole a individui e famiglie.',
      biography: [
        'Pedagogista clinico, mediatrice familiare e pedagogista con esperienza pluriennale per DSA e BES.',
        'Fornisce consulenza e supporto per percorsi di crescita serena e consapevole a individui e famiglie.',
        'La pedagogia clinica offre aiuto alla persona nei momenti di crisi, lavorando sulle sue risorse. Il disegno onirico è uno degli strumenti maggiormente utilizzati.',
        'La mediazione familiare offre uno spazio neutro e privo di giudizio per gestire il conflitto e raggiungere accordi duraturi, ponendo al centro il benessere e l’interesse dei figli.',
        'La pedagogia supporta le difficoltà comportamentali e di apprendimento dall’infanzia all’adolescenza, coinvolgendo anche gli adulti di riferimento.'
      ]
    },
    fulvia: {
      name: 'Fulvia Coen',
      qualification: 'Educatrice, direttrice e legale rappresentante dell’Associazione Il Flauto Magico',
      summary: 'Educatrice e direttrice dell’Associazione Il Flauto Magico di Roma, cura il progetto Bottega Teatrale, laboratorio annuale di teatro integrato per persone con e senza disabilità.',
      biography: [
        'Fulvia Coen è educatrice laureata in Scienze della Formazione, con un Master in tutela, protezione e diritti del minore e una formazione specifica nell’ambito dell’Arte Terapia nel teatro e nella danza. Ha una lunga esperienza nella progettazione e realizzazione di attività educative e ludico-creative rivolte principalmente a bambini e minori, in ambito scolastico, culturale, museale, sanitario e socio-educativo.',
        'Dal 2002 è Direttrice e legale rappresentante dell’Associazione Il Flauto Magico di Roma, per la quale cura la progettazione, il coordinamento e la gestione di laboratori, centri estivi, eventi e progetti dedicati all’infanzia.',
        'L’Associazione Il Flauto Magico propone a Coesione Fa il progetto Bottega Teatrale, un laboratorio annuale di teatro integrato che, dal 2006, si svolge presso il Teatro San Genesio di Roma e coinvolge gruppi misti di persone con e senza disabilità.',
        'Il progetto nasce dalla convinzione che la relazione con l’altro, l’espressione di sé e il senso di appartenenza siano elementi fondamentali per il benessere della persona. In questa prospettiva, il teatro diventa uno strumento privilegiato per imparare a comunicare, ascoltare, riconoscere le proprie emozioni, confrontarsi con le differenze e costruire relazioni positive.',
        'Ispirata al principio “Persone tra le persone”, Bottega Teatrale propone un percorso in cui ciascun partecipante, indipendentemente dalle proprie capacità e fragilità, può trovare uno spazio di espressione, riconoscimento e partecipazione alla pari. Attraverso il gioco teatrale, l’improvvisazione, il movimento, la musica e le arti visive, il gruppo sperimenta forme di comunicazione verbale e non verbale, collaborazione e condivisione.',
        'Il percorso è condotto da operatori e professionisti del settore teatrale e artistico e culmina nella realizzazione di uno spettacolo aperto al pubblico. In sintonia con la missione di Coesione Fa, il progetto intende valorizzare il ruolo delle relazioni nella costruzione del benessere individuale e collettivo, offrendo un’esperienza concreta di ascolto, accoglienza, fiducia reciproca e superamento delle barriere relazionali.',
        'Perché stare bene con gli altri significa anche imparare a stare bene con sé stessi. Il teatro offre a ciascuno la possibilità di incontrare l’altro, riconoscersi nelle differenze e costruire insieme nuove forme di relazione.'
      ]
    },
    zocco: {
      name: 'Prof.ssa Maria Assunta Zocco',
      qualification: 'Internista/Gastroenterologo',
      summary: 'Specialista in Medicina Interna; Master in Ecografia internistica e terapie Eco guidate.',
      biography: ["Prof.ssa Maria Assunta Zocco, MD, PHD, Specialista in Medicina Interna; Master in Ecografia internistica e terapie Eco guidate, Ricercatrice in Medicina Interna, Gastroenterologia e Malattie del fegato, Fondazione Policlinico Universitario A, Gemelli IRCCS - Roma"]
    },
    bruno: {
      name: 'PROF. Giuseppe Bruno',
      qualification: 'Neurologo',
      summary: 'Psicoanalista SPI, Responsabile della “Clinica della memoria”, La Sapienza, Roma.',
      biography: ["PROF. Giuseppe Bruno, Neurologo, Psicoanalista SPI, Responsabile della \"Clinica della memoria\", La Sapienza, Roma."]
    },
    psicologa: {
      name: 'Psicologa e psicoterapeuta',
      qualification: 'Arteterapeuta del colore ad orientamento steineriano',
      summary: 'Psicologa e psicoterapeuta, arteterapeuta del colore ad orientamento steineriano.',
      biography: ["Psicologa e psicoterapeuta, arteterapeuta del colore ad orientamento steineriano.", "Lavoro con bambini attraverso la play Therapy, adolescenti, e genitori. Lavoro sul lutto e sull’ impatto di vita sulle malattie organiche.", "1 volta al mese gestisco un Death Cafè in cui gratuitamente tutti coloro che ne hanno bisogno possono partecipare su prenotazione."]
    },
    artemediatrice: {
      name: 'Arte come Mediazione',
      qualification: 'Presso il Palazzetto dell’hotel Hassler',
      summary: 'Esercizi extraformativi e percorsi di mentorizzazione.',
      biography: ["Presso il Palazzetto dell’hotel Hassler", "ESERCIZI EXTRAFORMATIVE", "– PERCORSI DI MENTORIZAZZIONE", "Vengono proposti cicli di incontri dedicati all’esercizio di diverse modalità di comprensione del mondo. Attraverso di essi, possiamo scoprire il nostro modo di pensare e aprirci all’incontro con le opere create.", "GUARIRE LA VIOLENZA DELLO SGUARDO SUL MONDO", "Lo svelamento dello sguardo-Dalla cecità ai nuovi occhi", "Non si tratta più di proiettare sul mondo ciò che già conosciamo – o ciò che desideriamo che la realtà circostante e le nostre relazioni siano. Desideri e conoscenze, radicati nella prospettiva abituale, lasciano il posto a uno sguardo nuovo, capace di superare condizionamenti e cecità; si giunge così a una sincera autenticità nel vedere il mondo. In un simile incontro – immersi nel mare delle infinite possibilità dell’arte – si dissolvono i pregiudizi e quel superfluo fardello che, finora, ci ha impedito di vedere con chiarezza e di lasciarci trasformare. Noi stessi dobbiamo diventare un’opera d’arte: questa compenetrazione reciproca si compie nell’incontro creativo. Emerge uno sguardo triplice – rivolto al mondo, a se stessi e alla trascendenza – unito in un unico processo che non può essere compreso attraverso una duplice conoscenza, un pensare razionale-teorico e il pensare empirico-sperimentale. Si tratta di un processo aperto, costantemente proteso verso una promessa che risiede tanto all’origine quanto nel futuro. Esso richiede una terza forma di conoscenza: una conoscenza mentale contemplativa (Welt-Anschauung) che permetta di tenere i due modi di pensare in tensione e alla stesso tempo vedere il tutto, sostenuta dalla capacità di interrogarsi sul senso, sullo spirito e sull’essere delle cose. Qui, l’oggettività si raggiunge attraverso la sincerità nel processo della conoscenza, il che implica anche la disponibilità a lasciarsi, a propria volta, guardare. Ciò richiede di creare spazio per ciò che è ancora sconosciuto e di saper stare un momento in silenzio.", "Ogni essere umano possiede l’organo per questo sguardo, sia che ne sia o non ne sia consapevole, sia che faccia uso sia che non faccia uso di questo organo. Lo sguardo non si crea così facilmente. Per questo (sguardo), richiede alcune precondizioni, prima di tutto una certa distanza, per vedere l’interezza, poi di nuovo una coscienza di impegno, una grande accettazione del mondo, e allo stesso tempo la libertà da essa (dal mondo), che rende possibile un sguardo nel silenzio (Anschauung), e che non mescola e non divide.", "Pontificia Università Greogoriana –", "Professoressa Dr. Yvonne zu Dohna Schlobitten", "La Welt-Anschauung (La contemplazione mentale del mondo)", "Professor presso la Facoltà di Storia e Beni Culturali della Chiesa e del Rome Catholic Studies Program e il Centro di Studi interreligiosi della Pontificia Università Gregoriana. Vincitrice per la sua opera omnia del Premio Basilicata nel 2022. Formazione internazionale e interdisciplinare in Diritto comparato, Filosofia e storia dell’arte e dei media. Phd in filosofia con una borsa di studio della Bibliotheca Hertziana/ Max Planck Gesellschaft su \"Canova e l’arte come educatore”. Specializzazione in Teologia Spirituale (Teresianum) e la filosofia della religione (Università di Fribourg). Professore ospite in Messico, Virginia e Pechino. Fondato il campo Fenomenologia dello sguardo sul tutto in Oriente e Occidente ispirata a Romano Guardini. Pilot Project con le università in China, America e Europa su “Metanoia in the Age of AI”, seguendo il progetto \"Grounding Transdisciplinariity in the Threefold Seeing”. Membro della Commissione redazionale di 'Donne, Chiesa, Mondo' (Osservatore Romano, Vaticano), Vice presidente del Centro di Formazione alla Meditazione Cristiana (CFMC), Roma, e Fondatrice dell’Intercultural School of Silence. Pubblicazione: Verso nuovi occhi. L’arte dello sguardo sul tutto (2023).", "Coesione fa. – avv.to Maria Antonietta Schettino", "avv.to esperto in diritto di famiglia ha sempre creduto nella necessità dell’obiettività delle scelte che presuppongono la separazione, ove necessaria. Spesso la soluzione giuridica (tranne rari casi) per una “sana” separazione è indicata da molteplici possibilità composite esistenti nel nostro ordinamento giuridico. L’obiettività’ nel “vedere” e la necessità nel comunicare anche attraverso l’esperienza dell’arte permette di ritrovare, nell’emozione comune, un filo ed un legame. La crisi allora assume il suo reale significato etimologico “krisis”, ossia scelta, decisione.", "Giornalista, scrittrice, ideatrice e responsabile scientifico dei progetti Coesione, Incoesione e Coesione fa., progetti di “accompagnamento”, (con la collaborazione di un’equipe multidisciplinare), nelle fasi fisiologiche e patologiche delle relazioni familiari ed interpersonali.", "Odi et amo;", "Dalla relazione alla responsabilità genitoriale;", "Rispetto, riconoscimento dell’altro e separazione;"]
    },

  };

  const areas = {
    medico: [
      { name: 'Avvocato' },
      { name: 'Mediatore familiare', profiles: ['rosalba'] },
      { name: 'Consulente familiare' },
      { name: 'Psicologo e Psicoterapeuta', profiles: ['psicologa'] },
      { name: 'Psichiatra' },
      { name: 'Pedagogista' },
      { name: 'Gastroenterologo', profiles: ['franco', 'rita', 'zocco'] },
      { name: 'Ginecologo' },
      { name: 'Neurologo', profiles: ['bruno'] },
      { name: 'Cardiologo' },
      { name: 'Geriatra' }
    ],
    educativa: [
      { name: 'Maestri di scacchi' },
      { name: 'Arteterapeuti nelle diverse declinazioni' },
      { name: 'Pedagogisti specializzati in disegno onirico', profiles: ['rosalba'] },
      { name: 'Teatro e associazioni collegate', profiles: ['fulvia'] },
      { name: 'Arte come Mediazione', profiles: ['artemediatrice'] }
    ]
  };

  function getSummary(profile) {
    if (profile.summary) return profile.summary;
    const paragraph = profile.biography[profile.summaryIndex || 0];
    const sentenceEnd = paragraph.indexOf('. ');
    return sentenceEnd < 0 ? paragraph : paragraph.slice(0, sentenceEnd + 1);
  }

  function closeOpenDisclosures(exceptItem) {
    document.querySelectorAll('#equipe .cf-equipe-item.is-open, #equipe .cf-equipe-persona.is-open').forEach((openItem) => {
      if (openItem === exceptItem) return;
      const button = openItem.querySelector('.cf-equipe-toggle, .cf-equipe-persona-toggle');
      const panel = openItem.querySelector('.cf-equipe-panel, .cf-equipe-persona-panel');
      openItem.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      if (button.classList.contains('cf-equipe-persona-toggle')) {
        button.textContent = 'Leggi il profilo';
      }
    });
  }

  function createBiography(profileData, className = 'cf-equipe-profile') {
    const profile = document.createElement('article');
    profile.className = className;
    profileData.biography.forEach((text) => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      profile.append(paragraph);
    });
    return profile;
  }

  function createFeaturedProfile(profileId, profileData) {
    const item = document.createElement('article');
    item.className = 'cf-equipe-persona';

    const name = document.createElement('h3');
    name.className = 'cf-equipe-persona-name';
    name.textContent = profileData.name;

    const qualification = document.createElement('p');
    qualification.className = 'cf-equipe-persona-role';
    qualification.textContent = profileData.qualification;

    const summary = document.createElement('p');
    summary.className = 'cf-equipe-persona-summary';
    summary.textContent = getSummary(profileData);

    const button = document.createElement('button');
    const buttonId = `equipe-persona-${profileId}`;
    const panelId = `${buttonId}-panel`;
    button.className = 'cf-equipe-persona-toggle';
    button.type = 'button';
    button.id = buttonId;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', panelId);
    button.textContent = 'Leggi il profilo';

    const panel = document.createElement('div');
    panel.className = 'cf-equipe-persona-panel';
    panel.id = panelId;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', buttonId);
    panel.setAttribute('aria-hidden', 'true');

    const inner = document.createElement('div');
    inner.className = 'cf-equipe-persona-panel-inner';
    inner.append(createBiography(profileData, 'cf-equipe-persona-biography'));
    panel.append(inner);
    item.append(name, qualification, summary, button, panel);

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      closeOpenDisclosures(item);
      item.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      panel.setAttribute('aria-hidden', String(!open));
      button.textContent = open ? 'Chiudi il profilo' : 'Leggi il profilo';
    });

    return item;
  }

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
      const profile = createBiography(profileData, 'cf-equipe-profile');
      const name = document.createElement('h4');
      name.textContent = profileData.name;
      const role = document.createElement('p');
      role.className = 'cf-equipe-profile-role';
      role.textContent = profileData.qualification;
      profile.prepend(role);
      profile.prepend(name);
      list.append(profile);
    });
    inner.append(list);

    panel.append(inner);
    item.append(button, panel);

    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      closeOpenDisclosures(item);
      item.classList.toggle('is-open', open);
      button.setAttribute('aria-expanded', String(open));
      panel.setAttribute('aria-hidden', String(!open));
    });

    return item;
  }

  const featured = document.querySelector('[data-equipe-profiles]');
  if (featured) {
    Object.entries(profiles).forEach(([profileId, profile]) => {
      featured.append(createFeaturedProfile(profileId, profile));
    });
  }

  Object.entries(areas).forEach(([areaName, professions]) => {
    const list = document.querySelector(`[data-equipe-area="${areaName}"]`);
    if (!list) return;
    professions.forEach((profession, index) => {
      list.append(createItem(areaName, profession, index));
    });
  });
})();
