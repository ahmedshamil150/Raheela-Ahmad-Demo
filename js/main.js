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
      <a class="contact-item" href="tel:+923334506846">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.53-.36 11.7 11.7 0 003.67.59 1.5 1.5 0 011.5 1.5V20a1.5 1.5 0 01-1.64 1.5A18 18 0 013 3.64 1.5 1.5 0 014.5 2h3.09a1.5 1.5 0 011.5 1.5 11.7 11.7 0 00.59 3.67 1.5 1.5 0 01-.36 1.53z"/></svg>
        +92 333 4506846
      </a>
      <a class="contact-item" href="mailto:raheelaahmadcoach@gmail.com">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.51l9 5.49 9-5.49V7H3zm18 10V9.84l-8.48 5.17a1 1 0 01-1.04 0L3 9.84V17h18z"/></svg>
        raheelaahmadcoach@gmail.com
      </a>
    </div>
  </div>
  <div class="brand-bar">
    <a class="brand-lockup" href="index.html" aria-label="Raheelaa Ahmad home">
      <img class="brand-logo" src="images/logo.png" alt="Raheelaa Ahmad Life Coach logo">
      <span class="brand-copy">
        <span class="brand-name">Raheelaa Ahmad</span>
        <span class="brand-tagline">Where you Let GO, GROW &amp; GLOW</span>
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
      <path d="M-40 46C165 30 345 74 555 110C775 148 1025 178 1440 204" stroke="#ffffff" stroke-width="11" opacity="0.34" filter="url(#phSilkBlur)"/>
      <path d="M-40 30C170 14 350 60 560 96C780 134 1030 166 1440 192" stroke="#ffffff" stroke-width="2.6" opacity="0.75"/>
      <path d="M-40 62C160 46 340 90 550 124C770 160 1020 190 1440 214" stroke="#ffffff" stroke-width="1.9" opacity="0.55"/>
      <path d="M-40 100C150 86 330 126 540 156C760 188 1010 216 1440 236" stroke="#ffffff" stroke-width="1.5" opacity="0.38"/>
      <path d="M-40 8C180 -6 360 38 570 76C790 116 1040 150 1440 178" stroke="#ffffff" stroke-width="1.5" opacity="0.3"/>
    </svg>`;

  const heroZen = `
    <svg class="page-hero__zen" viewBox="0 0 400 340" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="phStoneA" x1="0.2" y1="0" x2="0.5" y2="1">
          <stop offset="0" stop-color="#f1ede5"/>
          <stop offset="0.48" stop-color="#dad4c9"/>
          <stop offset="1" stop-color="#a89f91"/>
        </linearGradient>
        <linearGradient id="phStoneB" x1="0.25" y1="0" x2="0.55" y2="1">
          <stop offset="0" stop-color="#eeeae1"/>
          <stop offset="0.48" stop-color="#d4cec2"/>
          <stop offset="1" stop-color="#a29a8c"/>
        </linearGradient>
        <linearGradient id="phLeafG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#b6cd9e"/>
          <stop offset="1" stop-color="#6d8c5d"/>
        </linearGradient>
        <linearGradient id="phPetal" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stop-color="#e6eade"/>
          <stop offset="1" stop-color="#ffffff"/>
        </linearGradient>
        <radialGradient id="phGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.42"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </radialGradient>
        <filter id="phSoft" x="-40%" y="-160%" width="180%" height="420%">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
      </defs>
      <ellipse cx="190" cy="215" rx="155" ry="125" fill="url(#phGlow)"/>
      <ellipse cx="176" cy="332" rx="116" ry="8" fill="#ffffff" opacity="0.45" filter="url(#phSoft)"/>
      <g transform="translate(202,222) scale(1.28)">
        <path d="M-14 44C4 20 32 0 74 -22" stroke="#7d9a67" stroke-width="4" stroke-linecap="round"/>
        <g transform="translate(74,-22) rotate(-40) scale(1.02)"><path d="M0 0C18-13 44-15 68 0C44 15 18 13 0 0Z" fill="url(#phLeafG)"/><path d="M4 0H64" stroke="#61804f" stroke-width="1.4" opacity="0.55"/></g>
        <g transform="translate(56,-6) rotate(-76) scale(0.9)"><path d="M0 0C16-12 40-14 62 0C40 14 16 12 0 0Z" fill="url(#phLeafG)"/><path d="M4 0H58" stroke="#61804f" stroke-width="1.4" opacity="0.55"/></g>
        <g transform="translate(36,20) rotate(-112) scale(0.74)"><path d="M0 0C14-11 34-12 54 0C34 12 14 11 0 0Z" fill="url(#phLeafG)"/><path d="M4 0H50" stroke="#61804f" stroke-width="1.4" opacity="0.55"/></g>
        <g transform="translate(96,-34) rotate(-14) scale(0.94)"><path d="M0 0C16-12 40-14 60 0C40 14 16 12 0 0Z" fill="url(#phLeafG)"/><path d="M4 0H56" stroke="#61804f" stroke-width="1.4" opacity="0.55"/></g>
      </g>
      <ellipse cx="170" cy="301" rx="95" ry="25" fill="url(#phStoneA)" stroke="rgba(122,114,100,0.35)" stroke-width="1"/>
      <ellipse cx="172" cy="271" rx="78" ry="23" fill="url(#phStoneB)" stroke="rgba(122,114,100,0.32)" stroke-width="1"/>
      <ellipse cx="169" cy="243" rx="61" ry="20" fill="url(#phStoneA)" stroke="rgba(122,114,100,0.3)" stroke-width="1"/>
      <ellipse cx="172" cy="217" rx="46" ry="17" fill="url(#phStoneB)" stroke="rgba(122,114,100,0.3)" stroke-width="1"/>
      <ellipse cx="152" cy="295" rx="52" ry="10" fill="#ffffff" opacity="0.34"/>
      <ellipse cx="155" cy="265" rx="42" ry="8" fill="#ffffff" opacity="0.3"/>
      <g transform="translate(300,336) scale(2.1)">
        <g transform="rotate(-80) scale(0.66)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.55)" stroke-width="2.5"/></g>
        <g transform="rotate(-55) scale(0.8)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.5)" stroke-width="2.2"/></g>
        <g transform="rotate(-28) scale(0.92)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.5)" stroke-width="2"/></g>
        <g transform="rotate(28) scale(0.92)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.5)" stroke-width="2"/></g>
        <g transform="rotate(55) scale(0.8)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.5)" stroke-width="2.2"/></g>
        <g transform="rotate(80) scale(0.66)"><path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.55)" stroke-width="2.5"/></g>
        <path d="M0 0C-17-17-19-41 0-64C19-41 17-17 0 0Z" fill="url(#phPetal)" stroke="rgba(160,168,150,0.5)" stroke-width="2"/>
        <ellipse cx="0" cy="-9" rx="14" ry="8" fill="#f6efd8"/>
      </g>
    </svg>`;

  document.querySelectorAll('.page-hero').forEach(function (hero) {
    hero.querySelectorAll('.page-hero__glow, .page-hero__ring, .page-hero__glyph').forEach(function (node) {
      node.parentNode.removeChild(node);
    });
    if (!hero.querySelector('.page-hero__silk')) {
      hero.insertAdjacentHTML('afterbegin', heroSilk + heroZen);
    }
  });

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
      '<img src="images/logo.png" alt="Raheelaa Ahmad logo">' +
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
