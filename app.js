/* ==========================================
   EKREM USTA — instax / photo-dump theme
   ========================================== */

/* ---------- PHOTOS ----------
   To add a photo: drop it in assets/photos/ and add a line here.
   tr / en are not shown on the page; they describe the photo for screen readers.
   shape: "mini" (portrait) or "wide" (landscape)
   tape:  "top" | "corner" | "corner-r" | ""   tint: "" | "blue" | "pink"
*/
const PHOTOS = [
  { src: 'eiffel',        shape: 'mini', tr: 'paris, klasik',            en: 'paris, obviously', tape: 'top' },
  { src: 'sakura-up',     shape: 'mini', tr: 'yukarı bak',               en: 'look up', tape: 'corner', tint: 'pink' },
  { src: 'night-street',  shape: 'mini', tr: 'gece, neon',               en: 'night, neon' },
  { src: 'seagull',       shape: 'mini', tr: 'poz veren martı',          en: 'a seagull who knew', tape: 'top', tint: 'blue' },
  { src: 'campus',        shape: 'wide', tr: 'kampüs, yaz',              en: 'campus, summer' },
  { src: 'river-lean',    shape: 'mini', tr: 'düşmedim, merak etme',     en: "didn't fall, don't worry", tape: 'corner-r' },
  { src: 'lights',        shape: 'mini', tr: 'ışıklar suda',             en: 'lights on water' },
  { src: 'cafe-mirror',   shape: 'mini', tr: 'kahve + kamera',           en: 'coffee + camera' },
  { src: 'big-ben',       shape: 'wide', tr: 'big ben, akşamüstü',       en: 'big ben, late afternoon', tape: 'corner' },
  { src: 'red-gate',      shape: 'mini', tr: 'kırmızı tavanlar',         en: 'red ceilings' },
  { src: 'sunset-canal',  shape: 'mini', tr: 'altın saat',               en: 'golden hour', tape: 'top' },
  { src: 'note',          shape: 'mini', tr: 'saklanacak şeyler',        en: 'things worth keeping' },
  { src: 'wings',         shape: 'mini', tr: 'bugün kanatlarım var',     en: 'wings today', tape: 'corner-r', tint: 'blue' },
  { src: 'tracks',        shape: 'mini', tr: 'sıradaki tren',            en: 'next train' },
  { src: 'cap-smile',     shape: 'wide', tr: 'tam o an',                 en: 'right then', tape: 'top' },
  { src: 'louvre',        shape: 'mini', tr: 'piramit önünde',           en: 'pyramid pose' },
  { src: 'ribbons',       shape: 'mini', tr: 'dilek kurdeleleri',        en: 'wishing ribbons', tape: 'corner' },
  { src: 'bus',           shape: 'mini', tr: 'eve dönüş yolu',           en: 'the ride home' },
  { src: 'pond',          shape: 'wide', tr: 'sakin bir öğleden sonra',  en: 'a quiet afternoon', tape: 'top', tint: 'blue' },
  { src: 'london-eye',    shape: 'mini', tr: 'london, rüzgarlı',         en: 'london, windy' },
  { src: 'sakura-selfie', shape: 'mini', tr: 'sakura mevsimi',           en: 'sakura season', tape: 'corner-r', tint: 'pink' },
  { src: 'canal',         shape: 'mini', tr: 'kanal kenarı',             en: 'by the canal' },
  { src: 'night-selfie',  shape: 'mini', tr: 'gece yarısı manzarası',    en: 'midnight view', tape: 'top' },
  { src: 'ducks',         shape: 'mini', tr: 'iki ördek, bir göl',       en: 'two ducks, one lake' },
];

