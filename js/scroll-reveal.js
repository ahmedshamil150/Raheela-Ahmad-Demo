/**
 * Scroll Reveal – vanilla JS with IntersectionObserver
 * Adds .is-visible to elements with .reveal classes when they enter viewport.
 */
(function () {
  'use strict';

  function initScrollReveal() {
    var targets = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .timeline-item, .services-grid, .benefits-grid, .steps-grid, .offerings-grid, .material-grid, .reviews-grid, .faq-list, .workshop-gallery, .cta-section, .booking-form-wrap'
    );

    if (!targets.length) return;

    // Check for reduced motion preference
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      for (var i = 0; i < targets.length; i++) {
        targets[i].classList.add('is-visible');
      }
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    for (var j = 0; j < targets.length; j++) {
      observer.observe(targets[j]);
    }
  }

  // Init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }
})();
