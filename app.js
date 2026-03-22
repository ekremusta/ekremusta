/* ==========================================
   EKREM USTA — Personal Website JS
   ========================================== */

// ---- Language System ----
let currentLang = 'tr';
let currentFilter = 'all';

const T = {
  tr: {
    'nav.home':'Anasayfa','nav.about':'Hakkımda','nav.blog':'Blog','nav.contact':'İletişim','nav.cta':'İletişime Geç →',
    'hero.greeting':'KİMİM BEN?','hero.title1':'Merhaba, ben',
    'hero.subtitle':'Boğaziçi Üniversitesi İngilizce Öğretmenliği öğrencisiyim. Kelimeler, kültürler ve fikirler arasında köprü kurmaktan keyif alıyorum.',
    'hero.btn.cv':"CV'mi Görüntüle →",'hero.btn.blog':'Blog Yazılarımı Oku',
    'skills.tag':'Neler yapıyorum?','skills.title':'İlgi alanlarım & yeteneklerim',
    'skills.subtitle':'Akademik çalışmalarım, projelerim ve hobilerim doğrultusunda geliştirdiğim beceriler:',
    's1.t':'Akademik Yazarlık','s1.d':'Araştırma makaleleri, analitik yazılar ve iyi yapılandırılmış akademik içerikler üretme.',
    's2.t':'Veri ve Analiz','s2.d':'Veri girişi ve analizi, araştırma bulgularını anlamlı içgörülere dönüştürme.',
    's3.t':'Dil Eğitimi','s3.d':'İngilizce öğretimi planlaması, ders materyali geliştirme ve öğrenci odaklı koçluk.',
    's4.t':'Fotoğrafçılık','s4.d':'Analog ve dijital fotoğrafçılık; anı ve hikayeleri görsel olarak belgeleme.',
    's5.t':'İçerik Stratejisi','s5.d':'Sosyal medya içeriği oluşturma, topluluk iletişimi ve marka sesi geliştirme.',
    's6.t':'Kültürlerarası İletişim','s6.d':'Türkçe, İngilizce ve Almanca ile farklı kültürler arasında köprü kurma.',
    'feat.tag':'NE YAZIYORUM?','feat.title':'Öne çıkan yazılar','feat.btn':'Tüm yazıları gör →',
    'cta.title':'Bana ulaşmak mı istiyorsun?','cta.sub':'Yeni işbirlikleri, fırsatlar veya sohbet için:','cta.btn':'İletişime Geç →',
    'foot.copy':'© 2026 Ekrem Usta. Tüm Hakları Saklıdır. 🩵 ile Yapıldı.',
    'foot.home':'Anasayfa','foot.about':'Hakkımda','foot.blog':'Blog','foot.contact':'İletişim',
    'ab.tag':'Özgeçmiş','ab.role':'Üniversite Öğrencisi @Boğaziçi Üniversitesi',
    'ab.name':'Ekrem Usta','ab.loc':'📍 İstanbul, Türkiye',
    'ab.btn.c':'İletişime Geç','ab.btn.cv':'CV İndir (PDF)',
    'cv.edu':'🎓 Eğitim','cv.work':'💼 İş Deneyimi','cv.proj':'🚀 Çalışmalar',
    'e1.org':'Boğaziçi Üniversitesi','e1.date':'2021 — Devam ediyor','e1.role':'İngilizce Öğretmenliği','e1.loc':'📍 İstanbul, Türkiye',
    'e2.org':'University of Alberta','e2.date':'2025 Güz','e2.role':'Değişim (Exchange) Programı','e2.loc':'📍 Edmonton, Kanada',
    'w1.org':'SineBU — Boğaziçi Üniversitesi','w1.date':'Temmuz 2024 — Aralık 2024','w1.role':'Sinema Görevlisi',
    'w1.b1':'Gösterimlerde gişe işlemlerinde görev aldım, bilet kesim, kontrol ve müşteri iletişimini sağladım.',
    'w1.b2':'Sinema salonun sahneye hazır, film başlatma ve bitirme işlemlerini gerçekleştirdim.',
    'w1.b3':'Günlük satış raporlarını ve bordroları işleyerek raporlama görevlerini yerine getirdim.',
    'w2.org':'Boğaziçi Üniversitesi Yaz Okulu','w2.date':'Temmuz 2023 — Ağustos 2023','w2.role':'Eğitmen ve Koç',
    'w2.b1':'Yaz okulu programında öğrencilere İngilizce dil eğitimi verdim.',
    'w2.b2':'Öğrencilerin gelişimi için mentörlük ve koçluk hizmeti sundum.',
    'p1.t':'🐾 BÜ Hayvan Yaşam Alanı',
    'p1.b1':'Bakımlarının bir parçası olarak hayvanların belgelenmesine ve fırçalanmasına yardımcı oldum.',
    'p1.b2':'Diğer gönüllüler ile iş birliği yaparak iletişim ve takım çalışması becerileri geliştirdim.',
    'p2.t':'✏️ İngilizce Koçluğu',
    'p2.b1':'Deprem sonrası müfredatı takip etmekte zorlanan öğrencilere haftada iki saat Zoom üzerinden birebir İngilizce dil dersi verdim.',
    'p2.b2':'Üniversitede öğrendiğim öğretim yöntemlerini koçluk programında uygulayarak geliştirdim.',
    'badge.vol':'Gönüllü',
    'sb.lang':'Diller','sb.skills':'Yetenekler','sb.hobbies':'Hobiler',
    'l1.n':'Türkçe','l1.lv':'Ana dil','l2.n':'İngilizce','l2.lv':'İleri Seviye (C2)','l3.n':'Almanca','l3.lv':'Başlangıç (A1)',
    'h1':'Dil öğrenme','h2':'Sorumluluk projeleri','h3':'Analog ve dijital fotoğrafçılık','h4':'Seyahat etmek','h5':'Sinema ve film',
    'sk1':'Akademik Yazı','sk2':'Veri ve Analiz','sk3':'İçerik Stratejisi','sk4':'Dil Eğitimi',
    'sk5':'MS Office','sk6':'Adobe Creative Suite','sk7':'Sunum','sk8':'Takım Çalışması',
    'bl.tag':'NE YAZIYORUM?','bl.title':'Blog','bl.sub':'Dil öğrenimi, seyahat, eğitim ve hayat üzerine düşünceler.',
    'bl.all':'Tümü','bl.dil':'Dil','bl.travel':'Seyahat','bl.edu':'Eğitim','bl.life':'Hayat',
    'ct.tag':'İletişim','ct.title':'Merak ettim,<br>ne oldu?',
    'ct.sub':'Yeni bir proje, iş birliği veya sadece kahve eşliğinde sohbet etmek için bana ulaşabilirsiniz.',
    'ct.info':'İletişim Bilgileri','ct.email.l':'E-Posta','ct.loc.l':'Konum','ct.loc.v':'İstanbul, Türkiye',
    'ct.res.l':'Yanıt Süresi','ct.res.v':'Genellikle 24 saat içinde','ct.li':'LinkedIn','ct.gh':'GitHub','ct.mail':'E-Posta',
    'read':'Oku →',
  },
  en: {
    'nav.home':'Home','nav.about':'About','nav.blog':'Blog','nav.contact':'Contact','nav.cta':'Get in Touch →',
    'hero.greeting':'WHO AM I?','hero.title1':"Hello, I'm",
    'hero.subtitle':"I'm an English Language Teaching student at Boğaziçi University. I enjoy building bridges between words, cultures, and ideas.",
    'hero.btn.cv':'View My CV →','hero.btn.blog':'Read My Blog',
    'skills.tag':'What do I do?','skills.title':'My interests & skills',
    'skills.subtitle':"Skills I've developed through my academic studies, projects, and hobbies:",
    's1.t':'Academic Writing','s1.d':'Producing research papers, analytical essays, and well-structured academic content.',
    's2.t':'Data & Analysis','s2.d':'Data entry and analysis, transforming research findings into meaningful insights.',
    's3.t':'Language Education','s3.d':'English teaching planning, lesson material development, and student-centred coaching.',
    's4.t':'Photography','s4.d':'Analog and digital photography; visually documenting moments and stories.',
    's5.t':'Content Strategy','s5.d':'Creating social media content, community communication, and brand voice development.',
    's6.t':'Intercultural Communication','s6.d':'Building bridges between cultures in Turkish, English, and German.',
    'feat.tag':'WHAT DO I WRITE?','feat.title':'Featured posts','feat.btn':'See all posts →',
    'cta.title':'Want to reach me?','cta.sub':'For new collaborations, opportunities, or just a conversation:','cta.btn':'Get in Touch →',
    'foot.copy':'© 2026 Ekrem Usta. All rights reserved. Made with 🩵',
    'foot.home':'Home','foot.about':'About','foot.blog':'Blog','foot.contact':'Contact',
    'ab.tag':'Resume','ab.role':'University Student @Boğaziçi University',
    'ab.name':'Ekrem Usta','ab.loc':'📍 Istanbul, Türkiye',
    'ab.btn.c':'Get in Touch','ab.btn.cv':'Download CV (PDF)',
    'cv.edu':'🎓 Education','cv.work':'💼 Work Experience','cv.proj':'🚀 Projects',
    'e1.org':'Boğaziçi University','e1.date':'2021 — Present','e1.role':'English Language Teaching','e1.loc':'📍 Istanbul, Turkey',
    'e2.org':'University of Alberta','e2.date':'Fall 2025','e2.role':'Exchange Program','e2.loc':'📍 Edmonton, Canada',
    'w1.org':'SineBU — Boğaziçi University','w1.date':'July 2024 — December 2024','w1.role':'Cinema Staff',
    'w1.b1':'Managed box office operations including ticket sales, checking, and customer communication.',
    'w1.b2':'Prepared the cinema hall and handled film start-up and wrap-up procedures.',
    'w1.b3':'Processed daily sales reports and payroll, fulfilling reporting duties.',
    'w2.org':'Boğaziçi University Summer School','w2.date':'July 2023 — August 2023','w2.role':'Instructor & Coach',
    'w2.b1':'Provided English language instruction to students in the summer school program.',
    'w2.b2':'Offered mentoring and coaching to support student development.',
    'p1.t':'🐾 BÜ Animal Habitat',
    'p1.b1':'Assisted in documenting and grooming animals as part of their care.',
    'p1.b2':'Collaborated with other volunteers to develop communication and teamwork skills.',
    'p2.t':'✏️ English Coaching',
    'p2.b1':'Provided two hours of one-on-one English lessons per week via Zoom to students struggling after the earthquake.',
    'p2.b2':'Applied and developed teaching methods learned at university in a coaching program.',
    'badge.vol':'Volunteer',
    'sb.lang':'Languages','sb.skills':'Skills','sb.hobbies':'Hobbies',
    'l1.n':'Turkish','l1.lv':'Native','l2.n':'English','l2.lv':'Advanced (C2)','l3.n':'German','l3.lv':'Beginner (A1)',
    'h1':'Language learning','h2':'Responsibility projects','h3':'Analog & digital photography','h4':'Traveling','h5':'Cinema & film',
    'sk1':'Academic Writing','sk2':'Data & Analysis','sk3':'Content Strategy','sk4':'Language Education',
    'sk5':'MS Office','sk6':'Adobe Creative Suite','sk7':'Presentation','sk8':'Teamwork',
    'bl.tag':'WHAT DO I WRITE?','bl.title':'Blog','bl.sub':'Thoughts on language learning, travel, education, and life.',
    'bl.all':'All','bl.dil':'Language','bl.travel':'Travel','bl.edu':'Education','bl.life':'Life',
    'ct.tag':'Contact','ct.title':'Curious,<br>what\'s up?',
    'ct.sub':'Feel free to reach out for a new project, a collaboration, or just a chat over coffee.',
    'ct.info':'Contact Info','ct.email.l':'Email','ct.loc.l':'Location','ct.loc.v':'Istanbul, Türkiye',
    'ct.res.l':'Response Time','ct.res.v':'Usually within 24 hours','ct.li':'LinkedIn','ct.gh':'GitHub','ct.mail':'Email',
    'read':'Read →',
  }
};

