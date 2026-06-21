// ZIFARAA Timepieces — Animations
// Lenis smooth scroll + GSAP ScrollTrigger choreography
// Follows video2website.md skill: 7 distinct animation types, never consecutive repeats

let lenis = null;
let scrollTriggers = [];

export function initAnimations() {
  if (window.ZIFARAA_REDUCED_MOTION || window.innerWidth <= 768) {
    _revealAll();
    return;
  }
  _initLenis();
  _onHomeReady();
}

export function pauseAnimations() {
  lenis?.stop();
  scrollTriggers.forEach(st => st.disable());
}

export function resumeAnimations() {
  lenis?.start();
  scrollTriggers.forEach(st => st.enable());
}

export function destroyScrollAnimations() {
  scrollTriggers.forEach(st => st.kill());
  scrollTriggers = [];
  gsap.killTweensOf('*');
}

// ── 1. Lenis smooth scroll ────────────────────────────────────────────────────
function _initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 1.25,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
    touchMultiplier: 1.8,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

// ── 2. Homepage animation setup ───────────────────────────────────────────────
function _onHomeReady() {
  // Wait for DOM to be fully rendered by the router
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (!document.getElementById('hero')) return; // not on homepage
      _initHeroAnimation();
      _initCollectionReveal();
      _initProductGrid();
      _initCraftsmanship();
      _initCounters();
      _initAbout();
      _initTestimonials();
      _initContact();
      _initFooter();
      _initHeroParallax();
    }, 100);
  });
}

// ── Re-run when router returns to home ───────────────────────────────────────
export function reinitHomeAnimations() {
  if (window.ZIFARAA_REDUCED_MOTION) return;
  destroyScrollAnimations();
  _onHomeReady();
}

// ── Hero: word-split scale-up with char stagger ───────────────────────────────
function _initHeroAnimation() {
  const chars    = document.querySelectorAll('.hero__char');
  const eyebrow  = document.querySelector('.hero__eyebrow');
  const sub      = document.querySelector('.hero__sub');
  const ctaWrap  = document.querySelector('.hero__cta-wrap');

  if (!chars.length) return;

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 1.8 });

  // Un-hide elements (they start hidden via CSS)
  gsap.set([eyebrow, sub, ctaWrap], { opacity: 0, y: 30 });
  gsap.set(chars, { opacity: 0, scaleY: 0.4, transformOrigin: 'bottom center' });

  tl.to(chars, {
    opacity: 1,
    scaleY: 1,
    stagger: { each: 0.055, from: 'start' },
    duration: 0.85,
    ease: 'power4.out'
  })
  .to(eyebrow, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
  .to(sub,     { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')
  .to(ctaWrap, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
}

// ── Hero: background parallax ─────────────────────────────────────────────────
function _initHeroParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg || typeof ScrollTrigger === 'undefined') return;

  const st = ScrollTrigger.create({
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    onUpdate: self => {
      gsap.set(heroBg, { y: self.progress * 120 });
    }
  });
  scrollTriggers.push(st);
}

// ── Collections: slide-left (cards enter from right) ─────────────────────────
function _initCollectionReveal() {
  const cards = document.querySelectorAll('.collection-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, x: 100 });

  const st = ScrollTrigger.create({
    trigger: '#collections',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        x: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out'
      });
    }
  });

  // Section label + heading
  _revealGroup('#collections .section-label, #collections .section-heading, #collections .section-body', 'fade-up');
  scrollTriggers.push(st);
}

// ── Product grid: stagger-up ──────────────────────────────────────────────────
function _initProductGrid() {
  const cards = document.querySelectorAll('.product-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 60 });

  const st = ScrollTrigger.create({
    trigger: '#products',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.08, from: 'start' },
        duration: 0.8,
        ease: 'power3.out'
      });
    }
  });

  _revealGroup('#products .section-label, #products .section-heading, #products .section-body', 'slide-right');
  scrollTriggers.push(st);
}

// ── Craftsmanship: slide-right (text) + scale-up (image) ─────────────────────
function _initCraftsmanship() {
  const text  = document.querySelector('.craft-text');
  const image = document.querySelector('.craft-image');
  if (!text) return;

  gsap.set(text.querySelectorAll('.section-label, .section-heading, .section-body, .craft-note'), { opacity: 0, x: -80 });
  if (image) gsap.set(image, { opacity: 0, scale: 0.9 });

  const st = ScrollTrigger.create({
    trigger: '#craftsmanship',
    start: 'top 65%',
    once: true,
    onEnter: () => {
      gsap.to(text.querySelectorAll('.section-label, .section-heading, .section-body, .craft-note'), {
        opacity: 1,
        x: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out'
      });
      if (image) {
        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: 'power2.out',
          delay: 0.2
        });
      }
    }
  });
  scrollTriggers.push(st);
}

