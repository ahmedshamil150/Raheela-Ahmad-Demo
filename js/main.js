const pages = [
  ['About', 'about.html', 'about'],
  ['Life Coaching', 'life-coaching.html', 'life-coaching'],
  ['Reiki', 'reiki.html', 'reiki'],
  ['Individual Therapy', 'individual-therapy.html', 'individual-therapy'],
  ['Couples Counselling', 'couples-counselling.html', 'couples-counselling'],
  ['Yoga', 'yoga.html', 'yoga'],
  ['Numerology Readings', 'numerology-readings.html', 'numerology-readings'],
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
    <a class="brand-lockup" href="index.html" aria-label="Raheela Ahmed home">
      <img class="brand-logo" src="images/logo.png" alt="Raheela Ahmed Life Coach logo">
      <span class="brand-copy">
        <span class="brand-name">Raheelaa Ahmad</span>
        <span class="brand-tagline">LIVE. LIFE. LOVINGLY.</span>
      </span>
    </a>
  </div>
  <nav class="main-nav" aria-label="Primary navigation">
    <ul class="nav-links">
      ${pages.map(([label, href, key]) => `<li><a class="nav-link" data-nav="${key}" href="${href}">${label}</a></li>`).join('')}
      <li><a class="nav-link nav-appointment" data-nav="book-appointment" href="book-appointment.html">Book an Appointment <span aria-hidden="true">▣</span></a></li>
    </ul>
  </nav>
</header>`;

document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('site-header');
  if (placeholder) placeholder.innerHTML = header;

  const page = document.body.dataset.page;
  const activeLink = document.querySelector(`[data-nav="${page}"]`);
  if (activeLink) activeLink.classList.add('active');
});
