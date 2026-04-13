// Wedding date: 27 June 2026, 12:30 local time
const WEDDING_DATE = new Date('2026-06-27T12:30:00');

// ── Countdown ─────────────────────────────────────────────
function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    const cd = document.getElementById('countdown');
    if (cd) cd.innerHTML = '<p style="font-family:var(--font-serif);font-size:2rem;font-style:italic;color:var(--dark)">Сегодня этот день! ♡</p>';
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
const music    = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let musicPlaying = false;

function setMusicState(playing) {
  musicPlaying = playing;
  const icon = playing ? '♫' : '♪';
  if (musicBtn) {
    musicBtn.textContent = icon;
    musicBtn.classList.toggle('music-btn--playing', playing);
  }
}

function toggleMusic() {
  if (musicPlaying) {
    music.pause();
    setMusicState(false);
  } else {
    music.play().then(() => setMusicState(true)).catch(() => setMusicState(false));
  }
}

// ── Splash ───────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  const splash   = document.getElementById('splash');
  const enterBtn = document.getElementById('splash-enter');

  enterBtn.addEventListener('click', () => {
    splash.classList.add('splash--hidden');
    splash.addEventListener('transitionend', () => splash.remove(), { once: true });
    if (musicBtn) musicBtn.classList.add('visible');
    // Start music on enter
    music.play().then(() => setMusicState(true)).catch(() => setMusicState(false));
  });
});

// ── Map toggle ────────────────────────────────────────────
function toggleMap() {
  const container = document.getElementById('map-container');
  const btn       = document.getElementById('map-toggle-btn');
  if (!container) return;
  const open = container.classList.toggle('open');
  btn.textContent = open ? 'Скрыть карту' : 'Открыть карту';
}

// ── Survey ────────────────────────────────────────────────
function submitSurvey(e) {
  e.preventDefault();
  const form = document.getElementById('survey-form');
  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(res => {
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('survey-thanks').classList.add('survey-thanks--visible');
    } else {
      return res.json().then(d => { throw new Error(d.error || 'Ошибка отправки'); });
    }
  })
  .catch(err => {
    alert('Не удалось отправить анкету. Попробуйте ещё раз.\n' + err.message);
  });
}

// ── Scroll reveal ─────────────────────────────────────────
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();

