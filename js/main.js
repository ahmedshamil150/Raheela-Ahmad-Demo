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
        <li><a href="/quote" id="nav-quote">Get a Quote</a></li>
        <li><a href="/contact" id="nav-contact">Contact</a></li>
        <li><a href="/quote" class="nav-cta">Get a Quote</a></li>
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
          <li><a href="https://wa.me/923155062628" target="_blank" rel="noopener">WhatsApp: +92 315 5062628</a></li>
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

const whatsappHTML = `
<a href="https://wa.me/923155062628" target="_blank" rel="noopener" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
`;

document.addEventListener('DOMContentLoaded', function () {
  const headerPlaceholder = document.getElementById('header-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (headerPlaceholder) headerPlaceholder.innerHTML = headerHTML;
  if (footerPlaceholder) footerPlaceholder.innerHTML = footerHTML;
  document.body.insertAdjacentHTML('beforeend', whatsappHTML);

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
