/**
 * MaskedHeading – vanilla JS + CSS
 * Text with image/video showing through the letters.
 * Parallax, drift, and reveal animations.
 */
(function () {
  'use strict';

  function createMaskedHeading(el) {
    var text = el.getAttribute('data-heading-text') || el.textContent.trim();
    var src = el.getAttribute('data-heading-src') || '';
    var tag = el.getAttribute('data-heading-tag') || 'h1';
    var mediaType = el.getAttribute('data-heading-media') || 'image';
    var reveal = el.getAttribute('data-heading-reveal') || 'rise';
    var trigger = el.getAttribute('data-heading-trigger') || 'view';
    var align = el.getAttribute('data-heading-align') || 'center';
    var weight = parseInt(el.getAttribute('data-heading-weight'), 10) || 700;
    var tracking = parseFloat(el.getAttribute('data-heading-tracking')) || -0.03;
    var lineHeight = parseFloat(el.getAttribute('data-heading-line-height')) || 1.06;
    var textScale = parseFloat(el.getAttribute('data-heading-text-scale')) || 0.115;
    var fillScale = parseFloat(el.getAttribute('data-heading-fill-scale')) || 1.25;
    var parallax = parseFloat(el.getAttribute('data-heading-parallax')) || 26;
    var drift = parseFloat(el.getAttribute('data-heading-drift')) || 18;
    var brightness = parseFloat(el.getAttribute('data-heading-brightness')) || 1;
    var saturation = parseFloat(el.getAttribute('data-heading-saturation')) || 1;
    var grayscale = el.hasAttribute('data-heading-grayscale');
    var duration = parseFloat(el.getAttribute('data-heading-duration')) || 1.1;
    var stagger = parseFloat(el.getAttribute('data-heading-stagger')) || 0.09;

    var words = text.split(/\s+/).filter(Boolean);
    var id = 'mh-' + Math.random().toString(36).slice(2, 9);

    // Build DOM
    var root = document.createElement(tag);
    root.className = 'masked-heading' + (el.className ? ' ' + el.className : '');
    root.style.textAlign = align;
    root.style.fontWeight = weight;
    root.style.letterSpacing = tracking + 'em';
    root.style.lineHeight = lineHeight;

    // Measure layer (invisible, used for layout)
    var measure = document.createElement('span');
    measure.className = 'masked-heading__measure';

    var wordEls = [];
    var glyphEls = [];

    words.forEach(function (word, i) {
      var wordEl = document.createElement('span');
      wordEl.className = 'masked-heading__word';
      wordEl.textContent = word;
      wordEls.push(wordEl);
      measure.appendChild(wordEl);
      if (i < words.length - 1) measure.appendChild(document.createTextNode(' '));
    });

    // SVG defs for clip path
    var svgNS = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('class', 'masked-heading__defs');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');

    var defs = document.createElementNS(svgNS, 'defs');
    var clipPath = document.createElementNS(svgNS, 'clipPath');
    clipPath.setAttribute('id', id);
    clipPath.setAttribute('clipPathUnits', 'userSpaceOnUse');

    words.forEach(function (word, i) {
      var textEl = document.createElementNS(svgNS, 'text');
      textEl.textContent = word;
      glyphEls.push(textEl);
      clipPath.appendChild(textEl);
    });

    defs.appendChild(clipPath);
    svg.appendChild(defs);

    // Reveal layer
    var revealEl = document.createElement('span');
    revealEl.className = 'masked-heading__reveal';

    var clip = document.createElement('span');
    clip.className = 'masked-heading__clip';
    clip.style.clipPath = 'url(#' + id + ')';

    var media = document.createElement('span');
    media.className = 'masked-heading__media';

    var source;
    if (mediaType === 'video') {
      source = document.createElement('video');
      source.className = 'masked-heading__source';
      source.src = src;
      source.poster = el.getAttribute('data-heading-poster') || '';
      source.autoplay = true;
      source.muted = true;
      source.loop = true;
      source.playsInline = true;
    } else {
      source = document.createElement('img');
      source.className = 'masked-heading__source';
      source.src = src;
      source.alt = '';
      source.draggable = false;
    }

    media.appendChild(source);
    clip.appendChild(media);
    revealEl.appendChild(clip);

    root.appendChild(measure);
    root.appendChild(svg);
    root.appendChild(revealEl);

    // Replace original element
    el.parentNode.replaceChild(root, el);

    // --- State ---
    var offset = { x: 0, y: 0, tx: 0, ty: 0 };
    var clock = 0;
    var lastTime = performance.now();
    var raf = 0;

    // --- Sync: position glyphs to match measure words ---
    function sync() {
      var W = root.clientWidth;
      root.style.fontSize = clamp(W * textScale, 20, 200).toFixed(1) + 'px';

      for (var i = 0; i < wordEls.length; i++) {
        var w = wordEls[i];
        var g = glyphEls[i];
        if (!w || !g) continue;
        g.setAttribute('x', w.offsetLeft);
        g.setAttribute('y', w.offsetTop + w.offsetHeight);
        g.style.fontSize = getComputedStyle(w).fontSize;
        g.style.fontFamily = getComputedStyle(w).fontFamily;
        g.style.fontWeight = getComputedStyle(w).fontWeight;
      }
      placeMedia();
    }

    // --- Place media with parallax + drift ---
    function placeMedia() {
      var W = root.clientWidth;
      var H = root.clientHeight;
      var maxX = Math.max(0, ((fillScale - 1) / 2) * W);
      var maxY = Math.max(0, ((fillScale - 1) / 2) * H);

      var mx = clamp(offset.x, -maxX, maxX);
      var my = clamp(offset.y, -maxY, maxY);

      media.style.transform = 'translate3d(' + mx.toFixed(2) + 'px,' + my.toFixed(2) + 'px,0) scale(' + fillScale + ')';
      var filterStr = 'brightness(' + brightness + ') saturate(' + saturation + ')' + (grayscale ? ' grayscale(1)' : '');
      media.style.filter = filterStr;
    }

    // --- Animation frame: drift + easing ---
    function frame(now) {
      var dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      clock += dt;

      var dx = Math.sin(clock * 0.21) * drift;
      var dy = Math.cos(clock * 0.17) * drift * 0.6;

      var ease = 1 - Math.exp(-dt / 0.18);
      offset.x += (offset.tx + dx - offset.x) * ease;
      offset.y += (offset.ty + dy - offset.y) * ease;

      placeMedia();
      raf = requestAnimationFrame(frame);
    }

    // --- Mouse parallax ---
    function onMove(e) {
      if (parallax <= 0) return;
      var r = root.getBoundingClientRect();
      var nx = ((e.clientX - r.left) / (r.width || 1)) * 2 - 1;
      var ny = ((e.clientY - r.top) / (r.height || 1)) * 2 - 1;
      offset.tx = clamp(nx, -1, 1) * -parallax;
      offset.ty = clamp(ny, -1, 1) * -parallax;
    }

    function onLeave() {
      offset.tx = 0;
      offset.ty = 0;
    }

    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(frame);

    // --- Resize ---
    var ro = new ResizeObserver(sync);
    ro.observe(root);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(sync).catch(function () {});
    }

    // --- Reveal animation ---
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function settleReveal() {
      revealEl.style.opacity = '1';
      revealEl.style.transform = 'none';
      revealEl.style.clipPath = 'inset(0% 0% 0% 0%)';
      root.classList.add('is-revealed');
    }

    function setRestState() {
      if (reveal === 'rise') {
        root.classList.add('is-pre-reveal');
      } else if (reveal === 'wipe') {
        revealEl.style.clipPath = 'inset(0% 100% 0% 0%)';
      } else if (reveal === 'fade') {
        revealEl.style.opacity = '0';
        revealEl.style.transform = 'scale(1.08)';
      }
    }

    function playReveal() {
      root.classList.remove('is-pre-reveal');
      root.classList.add('is-revealed');

      if (reveal === 'rise') {
        // Animate each word with stagger
        wordEls.forEach(function (w, i) {
          w.style.transition = 'none';
          w.style.transform = 'translateY(1.15em)';
          w.style.opacity = '0';
          setTimeout(function () {
            w.style.transition = 'transform ' + duration + 's cubic-bezier(0.16, 1, 0.3, 1) ' + (i * stagger) + 's, opacity ' + duration + 's ease ' + (i * stagger) + 's';
            w.style.transform = 'translateY(0)';
            w.style.opacity = '1';
          }, 20);
        });
        settleReveal();
      } else if (reveal === 'wipe') {
        revealEl.style.transition = 'clip-path ' + duration + 's cubic-bezier(0.65, 0, 0.35, 1)';
        revealEl.style.clipPath = 'inset(0% 0% 0% 0%)';
        settleReveal();
      } else {
        revealEl.style.transition = 'opacity ' + duration + 's ease, transform ' + duration + 's cubic-bezier(0.16, 1, 0.3, 1)';
        revealEl.style.opacity = '1';
        revealEl.style.transform = 'none';
        settleReveal();
      }
    }

    if (reveal === 'none' || reduceMotion) {
      settleReveal();
    } else if (trigger === 'view') {
      setRestState();
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          playReveal();
          io.disconnect();
        }
      }, { threshold: 0.25 });
      io.observe(root);
    } else if (trigger === 'hover') {
      settleReveal();
      root.addEventListener('pointerenter', playReveal);
    } else {
      // mount
      playReveal();
    }

    sync();
  }

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    var els = document.querySelectorAll('.masked-heading-init');
    for (var i = 0; i < els.length; i++) {
      createMaskedHeading(els[i]);
    }
  });

  // Expose for manual use
  window.MaskedHeading = createMaskedHeading;
})();
