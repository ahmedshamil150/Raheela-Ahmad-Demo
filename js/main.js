const pages = [
  ['About', 'about.html', 'about'],
  ['Life Coaching', 'life-coaching.html', 'life-coaching'],
  ['Reiki', 'reiki.html', 'reiki'],
  ['Psychotherapy', 'individual-therapy.html', 'individual-therapy'],
  ['Couples Counselling', 'couples-counselling.html', 'couples-counselling'],
  ['Yoga', 'yoga.html', 'yoga'],
  ['Numerology/Psychic readings', 'numerology-readings.html', 'numerology-readings'],
  ['Training & Workshops', 'training-workshops.html', 'training-workshops'],
  ['Blog', 'blog.html', 'blog']
];

const socialLinks = `
  <div class="social-links" aria-label="Social links">
    <a class="social-link" href="https://www.instagram.com/raheelaaahmad/" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
    <a class="social-link" href="https://www.youtube.com/channel/UCry_a10X7lWwwLDN8yY-eWw" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.5 15.5v-7L16 12l-6.5 3.5z"/></svg></a>
    <a class="social-link" href="https://www.tiktok.com/@raheelaahmad?_r=1&_t=ZS-96q2ujeREFb" target="_blank" rel="noopener" aria-label="TikTok"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.19 8.19 0 005.58 2.17v-3.45a4.85 4.85 0 01-5.58-2.78V6.69h5.58z"/></svg></a>
    <a class="social-link" href="https://www.linkedin.com/in/raheela-ahmad-991553254" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg></a>
  </div>`;

const header = `
<header class="site-header">
  <div class="utility-bar">
    ${socialLinks}
    <div class="contact-links">
      <a class="contact-item" href="https://wa.me/923334506846" target="_blank" rel="noopener">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        WhatsApp
      </a>
      <a class="contact-item" href="mailto:raheelaahmadcoach@gmail.com">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.51l9 5.49 9-5.49V7H3zm18 10V9.84l-8.48 5.17a1 1 0 01-1.04 0L3 9.84V17h18z"/></svg>
        raheelaahmadcoach@gmail.com
      </a>
    </div>
  </div>
  <div class="brand-bar">
    <a class="brand-lockup" href="index.html" aria-label="Raheelaa Ahmad home">
      <img class="brand-logo" src="images/logo.webp" alt="Raheelaa Ahmad Life Coach logo">
      <span class="brand-copy">
        <span class="brand-name">Raheelaa Ahmad</span>
        <span class="brand-tagline">Where Transformation Begins</span>
      </span>
    </a>
  </div>
  <nav class="main-nav" aria-label="Primary navigation">
    <ul class="nav-links">
      ${pages.map(([label, href, key]) => `<li><a class="nav-link" data-nav="${key}" href="${href}">${label}</a></li>`).join('')}
      <li><a class="nav-link nav-appointment" data-nav="book-appointment" href="book-appointment.html">Book an Appointment</a></li>
    </ul>
    <a class="mobile-appointment" href="book-appointment.html">Book an Appointment</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </nav>
</header>`;

