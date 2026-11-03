// Prunus Games — textes FR / EN, thème clair / sombre, apparition au défilement.
export const DICT = {
  fr: {
    skip: 'Aller aux jeux',
    eyebrow: 'prunus.dev · jeux',
    heroTitle: 'Six jeux, <em>aucune installation.</em>',
    heroLead: 'Des jeux à lancer directement dans le navigateur, sur téléphone comme sur ordinateur : contre l\'ordinateur, à deux sur le même écran ou en ligne avec classement. Pas de compte, pas de pub.',
    factGames: 'jeux à essayer',
    factAccounts: 'compte à créer',
    factLang: 'au choix',
    factBrowser: 'dans le navigateur',
    ctaPlay: 'Choisir un jeu',
    gamesTitle: 'Les jeux',
    badgeNew: 'Nouveau',
    play: 'Jouer',
    code: 'Code source',
    cliffKind: 'Réflexion · petits marcheurs',
    cliffText: 'Une file de petits marcheurs avance droit vers le vide. Vous ne pouvez pas les arrêter, seulement leur donner les bons talents : grimper, creuser, bâtir un pont, faire barrage… Huit niveaux, au doigt ou à la souris, et ça marche même hors ligne.',
    knockKind: 'Mémoire · portes en tout genre',
    knockText: 'Retrouvez les paires derrière des portes qui ne se ressemblent pas : placard, garage, coffre, cercueil… Gagnez de l\'argent, mais méfiez-vous du Bandit qui vole tout ; le Détective vous protège. Campagne solo, contre l\'ordinateur, à deux sur le même écran ou en ligne.',
    blockKind: 'Puzzle · blocs qui tombent',
    blockText: 'Empilez les pièces, effacez des lignes et, en duel, envoyez-les à votre adversaire. En solo, le niveau monte avec vos lignes ; contre l\'ordinateur, il joue touche par touche à trois niveaux ; en ligne, un classement Elo vous attend.',
    hillKind: 'Duel d\'artillerie · tour par tour',
    hillText: 'Deux châteaux, une colline qui change à chaque manche, un vent que seul le drapeau rouge trahit. Réglez l\'angle et la poudre, tirez, puis lisez la trace de votre obus pour corriger. Inspiré d\'un shareware Macintosh de 1989, habillage Système 7 compris.',
    gloopKind: 'Volley · deux gloops, un filet',
    gloopText: 'Le volley des gloops : deux demi-disques, un filet, un ballon, et le premier à sept points gagne. Contre l\'ordinateur, à deux sur le même écran ou en ligne contre un autre joueur.',
    chickenKind: 'Arcade · lancer de poules',
    chickenText: 'Une recréation du Poulaga Challenge : lancez votre poule le long du couloir et rattrapez celle de l\'adversaire. Chaque lancer est vérifié pour que la partie reste honnête.',
    tagSolo: 'Solo',
    tagDuel: 'Duel : lignes envoyées',
    tagTurn: 'Tour par tour',
    tagWind: 'Vent et colline aléatoires',
    tagAi: 'Contre l\'ordinateur',
    tagAi3: 'IA, 3 niveaux',
    tagLocal: '2 joueurs, même écran',
    tagOnline: 'En ligne · classement Elo',
    tagFirst: 'Premier à 7 points',
    tagTouch: 'Clavier et tactile',
    tagArcade: 'Lancers et captures',
    tagAnti: 'Anti-triche',
    madeBy: 'Fait par Prunus',
    license: 'Licence MIT',
    pageSource: 'Code de cette page',
  },
  en: {
    skip: 'Skip to the games',
    eyebrow: 'prunus.dev · games',
    heroTitle: 'Six games, <em>nothing to install.</em>',
    heroLead: 'Games you launch straight from the browser, on a phone or on a computer: against the computer, two on the same screen, or online with a leaderboard. No account, no ads.',
    factGames: 'games to try',
    factAccounts: 'account to create',
    factLang: 'your choice',
    factBrowser: 'in the browser',
    ctaPlay: 'Pick a game',
    gamesTitle: 'The games',
    badgeNew: 'New',
    play: 'Play',
    code: 'Source code',
    cliffKind: 'Puzzle · little walkers',
    cliffText: 'A line of little walkers marches straight toward the void. You cannot stop them, only give them the right skills: climb, dig, build a bridge, block the way… Eight levels, by finger or mouse, and it even works offline.',
    knockKind: 'Memory · doors of every kind',
    knockText: 'Find the pairs behind doors that look nothing alike: cupboard, garage, safe, coffin… Earn money, but beware of the Bandit who steals it all; the Detective protects you. Solo campaign, against the computer, two on one screen or online.',
    blockKind: 'Puzzle · falling blocks',
    blockText: 'Stack the pieces, clear lines and, in a duel, send them to your opponent. Solo, the level rises with your lines; against the computer it plays key by key at three levels; online, an Elo leaderboard awaits.',
    hillKind: 'Artillery duel · turn-based',
    hillText: 'Two castles, a hill that changes every round, and a wind that only the red flag gives away. Set the angle and the powder, fire, then read the trace of your shell to correct. Inspired by a 1989 Macintosh shareware, System 7 look included.',
    gloopKind: 'Volleyball · two gloops, one net',
    gloopText: 'Volleyball for gloops: two half-discs, a net, a ball, first to seven points wins. Against the computer, two on the same screen, or online against another player.',
    chickenKind: 'Arcade · chicken throwing',
    chickenText: 'A recreation of the Poulaga Challenge: throw your chicken down the corridor and catch your opponent\'s. Every throw is checked so the game stays fair.',
    tagSolo: 'Solo',
    tagDuel: 'Duel: lines sent to your opponent',
    tagTurn: 'Turn-based',
    tagWind: 'Random hill and wind',
    tagAi: 'Against the computer',
    tagAi3: 'AI, 3 levels',
    tagLocal: '2 players, same screen',
    tagOnline: 'Online · Elo leaderboard',
    tagFirst: 'First to 7 points',
    tagTouch: 'Keyboard and touch',
    tagArcade: 'Throws and catches',
    tagAnti: 'Anti-cheat',
    madeBy: 'Made by Prunus',
    license: 'MIT license',
    pageSource: 'Source of this page',
  },
};

