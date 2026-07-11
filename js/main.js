const headerHTML = `
<header class="site-header" id="siteHeader">
  <div class="header-inner">
    <a href="/" class="logo">
      <div class="logo-icon">Q</div>
      Quality <span>Business Systems</span>
    </a>
    <nav>
      <ul class="nav-links" id="navLinks">
        <li><a href="/" id="nav-home">Home</a></li>
        <li><a href="/services" id="nav-services">Services</a></li>
        <li><a href="/about" id="nav-about">About</a></li>
        <li><a href="/testimonials" id="nav-testimonials">Testimonials</a></li>
        <li><a href="/contact" id="nav-contact">Contact</a></li>
        <li><a href="/contact" class="nav-cta">Get a Quote</a></li>
      </ul>
    </nav>
    <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
`;

const footerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="/" class="logo" style="color:#fff;">
          <div class="logo-icon">Q</div>
          Quality <span style="color:#c44536;">Business Systems</span>
        </a>
        <p>Your trusted partner for office equipment sales, repairs, and rentals in Rawalpindi & Islamabad.</p>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="/services#repair">Repair & Maintenance</a></li>
          <li><a href="/services#rental">Equipment Rentals</a></li>
          <li><a href="/services#sales">Sales & Products</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:+923155062628">+92 315 5062628</a></li>
          <li><a>Shalley Valley, Rawalpindi</a></li>
          <li><a>Mon-Sat: 9:00 AM - 7:00 PM</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Quality Business Systems. All rights reserved.</p>
      <p>Designed with care for our customers</p>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', function () {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;

  const page = document.body.dataset.page || '';
  if (page) {
    const link = document.getElementById('nav-' + page);
    if (link) link.classList.add('active');
  }

  const header = document.getElementById('siteHeader');
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('active');
        nav.classList.remove('open');
      });
    });
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
    observer.observe(el);
  });

  const statNumbers = document.querySelectorAll('.hero-stat h3');
  if (statNumbers.length && !sessionStorage.getItem('statsAnimated')) {
    const animateValue = function (el, start, end, duration) {
      let startTimestamp = null;
      const step = function (timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        el.textContent = current + (el.textContent.includes('%') ? '%' : el.textContent.includes('+') ? '+' : '');
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          statNumbers.forEach(function (stat) {
            const text = stat.textContent;
            const num = parseInt(text.replace(/[^0-9]/g, ''));
            if (!isNaN(num)) {
              stat.textContent = '0';
              animateValue(stat, 0, num, 1500);
            }
          });
          sessionStorage.setItem('statsAnimated', 'true');
          heroObserver.disconnect();
        }
      });
    });
    heroObserver.observe(document.querySelector('.hero-stats'));
  }
});
