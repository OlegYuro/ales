// Wedding date: 27 June 2026, 00:00 local time
const WEDDING_DATE = new Date('2026-06-27T00:00:00');

const TRANSLATIONS = {
  en: {
    invite:        'You are invited to the wedding of',
    counting:      'Counting the days',
    days:          'Days',
    hours:         'Hours',
    minutes:       'Minutes',
    seconds:       'Seconds',
    photo:         'Our photo coming soon',
    where:         'Where to find us',
    address:       'ul. Shosseinaya 14, Brest, Belarus',
    footer:        '27 June 2026 \u00a0\u00b7\u00a0 Brest, Belarus',
    done:          'Today is the day! \u2661',
    survey_title:  'Guest Survey \ud83d\udc8c',
    survey_sub:    'A few important questions',
    survey_q1:     'Your name',
    survey_q1_ph:  'How shall we address you?',
    survey_q2:     'Will you attend our celebration?',
    survey_a2_1:   'Absolutely! \ud83c\udf89',
    survey_a2_2:   'Unfortunately, no \ud83d\ude22',
    survey_a2_3:   'Still thinking... \ud83e\udd14',
    survey_q3:     'How much will you gift us? \ud83d\udcb8',
    survey_a3_1:   'Modest but tasteful \ud83d\udc9d',
    survey_a3_2:   'Everything in my wallet \ud83d\udcb0',
    survey_a3_3:   'Breaking my piggy bank \ud83d\udc37',
    survey_a3_4:   'Selling a kidney for you \ud83e\udec1',
    survey_submit: 'Send my answers',
    survey_thanks: 'Thank you! See you June 27! \ud83d\udc95',
  },
  ru: {
    invite:        '\u0412\u044b \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u044b \u043d\u0430 \u0441\u0432\u0430\u0434\u044c\u0431\u0443',
    counting:      '\u0414\u043e \u0441\u0432\u0430\u0434\u044c\u0431\u044b \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
    days:          '\u0414\u043d\u0435\u0439',
    hours:         '\u0427\u0430\u0441\u043e\u0432',
    minutes:       '\u041c\u0438\u043d\u0443\u0442',
    seconds:       '\u0421\u0435\u043a\u0443\u043d\u0434',
    photo:         '\u041d\u0430\u0448\u0435 \u0444\u043e\u0442\u043e \u0441\u043a\u043e\u0440\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f',
    where:         '\u041c\u0435\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f',
    address:       '\u0443\u043b. \u0428\u043e\u0441\u0441\u0435\u0439\u043d\u0430\u044f 14, \u0411\u0440\u0435\u0441\u0442, \u0411\u0440\u0435\u0441\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c',
    footer:        '27 \u0438\u044e\u043d\u044f 2026 \u00a0\u00b7\u00a0 \u0411\u0440\u0435\u0441\u0442, \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c',
    done:          '\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u044d\u0442\u043e\u0442 \u0434\u0435\u043d\u044c! \u2661',
    survey_title:  '\u0410\u043d\u043a\u0435\u0442\u0430 \u0433\u043e\u0441\u0442\u044f \ud83d\udc8c',
    survey_sub:    '\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u0436\u043d\u044b\u0445 \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432',
    survey_q1:     '\u0412\u0430\u0448\u0435 \u0438\u043c\u044f',
    survey_q1_ph:  '\u041a\u0430\u043a \u0432\u0430\u0441 \u0432\u0435\u043b\u0438\u0447\u0430\u0442\u044c?',
    survey_q2:     '\u0412\u044b \u043f\u0440\u0438\u0434\u0451\u0442\u0435 \u043d\u0430 \u043d\u0430\u0448 \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a?',
    survey_a2_1:   '\u041a\u043e\u043d\u0435\u0447\u043d\u043e \u0431\u0443\u0434\u0443! \ud83c\udf89',
    survey_a2_2:   '\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u0435\u0442 \ud83d\ude22',
    survey_a2_3:   '\u0415\u0449\u0451 \u0434\u0443\u043c\u0430\u044e... \ud83e\udd14',
    survey_q3:     '\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u043d\u0435\u0433 \u0432\u044b \u043d\u0430\u043c \u043f\u043e\u0434\u0430\u0440\u0438\u0442\u0435? \ud83d\udcb8',
    survey_a3_1:   '\u0421\u043a\u0440\u043e\u043c\u043d\u043e, \u043d\u043e \u0441\u043e \u0432\u043a\u0443\u0441\u043e\u043c \ud83d\udc9d',
    survey_a3_2:   '\u0412\u0441\u0451 \u0447\u0442\u043e \u0435\u0441\u0442\u044c \u0432 \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0435 \ud83d\udcb0',
    survey_a3_3:   '\u0421\u043b\u043e\u043c\u0430\u044e \u043a\u043e\u043f\u0438\u043b\u043a\u0443 \ud83d\udc37',
    survey_a3_4:   '\u041f\u0440\u043e\u0434\u0430\u043c \u043f\u043e\u0447\u043a\u0443 \u0440\u0430\u0434\u0438 \u0432\u0430\u0441 \ud83e\udec1',
    survey_submit: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442\u044b',
    survey_thanks: '\u0421\u043f\u0430\u0441\u0438\u0431\u043e! \u0416\u0434\u0451\u043c \u0432\u0430\u0441 27 \u0438\u044e\u043d\u044f! \ud83d\udc95',
  },
};

let currentLang = 'ru';

function applyLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
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

// ── Music ─────────────────────────────────────────────────
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let musicPlaying = false;

function setMusicState(playing) {
  musicPlaying = playing;
  musicBtn.textContent = playing ? '♫' : '♪';
  musicBtn.classList.toggle('music-btn--playing', playing);
}

function toggleMusic() {
  if (musicPlaying) {
    music.pause();
    setMusicState(false);
  } else {
    music.play().then(() => setMusicState(true)).catch(() => setMusicState(false));
  }
}

// Attempt autoplay on load; browsers may block it — button stays in paused state if so
window.addEventListener('load', () => {
  music.play()
    .then(() => setMusicState(true))
    .catch(() => setMusicState(false));
});

// ── Survey ────────────────────────────────────────────────
function submitSurvey(e) {
  e.preventDefault();
  document.getElementById('survey-form').style.display = 'none';
  const thanks = document.getElementById('survey-thanks');
  thanks.classList.add('survey-thanks--visible');
}

// ── Init ──────────────────────────────────────────────────
applyLang('ru');
