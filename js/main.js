const pages = [
  ['About', 'about.html', 'about'],
  ['Life Coaching', 'life-coaching.html', 'life-coaching'],
  ['Reiki', 'reiki.html', 'reiki'],
  ['PHYSIOTHERAPY', 'individual-therapy.html', 'individual-therapy'],
  ['Couples Counselling', 'couples-counselling.html', 'couples-counselling'],
  ['Yoga', 'yoga.html', 'yoga'],
  ['Numerology/Psychic readings', 'numerology-readings.html', 'numerology-readings'],
  ['Training & Workshops', 'training-workshops.html', 'training-workshops'],
  ['Blog', 'blog.html', 'blog']
];

const socialLinks = `
  <div class="social-links" aria-label="Social links">
    <a class="social-link" href="#" aria-label="Facebook">f</a>
    <a class="social-link" href="#" aria-label="Instagram">◎</a>
    <a class="social-link" href="#" aria-label="YouTube">▶</a>
    <a class="social-link" href="#" aria-label="LinkedIn">in</a>
  </div>`;

const header = `
<header class="site-header">
  <div class="utility-bar">
    ${socialLinks}
    <div class="contact-links">
      <a class="contact-item" href="tel:+923001234567">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1.5 1.5 0 011.53-.36 11.7 11.7 0 003.67.59 1.5 1.5 0 011.5 1.5V20a1.5 1.5 0 01-1.64 1.5A18 18 0 013 3.64 1.5 1.5 0 014.5 2h3.09a1.5 1.5 0 011.5 1.5 11.7 11.7 0 00.59 3.67 1.5 1.5 0 01-.36 1.53z"/></svg>
        +92 300 1234567
      </a>
      <a class="contact-item" href="mailto:info@raheelaahmed.com">
        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm0 2v.51l9 5.49 9-5.49V7H3zm18 10V9.84l-8.48 5.17a1 1 0 01-1.04 0L3 9.84V17h18z"/></svg>
        info@raheelaahmed.com
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

});