function t(key) { return T[currentLang]?.[key] ?? T.tr[key] ?? key; }

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });
  document.getElementById('btn-tr')?.classList.toggle('active', lang === 'tr');
  document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
  // Update CV download link to language-specific file
  const cvBtn = document.getElementById('cvDownloadBtn');
  if (cvBtn) cvBtn.href = lang === 'en' ? 'assets/cv-en.pdf' : 'assets/cv-tr.pdf';
  // Refresh dynamic sections
  renderFeaturedBlog();
  if (document.querySelector('.page.active')?.id === 'page-blog') renderBlogGrid(currentFilter);
}

// ---- Nav Logo Easter Egg ----
document.addEventListener('DOMContentLoaded', () => {
  const navLogo = document.getElementById('navLogo');
  const navLogoDot = document.getElementById('navLogoDot');
  if (navLogo && navLogoDot) {
    navLogo.addEventListener('mouseenter', () => { navLogoDot.textContent = ':)'; });
    navLogo.addEventListener('mouseleave', () => { navLogoDot.textContent = '.'; });
  }
});

// ---- About Photo Easter Egg (instant swap, no animation) ----
const aboutPhotos = ['assets/about1.jpg','assets/about2.jpg','assets/about3.jpg','assets/about4.jpg'];
const aboutEmojis  = ['😄','😎','🤩','🙌'];
function randomAboutPhoto(img) { img.src = aboutPhotos[Math.floor(Math.random() * aboutPhotos.length)]; }
function resetAboutPhoto(img)  { img.src = 'assets/about.jpg'; }
function randomAboutPhotoEmoji(el) { el.dataset.orig = el.textContent; el.textContent = aboutEmojis[Math.floor(Math.random() * aboutEmojis.length)]; }
function resetAboutPhotoEmoji(el)  { el.textContent = el.dataset.orig || '👤'; }