/* ---------- NOTES (blog) ---------- */
const POSTS = [
  {
    cat: { tr: 'DİL', en: 'LANGUAGE' },
    date: { tr: 'Mart 2024', en: 'March 2024' }, read: { tr: '6 dk', en: '6 min' },
    title: {
      tr: 'Dil Öğrenmenin Psikolojisi: Neden Bazıları Daha Hızlı Öğreniyor?',
      en: 'The Psychology of Language Learning: Why Do Some Learn Faster?',
    },
    excerpt: {
      tr: 'Dil edinim sürecinde motivasyonun, kişilik tipinin ve öğrenme ortamının kritik rolüne dair düşünceler.',
      en: 'Thoughts on the critical role of motivation, personality, and environment in the language acquisition process.',
    },
    body: {
      tr: `<p>Dil öğrenmek, salt dilbilgisi kuralları ve kelime ezberleme meselesinden çok daha derin bir süreç. Peki neden bazı insanlar bir dili aylar içinde öğrenirken, diğerleri yıllarca aynı noktada kalıyor?</p>
        <h3>Motivasyon Türleri Belirleyici</h3>
        <p>Stephen Krashen'in edinim teorisine göre, insanlar dili en kalıcı biçimde <em>anlamlı</em> bağlamlarda kullandıklarında edinirler. "Entegratif motivasyon" ile "enstrümental motivasyon" arasındaki fark, uzun vadeli başarıyı doğrudan etkiliyor.</p>
        <h3>Ortamın Gücü</h3>
        <p>Değişim programım boyunca fark ettim ki, bir dili o dilin konuşulduğu ortamda öğrenmek sınıf içi öğrenimden çok daha hızlı sonuç veriyor. Sonuç olarak: hız, zekâdan değil, tutarlılık ve ortamdan kaynaklanıyor.</p>`,
      en: `<p>Language learning is a process far deeper than grammar rules and vocabulary. So why do some people reach fluency in months, while others stay at the same point for years?</p>
        <h3>Motivation Type is Key</h3>
        <p>According to Stephen Krashen's acquisition theory, people learn language most permanently in <em>meaningful</em> contexts. The difference between integrative and instrumental motivation directly affects long-term success.</p>
        <h3>The Power of Environment</h3>
        <p>During my exchange program, I realised that learning in the environment where the language is spoken yields much faster results than classroom study. In short: speed comes not from intelligence, but from consistency and environment.</p>`,
    },
  },
  {
    cat: { tr: 'HAYAT', en: 'LIFE' },
    date: { tr: 'Şubat 2024', en: 'February 2024' }, read: { tr: '4 dk', en: '4 min' },
    title: {
      tr: 'Analog Fotoğrafçılığa Dönüş: Yavaşlamanın Sanatı',
      en: 'Back to Analog Photography: The Art of Slowing Down',
    },
    excerpt: {
      tr: 'Dijital çağda analog film çekmenin bana öğrettikleri ve her karede saklanan dikkat üzerine.',
      en: 'What shooting analog film in the digital age has taught me, and the intentionality hidden in every frame.',
    },
    body: {
      tr: `<p>Bir rulo filmde sadece 36 kare var. Bu kısıtlama başta saçma geldi. Ama tam da o kısıtlama, analog fotoğrafçılığın en büyük dersi oldu.</p>
        <h3>Her Kare Sayar</h3>
        <p>Dijital çekerken onlarca fotoğraf çekiyor, sonra hepsini siliyordum. Analog'da ise her basışta bir şeyi tüketiyorsunuz. Bu sizi daha dikkatli yapıyor.</p>
        <h3>Yavaşlamak Bir Seçim</h3>
        <p>Analog fotoğrafçılık bana yavaşlamayı, bir anı gerçekten yaşamayı öğretti. Belki de en hızlı hayatları olanlar, en çok yavaşlamaya ihtiyaç duyanlardır.</p>`,
      en: `<p>A roll of film has only 36 frames. That constraint seemed absurd at first. But it turned out to be the greatest lesson analog photography teaches.</p>
        <h3>Every Frame Counts</h3>
        <p>When shooting digital, I'd fire off dozens of shots and delete them all. With analog, each press consumes something. It makes you more deliberate, more present.</p>
        <h3>Slowing Down is a Choice</h3>
        <p>Analog photography taught me to slow down and truly live a moment before recording it. Perhaps those with the fastest lives are the ones who most need to slow down.</p>`,
    },
  },
];

