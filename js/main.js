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