// ---- Language Hover Easter Egg ----
function langHover(item, greeting) {
  const el = item.querySelector('.lang-name');
  if (el) { el.textContent = greeting; el.style.fontStyle = 'italic'; el.style.color = 'var(--accent)'; }
}
function langReset(item, key) {
  const el = item.querySelector('.lang-name');
  if (el) { el.textContent = t(key); el.style.fontStyle = ''; el.style.color = ''; }
}

// ---- Blog Data (2 posts only) ----
const blogPosts = [
  {
    id: 0, category: 'dil', categoryLabel: 'Dil', categoryLabelEn: 'Language', emoji: '📖',
    title: 'Dil Öğrenmenin Psikolojisi: Neden Bazıları Daha Hızlı Öğreniyor?',
    titleEn: 'The Psychology of Language Learning: Why Do Some Learn Faster?',
    excerpt: 'Dil edinim sürecinde motivasyonun, kişilik tipinin ve öğrenme ortamının kritik rolüne dair düşünceler.',
    excerptEn: 'Thoughts on the critical role of motivation, personality, and environment in the language acquisition process.',
    date: 'Mart 2024', dateEn: 'March 2024', readTime: '6 dk',
    content: `<p>Dil öğrenmek, salt dilbilgisi kuralları ve kelime ezberleme meselesinden çok daha derin bir süreç. Peki neden bazı insanlar bir dili aylar içinde öğrenirken, diğerleri yıllarca aynı noktada kalıyor?</p>
      <h3>Motivasyon Türleri Belirleyici</h3>
      <p>Stephen Krashen'in edinim teorisine göre, insanlar dili en kalıcı biçimde <em>anlamlı</em> bağlamlarda kullandıklarında edinirler. "Entegratif motivasyon" ile "enstrümental motivasyon" arasındaki fark, uzun vadeli başarıyı doğrudan etkiliyor.</p>
      <h3>Ortamın Gücü</h3>
      <p>Değişim programım boyunca fark ettim ki, bir dili o dilin konuşulduğu ortamda öğrenmek sınıf içi öğrenimden çok daha hızlı sonuç veriyor. Sonuç olarak: hız, zekâdan değil, tutarlılık ve ortamdan kaynaklanıyor.</p>`,
    contentEn: `<p>Language learning is a process far deeper than grammar rules and vocabulary. So why do some people reach fluency in months, while others stay at the same point for years?</p>
      <h3>Motivation Type is Key</h3>
      <p>According to Stephen Krashen's acquisition theory, people learn language most permanently in <em>meaningful</em> contexts. The difference between integrative and instrumental motivation directly affects long-term success.</p>
      <h3>The Power of Environment</h3>
      <p>During my exchange program, I realised that learning in the environment where the language is spoken yields much faster results than classroom study. In short: speed comes not from intelligence, but from consistency and environment.</p>`
  },
  {
    id: 3, category: 'hayat', categoryLabel: 'Hayat', categoryLabelEn: 'Life', emoji: '🎞️',
    title: 'Analog Fotoğrafçılığa Dönüş: Yavaşlamanın Sanatı',
    titleEn: 'Back to Analog Photography: The Art of Slowing Down',
    excerpt: 'Dijital çağda analog film çekmenin bana öğrettikleri ve her karede saklanan dikkat üzerine.',
    excerptEn: 'What shooting analog film in the digital age has taught me, and the intentionality hidden in every frame.',
    date: 'Şubat 2024', dateEn: 'February 2024', readTime: '4 dk',
    content: `<p>Bir rulo filmde sadece 36 kare var. Bu kısıtlama başta saçma geldi. Ama tam da o kısıtlama, analog fotoğrafçılığın en büyük dersi oldu.</p>
      <h3>Her Kare Sayar</h3>
      <p>Dijital çekerken onlarca fotoğraf çekiyor, sonra hepsini siliyordum. Analog'da ise her basışta bir şeyi tüketiyorsunuz. Bu sizi daha dikkatli yapıyor.</p>
      <h3>Yavaşlamak Bir Seçim</h3>
      <p>Analog fotoğrafçılık bana yavaşlamayı, bir anı gerçekten yaşamayı öğretti. Belki de en hızlı hayatları olanlar, en çok yavaşlamaya ihtiyaç duyanlardır.</p>`,
    contentEn: `<p>A roll of film has only 36 frames. That constraint seemed absurd at first. But it turned out to be the greatest lesson analog photography teaches.</p>
      <h3>Every Frame Counts</h3>
      <p>When shooting digital, I'd fire off dozens of shots and delete them all. With analog, each press consumes something. It makes you more deliberate, more present.</p>
      <h3>Slowing Down is a Choice</h3>
      <p>Analog photography taught me to slow down and truly live a moment before recording it. Perhaps those with the fastest lives are the ones who most need to slow down.</p>`
  }
];