/* ---------- ENGLISH STRINGS ----------
   Turkish lives in index.html itself; these replace it when EN is picked. */
const EN = {
  'nav.photos': 'Photos', 'nav.about': 'About', 'nav.notes': 'Notes', 'nav.contact': 'Contact',
  'hero.alt': 'Ekrem taking a mirror photo with his camera',
  'hero.hi': "Hi, I'm",
  'hero.sub': "I study English Language Teaching at Boğaziçi. I build bridges between words, cultures and ideas, and take pictures of pretty much everything I see.",
  'hero.scroll': 'see the frames',
  'photos.tag': 'photo dump', 'photos.title': 'Bits of my life', 'photos.hint': '↙ tap one to make it bigger',
  'about.tag': 'me, briefly', 'about.title': 'About me',
  'about.kidAlt': 'Young Ekrem holding a big Nikon camera', 'about.kidNote': 'where it all started ↑',
  'about.p1': "Hi! I'm Ekrem. I study English Language Teaching at Boğaziçi University, and I spent fall 2025 as an exchange student at the University of Alberta. I love building bridges between words, cultures and ideas; I speak Turkish and English, plus a little Spanish and Laz.",
  'about.p2': "I rarely go anywhere without a camera. Analog or digital, I bring a few frames back from everywhere. This page is part those frames, part me.",
  'about.likes': 'things I love:', 'about.likesList': 'learning languages · travel · cinema · analog photography · social responsibility projects',
  'about.cv': 'Download my CV (PDF) →',
  'about.edu': 'school tickets', 'ticket.from': 'DEPARTURE', 'ticket.exchange': 'EXCHANGE', 'ticket.date': 'DATE',
  'e1.role': 'English Language Teaching', 'e1.date': '2021 → present',
  'e2.role': 'Exchange program · Edmonton, Canada', 'e2.date': 'Fall 2025',
  'about.work': 'things I’ve done',
  'w1.date': 'JUL — DEC 2024', 'w1.role': 'Cinema staff · volunteer',
  'w1.d': 'Box office, ticket checks, getting the hall ready and starting and ending the screenings. Daily sales reports too.',
  'w2.date': 'JUL — AUG 2023', 'w2.org': 'BU Summer School', 'w2.role': 'Instructor & coach · volunteer',
  'w2.d': 'Taught English to students and mentored them along the way.',
  'p2.tag': 'ZOOM · 2 HRS A WEEK', 'p2.t': 'English Coaching', 'badge.vol': 'volunteer',
  'p2.d': 'One-on-one English lessons for students struggling to keep up with school after the earthquake.',
  'p1.tag': 'CAMPUS', 'p1.t': 'BU Animal Habitat',
  'p1.d': 'Helping care for and keep records of the campus animals; lots of fur, lots of teamwork.',
  'about.langs': 'passport stamps', 'l1': 'NATIVE',
  'notes.tag': 'what do I write?', 'notes.title': 'Notes from my notebook', 'notes.sub': 'on language, travel, education and life',
  'ct.title': 'Drop me a line', 'ct.sub': 'For a new idea, a collaboration, or just a chat over coffee.',
  'ct.reply': 'usually reply within 24 hours', 'ct.to': 'to: Ekrem',
  'foot.pre': '© 2026 Ekrem Usta · made with ', 'foot.post': '',
};
const UI = {
  tr: { read: 'oku →', close: 'Kapat', prev: 'Önceki', next: 'Sonraki', photo: 'Fotoğraf', cv: 'assets/cv-tr.pdf',
        shakeMouse: 'fareyle salla, ortaya çıksın!', shakePhone: 'telefonu salla, ortaya çıksın!' },
  en: { read: 'read →', close: 'Close', prev: 'Previous', next: 'Next', photo: 'Photo', cv: 'assets/cv-en.pdf',
        shakeMouse: 'shake it with your mouse to develop!', shakePhone: 'shake your phone to develop!' },
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lang = 'tr';

/* ---------- small deterministic randomness so the layout is the same every visit ---------- */
function rand(i, salt) {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/* ---------- GALLERY ---------- */
function galleryCols() {
  const w = window.innerWidth;
  return w < 720 ? 2 : w < 1000 ? 3 : 4;
}
/* place each print in the currently shortest column (keeps left-to-right order and even column ends) */
function layoutGallery() {
  const g = $('#gallery');
  const n = galleryCols();
  if (g.dataset.cols === String(n)) return;
  g.dataset.cols = n;
  const shots = $$('.shot', g);
  const cols = Array.from({ length: n }, () => { const c = document.createElement('div'); c.className = 'gallery-col'; return c; });
  const heights = new Array(n).fill(0);
  shots.forEach(s => {
    const k = heights.indexOf(Math.min(...heights));
    cols[k].appendChild(s);
    heights[k] += PHOTOS[+s.dataset.i].shape === 'wide' ? 0.95 : 1.55; // rough print height incl. caption
  });
  g.replaceChildren(...cols);
}

function buildGallery() {
  const g = $('#gallery');
  g.innerHTML = PHOTOS.map((p, i) => {
    const r = (rand(i, 1) * 7 - 3.5).toFixed(2);
    const dx = Math.round(rand(i, 2) * 14 - 7);
    const tape = p.tape ? `<span class="tape ${p.tape === 'top' ? 'tape-top' : 't-' + p.tape} ${p.tint ? 't-' + p.tint : ''}" aria-hidden="true"></span>` : '';
    return `
      <button class="shot develop" type="button" data-i="${i}" style="--r:${r}deg;--dx:${dx}px">
        <figure class="instax ${p.shape}">
          ${tape}
          <div class="instax-img"><img src="assets/photos/${p.src}.jpg" alt="" loading="lazy" decoding="async" /></div>
        </figure>
      </button>`;
  }).join('');
  updateGalleryText();
  layoutGallery();
  window.addEventListener('resize', layoutGallery);

  $$('.shot', g).forEach(b => b.addEventListener('click', () => openLightbox(+b.dataset.i)));

  // "develop" each print as it scrolls into view
  if (reduceMotion || !('IntersectionObserver' in window)) {
    $$('.develop').forEach(el => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const img = $('img', e.target);
      const go = () => setTimeout(() => e.target.classList.add('is-in'), 300);
      img.complete ? go() : img.addEventListener('load', go, { once: true });
      io.unobserve(e.target);
    });
  }, { threshold: 0.25 });
  $$('.develop').forEach(el => io.observe(el));
}