const THEME_ICONS = {
  dark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.4 14.5A8.5 8.5 0 0 1 9.5 3.6 8.5 8.5 0 1 0 20.4 14.5z"/></svg>',
  light: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="currentColor"/><path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>',
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignoré */ } },
};

let lang = 'fr';
export const t = (key) => DICT[lang]?.[key] ?? DICT.en[key] ?? key;

function applyLang(l) {
  if (!DICT[l]) return;
  lang = l;
  store.set('games.lang', l);
  document.documentElement.lang = l;
  for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = t(el.dataset.i18n);
  for (const el of document.querySelectorAll('[data-i18n-html]')) el.innerHTML = t(el.dataset.i18nHtml);
  document.querySelector('#lang').textContent = l.toUpperCase();
}

function currentTheme() {
  const set = document.documentElement.dataset.theme;
  if (set) return set;
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  store.set('games.theme', theme);
  // l'icône montre le thème vers lequel on bascule
  document.querySelector('#theme [data-icon]').innerHTML = THEME_ICONS[theme === 'dark' ? 'light' : 'dark'];
  document.querySelector('meta[name=theme-color]').content = theme === 'dark' ? '#0d1424' : '#f4f6fb';
}

if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js');
  const saved = store.get('games.lang');
  applyLang(saved && DICT[saved] ? saved : (navigator.language || 'fr').toLowerCase().startsWith('fr') ? 'fr' : 'en');
  const savedTheme = store.get('games.theme');
  if (savedTheme === 'light' || savedTheme === 'dark') document.documentElement.dataset.theme = savedTheme;
  applyTheme(currentTheme());
  document.querySelector('#lang').addEventListener('click', () => applyLang(lang === 'fr' ? 'en' : 'fr'));
  document.querySelector('#theme').addEventListener('click', () => applyTheme(currentTheme() === 'dark' ? 'light' : 'dark'));

  const items = document.querySelectorAll('.card, .hero-text > *, .hero-art');
  items.forEach((el) => el.classList.add('reveal'));
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { threshold: 0.12 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add('in'));
  }
}