// ---- Render Featured Blog (language-aware, dynamic) ----
function renderFeaturedBlog() {
  const grid = document.getElementById('featuredBlogGrid');
  if (!grid) return;
  grid.innerHTML = blogPosts.map(post => {
    const title   = currentLang === 'en' ? (post.titleEn   || post.title)   : post.title;
    const excerpt = currentLang === 'en' ? (post.excerptEn || post.excerpt) : post.excerpt;
    const cat     = currentLang === 'en' ? (post.categoryLabelEn || post.categoryLabel) : post.categoryLabel;
    const date     = currentLang === 'en' ? (post.dateEn || post.date) : post.date;
    return `<div class="blog-card-featured" onclick="openBlogModal(${post.id})">
      <div class="blog-card-img">${post.emoji}</div>
      <div class="blog-card-body">
        <span class="blog-card-tag">${cat}</span>
        <h3 class="blog-card-title">${title}</h3>
        <p class="blog-card-excerpt">${excerpt}</p>
        <div class="blog-card-meta">
          <span>👤 Ekrem Usta</span>
          <span class="blog-card-date">📅 ${date}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ---- Page Routing ----
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link[id]').forEach(l => l.classList.remove('active'));
  const navLink = document.getElementById('nav-' + pageId);
  if (navLink) navLink.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (pageId === 'blog') renderBlogGrid(currentFilter);
}

// ---- Hamburger ----
function toggleMenu() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

// ---- Navbar scroll ----
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ---- Blog Rendering ----
function renderBlogGrid(category) {
  currentFilter = category;
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const filtered = category === 'all' ? blogPosts : blogPosts.filter(p => p.category === category);
  grid.innerHTML = filtered.map((post, i) => {
    const title   = currentLang === 'en' ? (post.titleEn   || post.title)   : post.title;
    const excerpt = currentLang === 'en' ? (post.excerptEn || post.excerpt) : post.excerpt;
    const cat     = currentLang === 'en' ? (post.categoryLabelEn || post.categoryLabel) : post.categoryLabel;
    const date     = currentLang === 'en' ? (post.dateEn || post.date) : post.date;
    return `<div class="blog-article-card animate-fade-up" style="animation-delay:${i*0.07}s" onclick="openBlogModal(${post.id})">
      <div class="blog-article-img">${post.emoji}</div>
      <div class="blog-article-body">
        <span class="blog-card-tag">${cat}</span>
        <h3 class="blog-article-title">${title}</h3>
        <p class="blog-article-excerpt">${excerpt}</p>
        <div class="blog-article-footer">
          <span>📅 ${date}</span>
          <span class="read-more">${t('read')}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterBlog(category, btn) {
  currentFilter = category;
  document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderBlogGrid(category);
}

// ---- Blog Modal ----
function openBlogModal(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;
  const title   = currentLang === 'en' ? (post.titleEn   || post.title)   : post.title;
  const content = currentLang === 'en' ? (post.contentEn || post.content) : post.content;
  const cat     = currentLang === 'en' ? (post.categoryLabelEn || post.categoryLabel) : post.categoryLabel;
  document.getElementById('modalTag').textContent   = cat;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalMeta').textContent  = `📅 ${post.date}  ·  ⏱ ${post.readTime} okuma`;
  document.getElementById('modalBody').innerHTML    = content;
  document.getElementById('blogModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeBlogModal(e) { if (e.target === document.getElementById('blogModal')) closeBlogModalDirect(); }
function closeBlogModalDirect() { document.getElementById('blogModal').classList.remove('open'); document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBlogModalDirect(); });

// ---- Intersection Observer ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.animationPlayState = 'running'; observer.unobserve(e.target); } });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-card, .blog-card-featured, .card').forEach(el => observer.observe(el));
  setTimeout(() => {
    document.querySelectorAll('.lang-bar-fill').forEach(bar => {
      const w = bar.style.width; bar.style.width = '0';
      requestAnimationFrame(() => setTimeout(() => { bar.style.width = w; }, 100));
    });
  }, 500);
});

// Init
showPage('home');
renderFeaturedBlog();