function updateGalleryText() {
  $$('#gallery .shot').forEach(b => {
    const p = PHOTOS[+b.dataset.i];
    $('img', b).alt = p[lang];
    b.setAttribute('aria-label', `${UI[lang].photo}: ${p[lang]}`);
  });
}

/* ---------- LIGHTBOX: shake it like a polaroid ----------
   A print opens blank. Shaking it (mouse, finger, or the phone itself) develops it.
   Prints you've already developed stay developed until the page is reloaded. */
let lbIndex = 0, lbReturn = null;
const developed = new Set();
const coarse = window.matchMedia('(pointer: coarse)').matches;
const shake = { dev: 0, target: 0, sx: 0, sy: 0, sr: 0, raf: 0, lastT: 0, lastX: null, lastY: null, lastDir: 0 };
let motionAsked = false;

function lbOpen() { return !$('#lightbox').hidden; }
function addShake(amount, dx = 0, dy = 0) {
  if (developed.has(lbIndex)) return;
  shake.target = Math.min(1, shake.target + amount);
  shake.sx = Math.max(-22, Math.min(22, shake.sx + dx * 0.3));
  shake.sy = Math.max(-14, Math.min(14, shake.sy + dy * 0.2));
  shake.sr = Math.max(-6, Math.min(6, shake.sr + dx * 0.05));
}
function shakeLoop() {
  const print = $('.lb-print');
  shake.dev += (shake.target - shake.dev) * 0.08;
  if (shake.target >= 1 && shake.dev > 0.995) {
    shake.dev = 1;
    if (!developed.has(lbIndex)) { developed.add(lbIndex); $('#lbHint').classList.add('done'); }
  }
  shake.sx *= 0.82; shake.sy *= 0.82; shake.sr *= 0.82;
  print.style.setProperty('--dev', shake.dev.toFixed(3));
  print.style.setProperty('--sx', shake.sx.toFixed(1) + 'px');
  print.style.setProperty('--sy', shake.sy.toFixed(1) + 'px');
  print.style.setProperty('--sr', shake.sr.toFixed(2) + 'deg');
  $('#lbProgress').style.width = (shake.target * 100).toFixed(0) + '%';
  shake.raf = lbOpen() ? requestAnimationFrame(shakeLoop) : 0;
}
function askMotion() {
  // iOS only allows motion sensors after a tap, so ask on the tap that opens the print
  if (motionAsked) return; motionAsked = true;
  const D = window.DeviceMotionEvent;
  if (D && typeof D.requestPermission === 'function') D.requestPermission().catch(() => {});
}
function onMotion(e) {
  if (!lbOpen()) return;
  const a = e.acceleration && e.acceleration.x != null ? e.acceleration : null;
  let mag, ax = 0, ay = 0;
  if (a) { ax = a.x || 0; ay = a.y || 0; mag = Math.hypot(ax, ay, a.z || 0); }
  else if (e.accelerationIncludingGravity) {
    const g = e.accelerationIncludingGravity, p = onMotion.prev || g;
    ax = (g.x || 0) - (p.x || 0); ay = (g.y || 0) - (p.y || 0);
    mag = Math.hypot(ax, ay, (g.z || 0) - (p.z || 0)); onMotion.prev = { x: g.x, y: g.y, z: g.z };
  } else return;
  if (mag > 6) addShake((mag - 6) * 0.0009, ax * 2, -ay * 2);
}

