// Prunus Games — textes FR / EN, thème clair / sombre, apparition au défilement.
export const DICT = {
  fr: {
    skip: 'Aller aux jeux',
    eyebrow: 'prunus.dev · jeux',
    heroTitle: 'Des petits jeux, <em>un vrai serveur.</em>',
    heroLead: 'Trois jeux à jouer dans le navigateur : contre l\'ordinateur, à deux sur le même écran ou en ligne avec classement. JavaScript côté client, PHP 8.5 côté serveur, sans framework et sans compte.',
    factGames: 'jeux en ligne',
    factAccounts: 'compte à créer',
    factTick: 'serveur autoritaire',
    factPhp: 'côté serveur',
    ctaPlay: 'Choisir un jeu',
    gamesTitle: 'Les jeux',
    badgeNew: 'Nouveau',
    play: 'Jouer',
    code: 'Code source',
    hillKind: 'Duel d\'artillerie · tour par tour',
    hillText: 'Deux châteaux, une colline qui change à chaque manche, un vent que seul le drapeau rouge trahit. Réglez l\'angle et la poudre, tirez, puis lisez la trace de votre obus pour corriger. Inspiré du shareware Macintosh de 1989, habillage Système 7 compris.',
    gloopKind: 'Volley · 60 images par seconde',
    gloopText: 'Le volley des gloops : deux demi-disques, un filet, un ballon, et le premier à sept points gagne. En ligne, le serveur fait tourner la partie à 60 Hz et les navigateurs n\'envoient que leurs touches.',
    chickenKind: 'Arcade · lancer de poules',
    chickenText: 'Une recréation du Poulaga Challenge : lancez votre poule le long du couloir et rattrapez celle de l\'adversaire. Le serveur arbitre chaque lancer et chaque capture pour que la partie reste honnête.',
    tagTurn: 'Tour par tour',
    tagWind: 'Vent et colline aléatoires',
    tagAi: 'Contre l\'ordinateur',
    tagAi3: 'IA, 3 niveaux',
    tagLocal: '2 joueurs, même écran',
    tagOnline: 'En ligne · classement Elo',
    tagReal: 'Physique à 60 Hz',
    tagTouch: 'Clavier et tactile',
    tagArcade: 'Lancers et captures',
    tagAnti: 'Anti-triche côté serveur',
    underTitle: 'Sous le capot',
    underLead: 'Les trois jeux partagent le même socle : un serveur WebSocket écrit à la main en PHP pur, qui arbitre les parties et tient le classement.',
    flowBrowser: 'Navigateur',
    flowServer: 'Serveur de jeu',
    flowRanking: 'Classement',
    flowRankingSub: 'Elo · fichier JSON atomique',
    p1Title: 'Un serveur arbitre',
    p1Text: 'Un client ne peut envoyer ni score, ni position, ni trajectoire : seulement ses touches ou son réglage de tir.',
    p2Title: 'Un moteur, deux langages',
    p2Text: 'Les règles existent en JavaScript et en PHP ; des parties enregistrées vérifient que les deux donnent exactement les mêmes résultats.',
    p3Title: 'Aucun compte',
    p3Text: 'L\'identité est un jeton secret gardé par le navigateur, dont le serveur ne conserve que l\'empreinte. Le classement Elo freine la collusion.',
    p4Title: 'Un socle partagé',
    p4Text: 'Le serveur WebSocket et ses utilitaires vivent dans un paquet Composer commun, testé une fois et réutilisé par chaque jeu.',
    madeBy: 'Fait par Prunus',
    license: 'Licence MIT',
    pageSource: 'Code de cette page',
  },
  en: {
    skip: 'Skip to the games',
    eyebrow: 'prunus.dev · games',
    heroTitle: 'Small games, <em>one real server.</em>',
    heroLead: 'Three games you play in the browser: against the computer, two on the same screen, or online with a leaderboard. JavaScript on the client, PHP 8.5 on the server, no framework and no account.',
    factGames: 'games online',
    factAccounts: 'account to create',
    factTick: 'authoritative server',
    factPhp: 'on the server',
    ctaPlay: 'Pick a game',
    gamesTitle: 'The games',
    badgeNew: 'New',
    play: 'Play',
    code: 'Source code',
    hillKind: 'Artillery duel · turn-based',
    hillText: 'Two castles, a hill that changes every round, and a wind that only the red flag gives away. Set the angle and the powder, fire, then read the trace of your shell to correct. Inspired by the 1989 Macintosh shareware, System 7 look included.',
    gloopKind: 'Volleyball · 60 frames per second',
    gloopText: 'Volleyball for gloops: two half-discs, a net, a ball, first to seven points wins. Online, the server runs the match at 60 Hz and the browsers only send their keys.',
    chickenKind: 'Arcade · chicken throwing',
    chickenText: 'A recreation of the Poulaga Challenge: throw your chicken down the corridor and catch your opponent\'s. The server referees every throw and every catch to keep the game honest.',
    tagTurn: 'Turn-based',
    tagWind: 'Random hill and wind',
    tagAi: 'Against the computer',
    tagAi3: 'AI, 3 levels',
    tagLocal: '2 players, same screen',
    tagOnline: 'Online · Elo leaderboard',
    tagReal: '60 Hz physics',
    tagTouch: 'Keyboard and touch',
    tagArcade: 'Throws and catches',
    tagAnti: 'Server-side anti-cheat',
    underTitle: 'Under the hood',
    underLead: 'All three games share the same foundation: a WebSocket server written by hand in plain PHP, which referees the matches and keeps the leaderboard.',
    flowBrowser: 'Browser',
    flowServer: 'Game server',
    flowRanking: 'Leaderboard',
    flowRankingSub: 'Elo · atomic JSON file',
    p1Title: 'A refereeing server',
    p1Text: 'A client cannot send a score, a position or a trajectory: only its keys or its shot settings.',
    p2Title: 'One engine, two languages',
    p2Text: 'The rules exist in JavaScript and in PHP; recorded matches check that both give exactly the same results.',
    p3Title: 'No account',
    p3Text: 'Identity is a secret token kept by the browser, of which the server only stores the hash. The Elo ranking slows collusion down.',
    p4Title: 'A shared foundation',
    p4Text: 'The WebSocket server and its helpers live in a common Composer package, tested once and reused by every game.',
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

  const items = document.querySelectorAll('.card, .pillars article, .node, .hero-text > *, .hero-art');
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