document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('site-header');
  if (placeholder) placeholder.innerHTML = header;

  const heroSilk = `
    <svg class="page-hero__silk" viewBox="0 0 1400 240" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <filter id="phSilkBlur" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="7"/>
        </filter>
      </defs>
      <path d="M-40 231C180 225 345 238 555 233C775 228 1025 240 1440 232" stroke="#ffffff" stroke-width="11" opacity="0.34" filter="url(#phSilkBlur)"/>
      <path d="M-40 240C170 234 350 240 560 236C780 232 1030 240 1440 237" stroke="#ffffff" stroke-width="2.6" opacity="0.75"/>
      <path d="M-40 236C160 230 340 242 550 237C770 232 1020 242 1440 236" stroke="#ffffff" stroke-width="1.9" opacity="0.55"/>
      <path d="M-40 228C150 222 330 234 540 229C760 224 1010 236 1440 230" stroke="#ffffff" stroke-width="1.5" opacity="0.38"/>
      <path d="M-40 222C180 216 360 228 570 223C790 218 1040 230 1440 224" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
    </svg>`;


  const heroFlower = `
    <img class="page-hero__flower" src="images/hero section flower.webp" alt="" aria-hidden="true">`;

  const heroUnderline = `
    <div class="hero-underline" aria-hidden="true">
      <span class="hero-underline__line"></span>
      <svg class="hero-underline__lotus" viewBox="0 0 64 40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M32 35c-6-6-8-15 0-27 8 12 6 21 0 27Z"/>
        <path d="M32 35c-5-7-13-11-23-10 4 9 12 14 23 10Z"/>
        <path d="M32 35c5-7 13-11 23-10-4 9-12 14-23 10Z"/>
        <path d="M32 35c-8-2-15-8-19-17 10 1 17 8 19 17Z"/>
        <path d="M32 35c8-2 15-8 19-17-10 1-17 8-19 17Z"/>
      </svg>
      <span class="hero-underline__line"></span>
    </div>`;

  function injectHeroUnderline(block) {
    const heading = block.querySelector('h1');
    if (!heading) return;
    if (block.querySelector('.hero-underline')) return;
    heading.insertAdjacentHTML('afterend', heroUnderline);
  }

  document.querySelectorAll('.page-hero').forEach(function (hero) {
    hero.querySelectorAll('.page-hero__glow, .page-hero__ring, .page-hero__glyph').forEach(function (node) {
      node.parentNode.removeChild(node);
    });
    if (!hero.querySelector('.page-hero__silk')) {
      hero.insertAdjacentHTML('afterbegin', heroSilk);
    }
    if (!hero.querySelector('.page-hero__flower')) {
      hero.insertAdjacentHTML('beforeend', heroFlower);
    }
  });

  document.querySelectorAll('.page-hero__content').forEach(injectHeroUnderline);

  const page = document.body.dataset.page;
  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) activeLink.classList.add('active');

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (menuToggle && nav) {
    const navLinks = nav.querySelector('.nav-links');
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('menu-open');
      navLinks.style.transform = isOpen ? 'translateY(0)' : 'translateY(100%)';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', isOpen);
    });

    nav.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('menu-open');
        navLinks.style.transform = 'translateY(100%)';
        document.body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open menu');
      });
    });
  }

  document.querySelectorAll('.faq-question').forEach(function (question) {
    question.addEventListener('click', function () {
      const item = question.closest('.faq-item');
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(function (otherItem) {
        otherItem.classList.remove('is-open');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Compact sticky navbar
  var compactNav = document.createElement('div');
  compactNav.className = 'site-header-compact';
  compactNav.innerHTML = '<div class="compact-bar">' +
    '<a class="compact-brand" href="index.html" aria-label="Raheelaa Ahmad home">' +
      '<img src="images/logo.webp" alt="Raheelaa Ahmad logo">' +
      '<span>Raheelaa Ahmad</span>' +
    '</a>' +
    '<nav class="compact-nav" aria-label="Compact navigation">' +
      pages.map(function (p) {
        return '<a href="' + p[1] + '">' + p[0] + '</a>';
      }).join('') +
      '<a class="compact-book" href="book-appointment.html">Book Now</a>' +
    '</nav>' +
  '</div>';
  document.body.appendChild(compactNav);

  // Hamburger toggle (appended to body so position:fixed works relative to viewport)
  var compactToggle = document.createElement('button');
  compactToggle.className = 'compact-menu-toggle';
  compactToggle.type = 'button';
  compactToggle.setAttribute('aria-label', 'Open menu');
  compactToggle.setAttribute('aria-expanded', 'false');
  compactToggle.innerHTML = '<span></span><span></span><span></span>';
  document.body.appendChild(compactToggle);

  // Mobile menu overlay (appended to body)
  var mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'compact-mobile-menu';
  mobileOverlay.innerHTML =
    '<nav class="compact-mobile-nav" aria-label="Compact navigation">' +
      pages.map(function (p) {
        return '<a href="' + p[1] + '">' + p[0] + '</a>';
      }).join('') +
      '<a class="compact-book" href="book-appointment.html">Book Now</a>' +
    '</nav>';
  document.body.appendChild(mobileOverlay);
  var compactMobileNav = mobileOverlay.querySelector('.compact-mobile-nav');
  if (compactToggle && compactMobileNav) {
    compactToggle.addEventListener('click', function () {
      var isOpen = mobileOverlay.classList.toggle('menu-open');
      compactToggle.classList.toggle('is-open', isOpen);
      compactToggle.setAttribute('aria-expanded', String(isOpen));
      compactToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', isOpen);
    });

    mobileOverlay.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileOverlay.classList.remove('menu-open');
        compactToggle.classList.remove('is-open');
        compactToggle.setAttribute('aria-expanded', 'false');
        compactToggle.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('menu-open');
      });
    });
  }

  var siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    var headerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        compactNav.classList.toggle('is-visible', !entry.isIntersecting);
      });
    }, { threshold: 0, rootMargin: '-1px 0px 0px 0px' });
    headerObserver.observe(siteHeader);
  }

  // Events ribbon
  var events = [
    'Couples Workshop — Oct 5, Karachi',
    'Reiki Level 1 Training — Oct 12, Online',
    'Women\'s Circle — Oct 18, Lahore',
    'Numerology Masterclass — Oct 25, Online',
    'Yoga Retreat — Nov 2-3, Murree',
    'NLP Practitioner Training — Nov 8-10, Karachi',
    'Free Meditation Session — Nov 15, Online'
  ];

  var ribbon = document.createElement('div');
  ribbon.className = 'events-ribbon';
  ribbon.innerHTML =
    '<div class="events-ribbon-track">' +
      events.concat(events).map(function (e) {
        return '<span class="events-ribbon-item">' + e + '</span>';
      }).join('<span class="events-ribbon-dot">&#9679;</span>') +
    '</div>';
  document.body.appendChild(ribbon);

});