function openLightbox(i) {
  lbReturn = document.activeElement;
  askMotion();
  $('#lightbox').hidden = false;
  document.body.style.overflow = 'hidden';
  showPhoto(i);
  $('.lb-close').focus();
  if (!shake.raf) shake.raf = requestAnimationFrame(shakeLoop);
}
function showPhoto(i) {
  lbIndex = (i + PHOTOS.length) % PHOTOS.length;
  const p = PHOTOS[lbIndex];
  const print = $('.lb-print');
  if (reduceMotion) developed.add(lbIndex);
  const done = developed.has(lbIndex);
  shake.dev = shake.target = done ? 1 : 0;
  print.style.setProperty('--dev', shake.dev);
  $('#lbHint').classList.toggle('done', done);
  $('#lbHintText').textContent = coarse ? UI[lang].shakePhone : UI[lang].shakeMouse;
  print.classList.toggle('wide', p.shape === 'wide');
  print.style.animation = 'none'; void print.offsetWidth; print.style.animation = '';
  $('#lbImg').src = `assets/photos/${p.src}.jpg`;
  $('#lbImg').alt = p[lang];
  $('#lbCount').textContent = `${String(lbIndex + 1).padStart(2, '0')} / ${String(PHOTOS.length).padStart(2, '0')}`;
}
function closeLightbox() {
  $('#lightbox').hidden = true;
  document.body.style.overflow = '';
  lbReturn && lbReturn.focus();
}
function initLightbox() {
  const lb = $('#lightbox');
  $('.lb-close').addEventListener('click', closeLightbox);
  $('.lb-prev').addEventListener('click', () => showPhoto(lbIndex - 1));
  $('.lb-next').addEventListener('click', () => showPhoto(lbIndex + 1));
  lb.addEventListener('click', e => { if (e.target === lb && !shake.moved) closeLightbox(); shake.moved = false; });

  // shaking with a mouse or a finger: fast movement plus quick changes of direction
  lb.addEventListener('pointermove', e => {
    const now = performance.now();
    if (shake.lastX !== null) {
      const dx = e.clientX - shake.lastX, dy = e.clientY - shake.lastY;
      const d = Math.hypot(dx, dy), dt = Math.max(1, now - shake.lastT);
      if (d / dt > 0.5) {
        let amount = Math.min(d, 90) * 0.0006;
        const dir = Math.sign(dx);
        if (dir && dir !== shake.lastDir && Math.abs(dx) > 3) { amount += 0.05; shake.lastDir = dir; }
        addShake(amount, dx, dy);
        if (d > 6 && e.buttons) shake.moved = true;   // a finger shake shouldn't count as a tap to close
      }
    }
    shake.lastX = e.clientX; shake.lastY = e.clientY; shake.lastT = now;
  });
  lb.addEventListener('pointerleave', () => { shake.lastX = null; });
  window.addEventListener('devicemotion', onMotion);

  // swipe to the next print, but only if this one was already developed when the finger went down
  // and the gesture was one clean stroke (a back-and-forth finger shake must never flip the photo)
  let sx = null, swipeOk = false, turns = 0, lastTx = 0, lastTdir = 0;
  lb.addEventListener('touchstart', e => {
    sx = lastTx = e.touches[0].clientX; turns = 0; lastTdir = 0;
    swipeOk = developed.has(lbIndex);
  }, { passive: true });
  lb.addEventListener('touchmove', e => {
    const x = e.touches[0].clientX, dir = Math.sign(x - lastTx);
    if (dir && Math.abs(x - lastTx) > 3) { if (lastTdir && dir !== lastTdir) turns++; lastTdir = dir; }
    lastTx = x;
  }, { passive: true });
  lb.addEventListener('touchend', e => {
    if (sx === null) return;
    const d = e.changedTouches[0].clientX - sx;
    if (swipeOk && turns === 0 && Math.abs(d) > 50) showPhoto(lbIndex + (d < 0 ? 1 : -1));
    sx = null;
  });
}