// ── Counters: count up from 0 ─────────────────────────────────────────────────
function _initCounters() {
  document.querySelectorAll('.stat-number[data-stat-value]').forEach(el => {
    const target = parseFloat(el.getAttribute('data-stat-value'));
    if (isNaN(target)) return;

    gsap.from(el, {
      textContent: 0,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: target < 100 ? 1 : 10 },
      scrollTrigger: {
        trigger: el.closest('.stat-item') || el,
        start: 'top 80%',
        once: true,
      },
      onUpdate() {
        el.textContent = Math.round(parseFloat(el.textContent)).toLocaleString();
      }
    });
  });
}

// ── About: clip-reveal heading + fade-up body ─────────────────────────────────
function _initAbout() {
  const heading  = document.querySelector('#about .section-heading');
  const bodyEls  = document.querySelectorAll('#about .about-text p');
  const image    = document.querySelector('#about .about-image');
  const label    = document.querySelector('#about .section-label');
  const cta      = document.querySelector('#about .btn');

  if (!heading) return;

  if (image) gsap.set(image, { opacity: 0, scale: 0.92 });
  gsap.set(heading, { clipPath: 'inset(100% 0 0 0)' });
  gsap.set([label, ...bodyEls, cta].filter(Boolean), { opacity: 0, y: 28 });

  const st = ScrollTrigger.create({
    trigger: '#about',
    start: 'top 65%',
    once: true,
    onEnter: () => {
      const tl = gsap.timeline({ ease: 'power3.out' });
      if (image) tl.to(image, { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' }, 0);
      tl.to(label, { opacity: 1, y: 0, duration: 0.7 }, 0.1)
        .to(heading, { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' }, 0.2)
        .to(bodyEls, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 }, 0.4)
        .to(cta,     { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');
    }
  });
  scrollTriggers.push(st);
}

// ── Testimonials: fade-up with star reveal ────────────────────────────────────
function _initTestimonials() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  gsap.set(cards, { opacity: 0, y: 50 });

  const st = ScrollTrigger.create({
    trigger: '#testimonials',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        stagger: 0.18,
        duration: 0.85,
        ease: 'power3.out',
        onComplete() {
          document.querySelectorAll('.star').forEach((star, i) => {
            setTimeout(() => star.classList.add('revealed'), i * 40);
          });
        }
      });
    }
  });

  _revealGroup('#testimonials .section-label, #testimonials .section-heading', 'rotate-in');
  scrollTriggers.push(st);
}

// ── Contact: rotate-in ────────────────────────────────────────────────────────
function _initContact() {
  const formEls = document.querySelectorAll('.contact-form .form-group, .contact-form .btn');
  if (!formEls.length) return;

  gsap.set(formEls, { opacity: 0, y: 28, rotation: 1.5 });

  const st = ScrollTrigger.create({
    trigger: '#contact',
    start: 'top 70%',
    once: true,
    onEnter: () => {
      gsap.to(formEls, {
        opacity: 1,
        y: 0,
        rotation: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });

  _revealGroup('#contact .section-label, #contact .section-heading, #contact .section-body', 'fade-up');
  scrollTriggers.push(st);
}

// ── Footer: fade-up ────────────────────────────────────────────────────────────
function _initFooter() {
  const footerEls = document.querySelectorAll('.footer-brand, .footer-col');
  if (!footerEls.length) return;

  gsap.set(footerEls, { opacity: 0, y: 30 });

  const st = ScrollTrigger.create({
    trigger: '.site-footer',
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(footerEls, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.75,
        ease: 'power2.out'
      });
    }
  });
  scrollTriggers.push(st);
}

// ── Helper: generic reveal group ──────────────────────────────────────────────
function _revealGroup(selector, type) {
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  const props = {
    'fade-up':    { opacity: 0, y: 24 },
    'slide-left': { opacity: 0, x: -24 },
    'slide-right':{ opacity: 0, x: 24 },
    'rotate-in':  { opacity: 0, y: 20 },
  }[type] || { opacity: 0, y: 24 };

  gsap.set(els, props);

  const st = ScrollTrigger.create({
    trigger: els[0],
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(els, {
        opacity: 1,
        y: 0,
        x: 0,
        rotation: 0,
        stagger: 0.12,
        duration: 0.85,
        ease: 'power3.out'
      });
    }
  });
  scrollTriggers.push(st);
}

// ── No-JS / reduced motion fallback ──────────────────────────────────────────
function _revealAll() {
  document.querySelectorAll(
    '.reveal-fade-up, .reveal-slide-left, .reveal-slide-right, ' +
    '.reveal-scale-up, .reveal-stagger-up, .reveal-rotate-in, .reveal-clip'
  ).forEach(el => {
    el.style.opacity  = '1';
    el.style.transform= 'none';
    el.style.clipPath = 'none';
  });
  document.querySelectorAll('.star').forEach(s => s.classList.add('revealed'));
}
