// Wedding date: 27 June 2026, 00:00 local time
const WEDDING_DATE = new Date('2026-06-27T00:00:00');

const TRANSLATIONS = {
  en: {
    invite:   'You are invited to the wedding of',
    and:      'and',
    counting: 'Counting the days',
    days:     'Days',
    hours:    'Hours',
    minutes:  'Minutes',
    seconds:  'Seconds',
    photo:    'Our photo coming soon',
    where:    'Where to find us',
    address:  '\u0443\u043b. \u0428\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f 14, \u0411\u0440\u0435\u0441\u0442, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c',
    footer:   '27 June 2026 \u00a0\u00b7\u00a0 Brest, Belarus',
    done:     'Today is the day! \u2661',
  },
  ru: {
    invite:   '\u0412\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u044b \u043d\u0430 \u0441\u0432\u0430\u0434\u044c\u0431\u0443',
    and:      '\u0438',
    counting: '\u0414\u043e \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
    days:     '\u0414\u043d\u0435\u0439',
    hours:    '\u0427\u0430\u0441\u043e\u0432',
    minutes:  '\u041c\u0438\u043d\u0443\u0442',
    seconds:  '\u0421\u0435\u043a\u0443\u043d\u0434',
    photo:    '\u041d\u0430\u0448\u0435 \u0444\u043e\u0442\u043e \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f',
    where:    '\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f',
    address:  '\u0443\u043b. \u0428\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f 14, \u0411\u0440\u0435\u0441\u0442, \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c',
    footer:   '27 \u0438\u044e\u043d\u044f 2026 \u00a0\u00b7\u00a0 \u0411\u0440\u0435\u0441\u0442, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c',
    done:     '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c! \u2661',
  },
};

let currentLang = 'en';

function applyLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.getElementById('lang-btn').textContent = lang === 'en' ? 'RU' : 'EN';
}

function toggleLang() {
  applyLang(currentLang === 'en' ? 'ru' : 'en');
}

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      `<p style="font-family:var(--font-serif);font-size:2rem;color:var(--rose);font-style:italic">${TRANSLATIONS[currentLang].done}</p>`;
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent    = pad(days);
  document.getElementById('cd-hours').textContent   = pad(hours);
  document.getElementById('cd-minutes').textContent = pad(minutes);
  document.getElementById('cd-seconds').textContent = pad(seconds);
}

tick();
setInterval(tick, 1000);
