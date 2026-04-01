// Wedding date: 28 July 2026, 00:00 local time
const WEDDING_DATE = new Date('2026-07-28T00:00:00');

function pad(n) {
  return String(n).padStart(2, '0');
}

function tick() {
  const now  = new Date();
  const diff = WEDDING_DATE - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML =
      '<p style="font-family:var(--font-serif);font-size:2rem;color:var(--rose);font-style:italic">Today is the day! ♡</p>';
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