/* ---------- NOTES ---------- */
function buildPosts() {
  $('#posts').innerHTML = POSTS.map((p, i) => `
    <button class="post" type="button" data-i="${i}">
      <span class="cat">${p.cat[lang]}</span>
      <h3>${p.title[lang]}</h3>
      <p>${p.excerpt[lang]}</p>
      <span class="mono small muted">${p.date[lang]} · ${p.read[lang]}</span>
      <span class="read">${UI[lang].read}</span>
    </button>`).join('');
  $$('#posts .post').forEach(b => b.addEventListener('click', () => openPost(+b.dataset.i)));
}
let postReturn = null;
function openPost(i) {
  const p = POSTS[i];
  postReturn = document.activeElement;
  $('#postMeta').textContent = `${p.cat[lang]} · ${p.date[lang]} · ${p.read[lang]}`;
  $('#postTitle').textContent = p.title[lang];
  $('#postBody').innerHTML = p.body[lang];
  $('#postModal').hidden = false;
  $('#postModal').scrollTop = 0;
  document.body.style.overflow = 'hidden';
  $('.modal-close').focus();
}
function closePost() {
  $('#postModal').hidden = true;
  document.body.style.overflow = '';
  postReturn && postReturn.focus();
}
function initPostModal() {
  $('.modal-close').addEventListener('click', closePost);
  $('#postModal').addEventListener('click', e => { if (e.target.id === 'postModal') closePost(); });
}

document.addEventListener('keydown', e => {
  if (!$('#lightbox').hidden) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPhoto(lbIndex - 1);
    if (e.key === 'ArrowRight') showPhoto(lbIndex + 1);
    if (e.key === 's' || e.key === 'S') addShake(0.2, (Math.random() - .5) * 60, 0);   // keyboard shake
  } else if (!$('#postModal').hidden && e.key === 'Escape') {
    closePost();
  }
});

