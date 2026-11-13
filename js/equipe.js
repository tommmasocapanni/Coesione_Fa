(() => {
  function openEquipeItem(button) {
    if (!button || !button.matches('.cf-equipe-toggle')) return;

    const item = button.closest('.cf-equipe-item');
    if (!item) return;

    const panel = item.querySelector('.cf-equipe-panel');
    if (!panel) return;

    const open = button.getAttribute('aria-expanded') !== 'true';
    const closeOpenDisclosures = (currentItem) => {
      document.querySelectorAll('.cf-equipe-item.is-open').forEach((node) => {
        if (node !== currentItem) {
          node.classList.remove('is-open');
          const toggle = node.querySelector('.cf-equipe-toggle');
          const panelNode = node.querySelector('.cf-equipe-panel');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          if (panelNode) panelNode.setAttribute('aria-hidden', 'true');
        }
      });
    };

    closeOpenDisclosures(item);
    item.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
  }

  const profiles = {    franco: {
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
      biography: ["Presso il Palazzetto dell’hotel Hassler", "ESERCIZI EXTRAFORMATIVE", "– PERCORSI DI MENTORIZAZZIONE", "Vengono proposti cicli di incontri dedicati all’esercizio di diverse modalità di comprensione del mondo. Attraverso di essi, possiamo scoprire il nostro modo di pensare e aprirci all’incontro con le opere create.", "GUARIRE LA VIOLENZA DELLO SGUARDO SUL MONDO", "Lo svelamento dello sguardo-Dalla cecità ai nuovi occhi", "Non si tratta più di proiettare sul mondo ciò che già conosciamo – o ciò che desideriamo che la realtà circostante e le nostre relazioni siano. Desideri e conoscenze, radicati nella prospettiva abituale, lasciano il posto a uno sguardo nuovo, capace di superare condizionamenti e cecità; si giunge così a una sincera autenticità nel vedere il mondo. In un simile incontro – immersi nel mare delle infinite possibilità dell’arte – si dissolvono i pregiudizi e quel superfluo fardello che, finora, ci ha impedito di vedere con chiarezza e di lasciarci trasformare. **Noi stessi dobbiamo diventare un’opera d’arte: questa compenetrazione reciproca si compie nell’incontro creativo.** Emerge uno sguardo triplice – rivolto al mondo, a se stessi e alla trascendenza – unito in un unico processo che non può essere compreso attraverso una duplice conoscenza, un pensare razionale-teorico e il pensare empirico-sperimentale. Si tratta di un processo aperto, costantemente proteso verso una promessa che risiede tanto all’origine quanto nel futuro. Esso richiede una terza forma di conoscenza: una conoscenza mentale contemplativa (Welt-Anschauung) che permetta di tenere i due modi di pensare in tensione e alla stesso tempo vedere il tutto, sostenuta dalla capacità di interrogarsi sul senso, sullo spirito e sull’essere delle cose. **Qui, l’oggettività si raggiunge attraverso la sincerità nel processo della conoscenza, il che implica anche la disponibilità a lasciarsi, a propria volta, guardare.** Ciò richiede di creare spazio per ciò che è ancora sconosciuto e di saper stare un momento in silenzio.", "Ogni essere umano possiede l’organo per questo sguardo, sia che ne sia o non ne sia consapevole, sia che faccia uso sia che non faccia uso di questo organo. Lo sguardo non si crea così facilmente. Per questo (sguardo), richiede alcune precondizioni, prima di tutto **una certa distanza, per vedere l’interezza, poi di nuovo una coscienza di impegno, una grande accettazione del mondo, e allo stesso tempo la libertà da essa** (dal mondo), che rende possibile un sguardo nel silenzio (Anschauung), e che non mescola e non divide.", "Pontificia Università Greogoriana –", "Professoressa Dr. Yvonne zu Dohna Schlobitten", "La Welt-Anschauung (La contemplazione mentale del mondo)", "Professor presso la Facoltà di Storia e Beni Culturali della Chiesa e del Rome Catholic Studies Program e il Centro di Studi interreligiosi della Pontificia Università Gregoriana. Vincitrice per la sua opera omnia del Premio Basilicata nel 2022. Formazione internazionale e interdisciplinare in Diritto comparato, Filosofia e storia dell’arte e dei media. Phd in filosofia con una borsa di studio della Bibliotheca Hertziana/ Max Planck Gesellschaft su \"Canova e l’arte come educatore”. Specializzazione in Teologia Spirituale (Teresianum) e la filosofia della religione (Università di Fribourg). Professore ospite in Messico, Virginia e Pechino. Fondato il campo Fenomenologia dello sguardo sul tutto in Oriente e Occidente ispirata a Romano Guardini. Pilot Project con le università in China, America e Europa su “Metanoia in the Age of AI”, seguendo il progetto \"Grounding Transdisciplinariity in the Threefold Seeing”. Membro della Commissione redazionale di 'Donne, Chiesa, Mondo' (Osservatore Romano, Vaticano), Vice presidente del Centro di Formazione alla Meditazione Cristiana (CFMC), Roma, e Fondatrice dell’Intercultural School of Silence. Pubblicazione: Verso nuovi occhi. L’arte dello sguardo sul tutto (2023).", "Coesione fa. – avv.to Maria Antonietta Schettino", "presidente dell'associazione Coesione fa. avv.to esperto in diritto di famiglia ha sempre creduto nella necessità dell’obiettività delle scelte che presuppongono la separazione, ove necessaria. Spesso la soluzione giuridica (tranne rari casi) per una “sana” separazione è indicata da molteplici possibilità composite esistenti nel nostro ordinamento giuridico. L’obiettività’ nel “vedere” e la necessità nel comunicare anche attraverso l’esperienza dell’arte permette di ritrovare,** nell’emozione comune, un filo ed un legame**. La crisi allora assume il suo reale significato etimologico “**krisis**”, ossia **scelta, decisione.**", "Giornalista, scrittrice, ideatrice e responsabile scientifico dei progetti Coesione, Incoesione e Coesione fa., progetti di “accompagnamento”, (con la collaborazione di un’equipe multidisciplinare), nelle fasi fisiologiche e patologiche delle relazioni familiari ed interpersonali.", "Odi et amo;", "Dalla relazione alla responsabilità genitoriale;", "Rispetto, riconoscimento dell’altro e separazione;"]
    },
    stilisti: {
      name: 'Laboratori per Giovani stilisti',
      qualification: 'Atelier Piccoli Stilisti',
      summary: 'Maria Villirillo, fondatrice e direttrice didattica di Atelier Piccoli Stilisti.',
      biography: ["Mi chiamo Maria Villirillo, sono la fondatrice e direttrice didattica di Atelier Piccoli Stilisti, un progetto formativo e creativo nato dalla mia profonda passione per la moda, la sartoria e la pedagogia del fare. Con Atelier Piccoli Stilisti guido e coordino laboratori sartoriali, workshop e campus creativi dedicati a bambini e ragazzi dai 5 ai 16 anni, operando stabilmente nelle sedi di Roma e Milano. Il mio lavoro si focalizza sull'insegnamento dell'arte tessile a 360 gradi. Desidero condividere questo progetto coll’associazione perché Atelier Piccoli Stilisti non è soltanto una scuola di cucito per i più giovani, ma uno spazio dove la creatività incontra la manualità, l'autostima e l'espressione personale. www.atelierpiccolistilisti.com"]
    },
    biblioteca: {
      name: 'Biblioteca dei Saperi',
      qualification: 'Le storie di ieri, un patrimonio per il domani.',
      summary: 'A partire dalla primavera 2027, Coesione fa. darà vita a Biblioteca dei Saperi, un progetto dedicato all’ascolto, alla memoria e alla valorizzazione delle esperienze di vita delle persone anziane.',
      biography: [
        'A partire dalla primavera 2027, Coesione fa. darà vita a Biblioteca dei Saperi, un progetto dedicato all’ascolto, alla memoria e alla valorizzazione delle esperienze di vita delle persone anziane.',
        'La Dott.ssa Lucilla De Martinis, psicologa e psicoterapeuta, incontrerà gli anziani del quartiere presso le loro abitazioni o in spazi comuni da loro scelti, creando occasioni di dialogo e condivisione.',
        'Attraverso i racconti, i ricordi e le tappe più significative delle loro biografie, il progetto si propone di raccogliere parole, esperienze e testimonianze che custodiscono un prezioso patrimonio umano.',
        'Con il sostegno dell’Associazione e il contributo della sua Presidente, queste storie prenderanno forma in un libro-diario, pensato per conservare e tramandare un’eredità di esperienze e conoscenze alle generazioni future.',
        'Un percorso di ascolto e vicinanza, perché ogni vita ha una storia da raccontare e ogni storia può offrire nuovi spunti per il futuro.'
      ]
    },
    michele: {
      name: 'Michele Blonna',
      qualification: 'Maestro di Scacchi | Mental Coach | Formatore',
      summary: 'Oltre 25 anni di esperienza nella didattica scacchistica, nella formazione giovanile e nella progettazione scolastica e sociale.',
      biography: [
        'Presidente ASD Scuola di Scacchi Mikhail Botvinnik Roma | +39 393 438 3698 | scuoladiscacchimb@gmail.com',
        'PROFILO PROFESSIONALE Oltre 25 anni di esperienza nella didattica scacchistica, nella formazione giovanile e nella progettazione scolastica e sociale. Integra scacchi, coaching e comunicazione per sviluppare concentrazione, autocontrollo, autostima e responsabilità. Fondatore e Presidente della Scuola di Scacchi Mikhail Botvinnik dal 2017.',
        'ESPERIENZE PRINCIPALI 2017 - oggi | Fondatore e Presidente - ASD Scuola di Scacchi Mikhail Botvinnik Direzione dell’associazione, progettazione dei corsi e coordinamento delle attività formative e agonistiche. Attività con circa 1.500 bambini tra settembre 2021 e maggio 2026 presso Visconti, Villa Flaminia e IC Virgilio. 2014 - oggi | Progetti “Scacchi a Scuola” - Roma Laboratori curricolari ed extracurricolari; collaborazione con IC Visconti e percorsi educativi per bambini e ragazzi. 2018 - 2024 | Gazzetta dello Sport - Summer Camp Motivatore Tecnico per l’Autostima e Istruttore di Scacchi. 2010 - oggi | Allenatore - ASD Livigno Scacchi Allenamento periodico dei giovani allievi del circolo.',
        'QUALIFICHE E FORMAZIONE Maestro di Scacchi dal 1999; Istruttore FSI dal 2000; Istruttore UISP dal 2009; Educatore Nazionale allo Sport UISP Roma. Master in PNL (2018). Formazione Mental Coach CSEN completata con valutazione 38/40.',
        'COMPETENZE E PROGETTI SOCIALI Didattica per bambini e ragazzi; progettazione scolastica; preparazione ai tornei; coaching e motivazione; gestione di ASD. Progetti con Binario 95 e persone senza dimora, attività presso Regina Coeli e Rebibbia e collaborazioni con biblioteche del Comune di Roma.',
        'RISULTATI SPORTIVI E INCARICHI Medaglia d’argento ai Giochi Mondiali / Internazionali per non professionisti nella propria categoria (2010); Campione Regionale di categoria (2019). Consigliere del Comitato Regionale Scacchi Lazio nei periodi 1999-2001 e 2016-2020.'
      ]
    },
    rossana: {
      name: 'Dr.ssa Rossana Riolo',
      qualification: 'Psichiatra e psicoterapeuta',
      summary: 'Medica chirurga e specialista in Psichiatria, psicoterapeuta a orientamento psicodinamico.',
      biography: [
        '+39 349.3989.416 - ross.riolo@gmail.com',
        'Sono medica chirurga e specialista in Psichiatria, psicoterapeuta a orientamento psicodinamico. Mi sono laureata in Medicina e Chirurgia all\'Università di Padova nel 1990 e mi sono specializzata in Psichiatria nel 1994. Ho fatto un\'analisi personale con un analista didatta e ho proseguito la formazione con supervisioni cliniche individuali, formazione EMDR di primo livello e percorsi sui gruppi e sulle relazioni.',
        'Ho iniziato a lavorare in ambito medico tra il 1985 e il 1990 come collaboratrice presso la Divisione di Gastroenterologia dell\'Istituto di Medicina Interna di Padova, occupandomi di ricerca in ambito alcologico. Dal 1995 al 2000 sono stata dirigente medico di psichiatria presso la USL 13 di Dolo. Dal 2000 al 2020 ho lavorato presso l\'AULSS 6 Euganea, nel distretto di Camposampiero. Fino al 2020 ho svolto il coordinamento del Centro di Salute Mentale, come responsabile di struttura semplice. Dal 2009 al 2020 ho diretto un ambulatorio per la cura della depressione perinatale materna, riconosciuto come centro di riferimento regionale O.N.Da., e ho coordinato un progetto integrato con Ostetricia e Ginecologia. In quegli anni ho condotto terapie di gruppo per pazienti con gravi psicopatologie e, per alcuni anni, ho fatto parte del direttivo dell\'Asvegra di Padova. Ho collaborato con l\'Università di Bologna alla validazione del test PAPA per la depressione perinatale paterna.',
        'Dal 2020 sono dirigente medico presso l\'U.O.C. Psichiatria 1 del Dipartimento di salute mentale dell\'AULSS 8 Berica, a Vicenza. Dal 2022 dirigo l\'Ambulatorio "Genitori senza depressione", di Altissima Specializzazione per la diagnosi precoce e la cura dei disturbi affettivi perinatali materni e paterni, con funzione di coordinamento con tutte le realtà ospedaliere e territoriali che si occupano di perinatalità. Svolgo anche psicoterapia individuale e di coppia. Sono socia de Il Nodo Group e mi occupo di manutenzione delle organizzazioni, cioè della cura dei ruoli e dei gruppi di lavoro, in particolare nelle professioni d\'aiuto.',
        'Formazione, divulgazione e organizzazione: ho conseguito nel 2019 il certificato di alta formazione sul trattamento psicoterapico della depressione post natale con la prof.ssa Jeannette Milgrom, di cui sono stata anche responsabile scientifica del corso, e la formazione EMDR di primo livello. Sono Coordinatrice del Tavolo Regionale Veneto per il PPTDA Disturbi Perinatali e partecipo al Network dell\'Istituto Superiore di Sanità sulla salute mentale perinatale, dove sono stata relatrice nel 2019 e nel 2025. Sono fondatrice dell\'Associazione Kairos Donna, di cui sono stata presidente fino al 2022. L\'associazione si occupa di formazione e di sostegno alle famiglie in difficoltà emotiva nel periodo perinatale, con sportelli online e in presenza. Ho ideato e fatto parte del comitato scientifico del Festival della Maternità, a Padova nel 2018, con circa trentacinque eventi e il patrocinio del Ministero della Salute e della Regione Veneto. Svolgo da anni attività di docenza e di formazione come relatrice in corsi, seminari e convegni, e sono stata responsabile scientifica di convegni nazionali sulla psicopatologia perinatale. Ho tenuto seminari multidisciplinari con gastroenterologi, cardiologi, psichiatri e medici di base: tra questi, "Il coinvolgimento del medico di medicina generale nei disturbi del tono dell\'umore" a Vicenza nel 2023, la giornata "PSI.CRO.MED." sulla patologia psichiatrica e le cronicità a Verona nel 2024 e il corso "Dal sonno interrotto alle memorie perdute" a Creazzo nel 2026. Vigodarzere 11/11/2026'
      ]
    },
    heike: {
      name: 'Heike Hoerdemann',
      qualification: 'Naturopata | Insegnante di Yoga e Jin Shin Jyutsu',
      summary: 'Come eterna studentessa dell\'arte di conoscere sé stessi, credo profondamente che la coesione con gli altri nasca dalla connessione con noi stessi.',
      biography: [
        'Come eterna studentessa dell\'arte di conoscere sé stessi, credo profondamente che la coesione con gli altri nasca dalla connessione con noi stessi.',
        'Sono Heike, tedesca ma in Italia da 25 anni, naturopata, insegnante di diversi stili di yoga, ideatrice di Yoga & Jin Shin Jyutsu, operatrice e divulgatrice di Jin Shin Jyutsu, specializzata in longevità e benessere olistico.',
        'Attraverso pratiche di consapevolezza, auto-aiuto e riconnessione con la natura, desidero contribuire alla missione di Coesione Fa, offrendo strumenti per affrontare le difficoltà emotive, migliorare le relazioni familiari e sociali e trasformare i conflitti in opportunità di comprensione.',
        'Il mio intento è aiutare le persone a fare pace con sé stesse, per poter costruire ponti con gli altri, trasformando, dove possibile, anche i nemici in amici.'
      ]
    },
    livia: {
      name: 'Livia Serlupi Crescenzi',
      qualification: 'Consulente Familiare – Socio Effettivo AICCeF',
      summary: 'Consulente Familiare e Socio Effettivo AICCeF, accompagna persone, coppie e famiglie in momenti di cambiamento e difficoltà relazionali.',
      biography: [
        'Socio Effettivo AICCeF Tessera n. E1232 - Dottore di Ricerca in Comunicazione - Giornalista Pubblicista',
        'La mia attività professionale si focalizza sull\'accompagnamento di persone, coppie e famiglie che attraversano momenti di cambiamento, difficoltà relazionali o passaggi esistenziali significativi. In qualità di Consulente Familiare e Socio Effettivo AICCeF, opero offrendo uno spazio di ascolto che si distingue per la riservatezza e l\'accoglienza, ponendo al centro la valorizzazione delle risorse personali del cliente.',
        'Il lavoro di consulenza è orientato alla risoluzione dei problemi e al raggiungimento di obiettivi concreti, con un\'attenzione particolare verso i processi comunicativi che influenzano il benessere individuale e sistemico. Gli ambiti di intervento includono: Persona (supporto nelle difficoltà esistenziali per individuare e riattivare le risorse personali); Famiglia (aiuto nelle dinamiche relazionali); Genitorialità (supporto alle funzioni genitoriali); Coppia (mediazione e sostegno nelle fasi di crisi); Gruppo (attivazione delle proprie risorse nelle dinamiche di gruppo condotte da un CF); Adozione (gestione delle dinamiche e delle risorse specifiche); Elaborazione del lutto (accompagnamento nel superamento di perdite affettive).',
        'Nel mio lavoro integro competenze professionali, sensibilità umana ed esperienza personale, con un\'attenzione specifica ai temi dell\'adozione, della genitorialità, della coppia, dei cambiamenti familiari e dell\'elaborazione del lutto. Il mio approccio valorizza la relazione d\'aiuto come luogo di ascolto, consapevolezza e costruzione di percorsi possibili.',
        'Sono ancora impegnata con l\'università per redigere articoli di comunicazione politica con particolare riferimento alla comunicazione non verbale dei leader politici. Dopo la laurea ho conseguito un dottorato in comunicazione e ricerca sociale. Mi sono molto occupata di comunicazione e pubbliche relazioni lavorando in agenzie di pubblicità e uffici stampa per Aziende e Istituzioni Pubbliche. Sono giornalista pubblicista. Svolgo attività di volontariato.',
        'Formazione specialistica e ricerca: il percorso formativo ha coniugato l\'ambito della consulenza familiare con un solido background accademico in scienze della comunicazione e sociologia. La formazione specifica è avvenuta presso la Scuola di Formazione per Consulenti Coniugali e Familiari (SICOF) di Roma, dove ho completato il percorso triennale di studi. Durante questo iter formativo, ho approfondito tematiche complesse legate al mondo dell\'adozione, culminate nella stesura della tesi specialistica dal titolo “Universo adozione, una risorsa senza aggettivi”. Tale lavoro di ricerca è stato dedicato all\'analisi dell\'inclusione, del pregiudizio e delle potenzialità intrinseche della consulenza familiare.',
        'La ricerca accademica si è estesa anche allo studio della comunicazione non verbale, con particolare riferimento al parlato politico e al linguaggio del corpo. In questo ambito, ho approfondito lo svelamento delle emozioni profonde attraverso l\'analisi dei micromovimenti facciali, conseguendo il diploma di esperto per la codifica e decodifica delle emozioni dopo un esame finale sostenuto con il prof. Joseph C. Hager.',
        'Titoli, certificazioni e percorso accademico: Laurea presso Sapienza – Università di Roma; Dottorato di Ricerca in Scienze della Comunicazione e Sociologia presso Sapienza – Università di Roma; Frequenza del corso triennale per Consulente Familiare presso SICOF; Diploma di Consulente della Coppia e della Famiglia.',
        'Disponibilità e contatti: livia.serlupicrescenzi@aiccef.it'
      ]
    },
   
  };

  const areas = {
    medico: [
      { name: 'Avvocato' },
      { name: 'Mediatore familiare', profiles: ['rosalba'] },
      { name: 'Consulente familiare', profiles: ['livia'] },
      { name: 'Psicologo e Psicoterapeuta', profiles: ['psicologa'] },
      { name: 'Psichiatra', profiles: ['rossana'] },
      { name: 'Pedagogista', profiles: ['rosalba'] },
      { name: 'Gastroenterologo', profiles: ['franco', 'rita'] },
      { name: 'Internista / Gastroenterologo', profiles: ['zocco'] },
      { name: 'Ginecologo' },
      { name: 'Neurologo', profiles: ['bruno'] },
      { name: 'Cardiologo' },
      { name: 'Geriatra' },
      { name: 'Pediatra' }
    ],
    educativa: [
      { name: 'Maestri di scacchi', profiles: ['michele'] },
      { name: 'Arteterapeuti nelle diverse declinazioni' },
      { name: 'Pedagogisti specializzati in disegno onirico', profiles: ['rosalba'] },
      { name: 'Teatro e associazioni collegate', profiles: ['fulvia'] },
      { name: 'Arte come Mediazione', profiles: ['artemediatrice'] },
      { name: 'Laboratori per Giovani stilisti', profiles: ['stilisti'] },
      { name: 'Biblioteca dei Saperi', profiles: ['biblioteca'] },
      { name: 'Yoga & Jin Shin Jyutsu', profiles: ['heike'] }
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
      if (text === 'Professoressa Dr. Yvonne zu Dohna Schlobitten' || text === 'Coesione fa. – avv.to Maria Antonietta Schettino') {
        const heading = document.createElement('h4');
        heading.textContent = text;
        heading.style.color = 'var(--wine)';
        heading.style.fontWeight = '700';
        heading.style.marginTop = '1rem';
        profile.append(heading);
      } else {
        const paragraph = document.createElement('p');
        const parts = text.split(/(\*\*[^*]+\*\*)/g);
        parts.forEach((part) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            const span = document.createElement('span');
            span.textContent = part.slice(2, -2);
            span.style.color = '#5a1f2e';
            span.style.fontWeight = '700';
            paragraph.append(span);
          } else {
            paragraph.append(document.createTextNode(part));
          }
        });
        profile.append(paragraph);
      }
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

  function offsetScrollToTarget(target, behavior = 'smooth') {
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior });
  }

  function activateHashTarget() {
    if (!location.hash) return;
    const target = document.getElementById(location.hash.slice(1));
    if (!target || !target.matches('.cf-equipe-toggle')) return;
    const item = target.closest('.cf-equipe-item');
    const panel = item ? item.querySelector('.cf-equipe-panel') : null;
    closeOpenDisclosures(item);
    if (item) item.classList.add('is-open');
    target.setAttribute('aria-expanded', 'true');
    if (panel) panel.setAttribute('aria-hidden', 'false');
    offsetScrollToTarget(target);
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

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#equipe-"]');
    if (!link) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target || !target.matches('.cf-equipe-toggle')) return;
    event.preventDefault();
    closeOpenDisclosures(target.closest('.cf-equipe-item'));
    const item = target.closest('.cf-equipe-item');
    const panel = item ? item.querySelector('.cf-equipe-panel') : null;
    if (item) item.classList.add('is-open');
    target.setAttribute('aria-expanded', 'true');
    if (panel) panel.setAttribute('aria-hidden', 'false');
    offsetScrollToTarget(target);
  });

  activateHashTarget();
  window.addEventListener('hashchange', activateHashTarget);
})();