/* ---------- LANGUAGE ---------- */
const TR = {};
function captureTurkish() {
  $$('[data-i18n]').forEach(el => { TR[el.dataset.i18n] = el.innerHTML; });
  $$('[data-i18n-alt]').forEach(el => { TR[el.dataset.i18nAlt] = el.alt; });
}
function setLang(next) {
  lang = next === 'en' ? 'en' : 'tr';
  const dict = lang === 'en' ? EN : TR;
  $$('[data-i18n]').forEach(el => { const v = dict[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
  $$('[data-i18n-alt]').forEach(el => { const v = dict[el.dataset.i18nAlt]; if (v != null) el.alt = v; });
  document.documentElement.lang = lang;
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $('#cvLink').href = UI[lang].cv;
  $('.lb-close').setAttribute('aria-label', UI[lang].close);
  $('.modal-close').setAttribute('aria-label', UI[lang].close);
  $('.lb-prev').setAttribute('aria-label', UI[lang].prev);
  $('.lb-next').setAttribute('aria-label', UI[lang].next);
  $('#lightbox').setAttribute('aria-label', UI[lang].photo);
  updateGalleryText();
  buildPosts();
  try { localStorage.setItem('lang', lang); } catch (_) {}
}
function initLang() {
  captureTurkish();
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (_) {}
  setLang(saved || 'tr');
}

/* ---------- LANYARD SWING ---------- */
function initLanyard() {
  const el = $('#lanyard');
  if (!el) return;
  let angle = reduceMotion ? 0 : 24, vel = 0, dragging = false, last = performance.now();
  let pointerAngle = 0;
  const K = 38, DAMP = 2.1, MAX = 55;

  const angleFromPointer = e => {
    const parentRect = el.parentElement.getBoundingClientRect();
    const px = parentRect.left + parentRect.width / 2;
    const py = el.offsetTop + parentRect.top;
    const a = Math.atan2(e.clientX - px, Math.max(40, e.clientY - py)) * 180 / Math.PI;
    return Math.max(-MAX, Math.min(MAX, -a));
  };

  el.addEventListener('pointerdown', e => {
    e.preventDefault();
    window.getSelection && window.getSelection().removeAllRanges();
    dragging = true; el.classList.add('dragging'); document.body.classList.add('no-select');
    el.setPointerCapture(e.pointerId);
    pointerAngle = angleFromPointer(e);
  });
  // text selection is started by mousedown (not pointerdown), so block it there and while dragging
  el.addEventListener('mousedown', e => e.preventDefault());
  el.addEventListener('dragstart', e => e.preventDefault());
  document.addEventListener('selectstart', e => { if (dragging) e.preventDefault(); });
  el.addEventListener('pointermove', e => { if (dragging) pointerAngle = angleFromPointer(e); });
  const end = () => { dragging = false; el.classList.remove('dragging'); document.body.classList.remove('no-select'); };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointercancel', end);

  // a little nudge when the mouse sweeps past the card
  let lastX = null;
  window.addEventListener('pointermove', e => {
    if (dragging || e.pointerType !== 'mouse') return;
    if (lastX !== null && window.scrollY < window.innerHeight) {
      const r = $('.instax-hero').getBoundingClientRect();
      if (e.clientY > r.top - 40 && e.clientY < r.bottom + 40 && e.clientX > r.left - 60 && e.clientX < r.right + 60) {
        vel -= Math.max(-12, Math.min(12, (e.clientX - lastX) * 0.3));
      }
    }
    lastX = e.clientX;
  });

  if (reduceMotion) return;
  function tick(now) {
    const dt = Math.min(0.033, (now - last) / 1000); last = now;
    if (dragging) {
      const prev = angle;
      angle += (pointerAngle - angle) * 0.35;
      vel = (angle - prev) / dt;
    } else {
      const breeze = Math.sin(now / 1400) * 0.6;
      vel += (-K * (angle - breeze) - DAMP * vel) * dt;
      angle += vel * dt;
      angle = Math.max(-MAX, Math.min(MAX, angle));
    }
    el.style.transform = `rotate(${angle.toFixed(2)}deg)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- EASTER EGG: the breakdown of a 9 to 5 workaholic ----------
   footer 🩵 → click → 🎹 → click → the site goes dark and becomes the music project.
   Nothing is saved: reloading the page brings the normal site back. */
const BD_TITLE = 'The Breakdown of a 9\u00a0to\u00a05 Workaholic';   // keep "9 to 5" on one line
const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
let audio = null;
function notes(freqs, gap, dur = 1.6, vol = 0.07) {
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audio.currentTime + 0.02;
    freqs.forEach((f, i) => {
      const t = t0 + i * gap;
      const g = audio.createGain(); g.connect(audio.destination);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(vol, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      [[1, 'triangle'], [2, 'sine'], [3, 'sine']].forEach(([h, type], k) => {   // a soft, piano-ish tone
        const o = audio.createOscillator(); o.type = type; o.frequency.value = f * h;
        const hg = audio.createGain(); hg.gain.value = [1, .35, .12][k];
        o.connect(hg).connect(g); o.start(t); o.stop(t + dur + .05);
      });
    });
  } catch (_) { /* no sound, no problem */ }
}

function buildTracks() {
  $('#tracks').innerHTML = HOURS.map((h, i) => {
    const r = (rand(i, 7) * 8 - 4).toFixed(2);
    const sx = Math.round(rand(i, 8) * 100) + '%', sy = Math.round(rand(i, 9) * 100) + '%';
    const bx = Math.round(20 + rand(i, 10) * 60) + '%', by = Math.round(20 + rand(i, 11) * 60) + '%';
    return `
      <div class="track" style="--r:${r}deg;--sx:${sx};--sy:${sy};--bx:${bx};--by:${by};--d:${(rand(i, 12) * 4).toFixed(2)}s">
        <figure class="instax mini" aria-label="${h}">
          <div class="instax-img"><span class="ember" aria-hidden="true"></span></div>
          <span class="track-time">${h}</span>
        </figure>
      </div>`;
  }).join('');
}
function buildEq() {
  $('.eq').innerHTML = Array.from({ length: 24 }, (_, i) => `<i style="--d:${(-rand(i, 13) * 1.1).toFixed(2)}s"></i>`).join('');
}
function typeTitle() {
  const el = $('#bdType');
  if (reduceMotion) { el.textContent = BD_TITLE; return; }
  let i = 0; el.textContent = '';
  (function next() {
    el.textContent = BD_TITLE.slice(0, ++i);
    if (i < BD_TITLE.length) setTimeout(next, BD_TITLE[i - 1] === ' ' ? 140 : 55 + Math.random() * 70);
  })();
}
function enterBreakdown() {
  if (!document.querySelector('link[data-bd-fonts]')) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.dataset.bdFonts = '';
    l.href = 'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap';
    document.head.appendChild(l);
  }
  notes([440, 349.23, 261.63, 220, 164.81], 0.16, 2.6, 0.06);   // A–F–C–A–E, falling
  const bo = $('#blackout');
  bo.classList.remove('off'); bo.style.opacity = '';
  if (!reduceMotion) bo.classList.add('on');
  setTimeout(() => {
    document.body.classList.add('bd');
    $$('.bd-only').forEach(el => el.removeAttribute('hidden'));
    buildTracks(); buildEq();
    window.scrollTo(0, 0);
    typeTitle();
    bo.classList.remove('on'); bo.style.opacity = reduceMotion ? '0' : '1';
    requestAnimationFrame(() => requestAnimationFrame(() => { bo.classList.add('off'); bo.style.opacity = '0'; }));
  }, reduceMotion ? 0 : 950);
}
function initEgg() {
  const egg = $('#egg');
  let stage = 0;
  egg.addEventListener('click', () => {
    if (stage === 0) {
      stage = 1;
      egg.textContent = '🎹'; egg.setAttribute('aria-label', '🎹');
      egg.classList.remove('pop'); void egg.offsetWidth; egg.classList.add('pop');
      notes([523.25, 659.25, 783.99, 1046.5], 0.09);            // C–E–G–C
    } else if (stage === 1) {
      stage = 2;
      enterBreakdown();
    } else {
      const am = [220, 261.63, 329.63, 392, 440];
      notes([am[Math.floor(Math.random() * am.length)]], 0, 2.2, 0.06);
    }
  });
}

/* ---------- INIT ---------- */
buildGallery();
initLightbox();
initPostModal();
initLang();
initEgg();
initLanyard();
