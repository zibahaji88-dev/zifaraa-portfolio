import { t, currentLocale } from '../i18n.js';
import { COLLECTIONS, PRODUCTS, formatPrice } from '../../data/products.js';
import { cart, wishlist, track } from '../store.js';
import { openProductModal } from '../modal.js';

export function renderHome(app) {
  app.innerHTML = '';
  app.className = 'page-enter';

  app.appendChild(_hero());
  app.appendChild(_collections());
  app.appendChild(_products());
  app.appendChild(_craftsmanship());
  app.appendChild(_about());
  app.appendChild(_testimonials());
  app.appendChild(_contact());
  app.appendChild(_footer());

  _wireHome();
}

// ── 1. Hero ──────────────────────────────────────────────────────────────────
function _hero() {
  const sec = document.createElement('section');
  sec.className = 'hero';
  sec.id = 'hero';
  sec.setAttribute('aria-label', 'ZIFARAA Timepieces hero');

  sec.innerHTML = `
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="container hero__content">
      <span class="hero__eyebrow reveal-fade-up" data-i18n="hero.eyebrow">${t('hero.eyebrow')}</span>
      <h1 class="hero__heading" aria-label="ZIFARAA">
        <span class="hero__word" aria-hidden="true">
          ${[...'ZIFA'].map(c => `<span class="hero__char">${c}</span>`).join('')}
        </span>
        <span class="hero__word hero__word--indent" aria-hidden="true">
          ${[...'RAA'].map(c => `<span class="hero__char">${c}</span>`).join('')}
        </span>
      </h1>
      <p class="hero__sub reveal-fade-up" data-i18n="hero.sub">${t('hero.sub')}</p>
      <div class="hero__cta-wrap reveal-fade-up">
        <a href="#collections" class="btn btn--primary" data-section-link="collections" data-i18n="hero.cta">${t('hero.cta')}</a>
        <span class="hero__scroll" aria-hidden="true">
          <span class="hero__scroll-line"></span>
          <span data-i18n="hero.scroll">${t('hero.scroll')}</span>
        </span>
      </div>
    </div>
  `;
  return sec;
}

// ── 2. Collections ────────────────────────────────────────────────────────────
function _collections() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'collections';

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="collections.label">${t('collections.label')}</span>
      <h2 class="section-heading reveal-slide-left" data-i18n="collections.heading">${t('collections.heading')}</h2>
      <p class="section-body reveal-slide-left" data-i18n="collections.body">${t('collections.body')}</p>
      <div class="collections-grid">
        ${COLLECTIONS.map((col, i) => `
          <article class="collection-card reveal-slide-left" data-collection="${col.id}" style="--delay:${i * 0.12}s" tabindex="0" role="button" aria-label="${col.name} collection">
            <img class="collection-card__img"
                 src="${col.cover}"
                 alt="${col.name} collection — ${col.tagline}"
                 loading="${i < 2 ? 'eager' : 'lazy'}"
                 width="800" height="1067">
            <div class="collection-card__overlay" aria-hidden="true"></div>
            <div class="collection-card__body">
              <h3 class="collection-card__name">${col.name}</h3>
              <p class="collection-card__tagline">${col.tagline}</p>
              <span class="btn btn--ghost btn--sm" data-i18n="collections.explore">${t('collections.explore')}</span>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  return sec;
}

// ── 3. Marquee ────────────────────────────────────────────────────────────────
function _marquee(key) {
  const text = t(key);
  const sec = document.createElement('div');
  sec.className = 'marquee-section';
  sec.setAttribute('aria-hidden', 'true');
  // Duplicate text so it loops seamlessly
  sec.innerHTML = `
    <div class="marquee-track" id="marquee-main">
      <span class="marquee-text">${text.repeat(3)}</span>
      <span class="marquee-text" aria-hidden="true">${text.repeat(3)}</span>
    </div>
  `;
  return sec;
}

// ── 4. Product Showcase ───────────────────────────────────────────────────────
function _products() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'products';

  const filterBtns = ['all', ...COLLECTIONS.map(c => c.id)];

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="products.label">${t('products.label')}</span>
      <h2 class="section-heading reveal-slide-right" data-i18n="products.heading">${t('products.heading')}</h2>
      <p class="section-body reveal-slide-right" data-i18n="products.body">${t('products.body')}</p>

      <div class="products-filter" role="group" aria-label="Filter by collection">
        ${filterBtns.map((id, i) => {
          const label = i === 0 ? t('products.filter.all')
            : COLLECTIONS.find(c => c.id === id)?.name || id;
          return `<button class="btn btn--filter${i === 0 ? ' btn--filter-active' : ''}"
                          data-filter="${id}"
                          aria-pressed="${i === 0}">${label}</button>`;
        }).join('')}
      </div>

      <div class="products-grid" id="products-grid">
        ${PRODUCTS.map((p, i) => _productCard(p, i)).join('')}
      </div>
    </div>
  `;
  return sec;
}

function _productCard(p, i = 0) {
  const inWish = wishlist.has(p.id);
  const price  = formatPrice(p.price, p.currency, currentLocale());
  return `
    <article class="product-card reveal-stagger-up"
             data-product-id="${p.id}"
             data-collection="${p.collection}"
             style="--delay:${(i % 3) * 0.1}s">
      <div class="product-card__img-wrap">
        <img class="product-card__img"
             src="${p.images[0]}"
             alt="${p.name}"
             loading="lazy"
             width="400" height="533">
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
        <button class="product-card__wish${inWish ? ' is-wished' : ''}"
                data-wish-id="${p.id}"
                aria-label="${inWish ? t('modal.remove_wish') : t('modal.add_wish')}: ${p.name}"
                aria-pressed="${inWish}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span class="product-card__collection">${COLLECTIONS.find(c => c.id === p.collection)?.name || ''}</span>
          <span class="product-card__price">${price}</span>
        </div>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__desc">${p.description.slice(0, 90)}…</p>
        <div class="product-card__actions">
          <button class="btn btn--primary btn--sm product-card__details" data-product-id="${p.id}" data-i18n-aria="products.view" aria-label="${t('products.view')}: ${p.name}">
            ${t('products.view')}
          </button>
          <button class="btn btn--gold btn--sm product-card__cart${!p.inStock ? ' btn--disabled' : ''}"
                  data-cart-id="${p.id}"
                  ${!p.inStock ? 'aria-disabled="true"' : ''}
                  aria-label="${p.inStock ? t('products.add_cart') : t('products.notify')}: ${p.name}">
            ${p.inStock ? t('products.add_cart') : t('products.notify')}
          </button>
        </div>
      </div>
    </article>
  `;
}

// ── 5. Craftsmanship ──────────────────────────────────────────────────────────
function _craftsmanship() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'craftsmanship';

  const stats = [
    { key: 'craft.stat1', val: 'craft.stat1.value', label: 'craft.stat1.label' },
    { key: 'craft.stat2', val: 'craft.stat2.value', label: 'craft.stat2.label' },
    { key: 'craft.stat3', val: 'craft.stat3.value', label: 'craft.stat3.label' },
    { key: 'craft.stat4', val: 'craft.stat4.value', label: 'craft.stat4.label' },
  ];

  sec.innerHTML = `
    <div class="container">
      <div class="craft-split">
        <div class="craft-text">
          <span class="section-label reveal-fade-up" data-i18n="craft.label">${t('craft.label')}</span>
          <h2 class="section-heading reveal-slide-right" data-i18n="craft.heading">${t('craft.heading')}</h2>
          <p class="section-body reveal-slide-right" data-i18n="craft.body">${t('craft.body')}</p>
          <p class="craft-note reveal-slide-right" data-i18n="craft.note">${t('craft.note')}</p>
          <div class="craft-stats">
            ${stats.map(s => `
              <div class="stat-item reveal-stagger-up">
                <span class="stat-number" data-stat-value="${t(s.val).replace(/[^\d.]/g, '')}" data-i18n="${s.val}">0</span>
                <span class="stat-label" data-i18n="${s.label}">${t(s.label)}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="craft-image reveal-scale-up">
          <img src="https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=800&q=80&fm=webp"
               alt="Master watchmaker at work"
               loading="lazy"
               width="800" height="1067">
        </div>
      </div>
    </div>
  `;
  return sec;
}

// ── Craft marquee ─────────────────────────────────────────────────────────────
function _craftMarquee() {
  const text = t('craft.marquee');
  const sec = document.createElement('div');
  sec.className = 'marquee-section marquee-section--craft';
  sec.setAttribute('aria-hidden', 'true');
  sec.innerHTML = `
    <div class="marquee-track" id="marquee-craft">
      <span class="marquee-text marquee-text--light">${text.repeat(4)}</span>
      <span class="marquee-text marquee-text--light" aria-hidden="true">${text.repeat(4)}</span>
    </div>
  `;
  return sec;
}

// ── 6. About ─────────────────────────────────────────────────────────────────
function _about() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'about';

  sec.innerHTML = `
    <div class="container">
      <div class="about-inner">
        <div class="about-image reveal-scale-up">
          <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80&fm=webp"
               alt="ZIFARAA — a curated collection of luxury timepieces"
               loading="lazy"
               width="800" height="1067">
        </div>
        <div class="about-text">
          <span class="section-label reveal-fade-up" data-i18n="about.label">${t('about.label')}</span>
          <h2 class="section-heading reveal-clip" data-i18n="about.heading">${t('about.heading')}</h2>
          <p class="reveal-fade-up" data-i18n="about.body1">${t('about.body1')}</p>
          <p class="reveal-fade-up" data-i18n="about.body2">${t('about.body2')}</p>
          <p class="reveal-fade-up" data-i18n="about.body3">${t('about.body3')}</p>
          <a href="#contact" class="btn btn--primary reveal-fade-up" data-section-link="contact" data-i18n="about.cta">${t('about.cta')}</a>
        </div>
      </div>
    </div>
  `;
  return sec;
}

// ── 7. Testimonials ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "ZIFARAA is the only place I've found where the curation matches my own standards. Every piece I've ordered has exceeded the description.",
    author: 'James H.',
    location: 'London',
    watch: 'Imperiale Noir',
    rating: 5
  },
  {
    quote: "Bought the Ascend Titanium for a trip to the Alps. Fourteen days, −12°C nights, multiple drops. It performed flawlessly. The service was just as precise.",
    author: 'Marco V.',
    location: 'Milan',
    watch: 'Ascend Titanium',
    rating: 5
  },
  {
    quote: "As a collector of fifteen years I am difficult to impress. ZIFARAA impressed me — both with the Celeste Tourbillon and with the speed and care of delivery.",
    author: 'Priya S.',
    location: 'Singapore',
    watch: 'Celeste Tourbillon',
    rating: 5
  }
];

function _testimonials() {
  const sec = document.createElement('section');
  sec.className = 'section';
  sec.id = 'testimonials';

  sec.innerHTML = `
    <div class="container">
      <span class="section-label reveal-fade-up" data-i18n="testimonials.label">${t('testimonials.label')}</span>
      <h2 class="section-heading reveal-rotate-in" data-i18n="testimonials.heading">${t('testimonials.heading')}</h2>
      <div class="testimonials-grid">
        ${TESTIMONIALS.map((item, i) => `
          <blockquote class="testimonial-card reveal-fade-up" style="--delay:${i * 0.15}s">
            <div class="testimonial-stars" aria-label="${item.rating} out of 5 stars">
              ${'★'.repeat(item.rating).split('').map(s =>
                `<span class="star" aria-hidden="true">${s}</span>`
              ).join('')}
            </div>
            <p class="testimonial-quote">"${item.quote}"</p>
            <footer class="testimonial-footer">
              <cite class="testimonial-author">${item.author}</cite>
              <span class="testimonial-meta">${item.location} — ${item.watch}</span>
            </footer>
          </blockquote>
        `).join('')}
      </div>
    </div>
  `;
  return sec;
}

// ── 8. Contact ───────────────────────────────────────────────────────────────
function _contact() {
  const sec = document.createElement('section');
  sec.className = 'section section--dark';
  sec.id = 'contact';

  sec.innerHTML = `
    <div class="container">
      <div class="contact-inner">
        <div class="contact-text">
          <span class="section-label reveal-fade-up" data-i18n="contact.label">${t('contact.label')}</span>
          <h2 class="section-heading reveal-rotate-in" data-i18n="contact.heading">${t('contact.heading')}</h2>
          <p class="section-body reveal-fade-up" data-i18n="contact.body">${t('contact.body')}</p>
        </div>
        <form class="contact-form reveal-slide-left" id="contact-form" novalidate>
          <div class="form-group">
            <label class="form-label" for="contact-name" data-i18n="contact.name">${t('contact.name')}</label>
            <input class="form-input" type="text" id="contact-name" name="name"
                   autocomplete="name" required
                   data-i18n-placeholder="contact.name">
            <span class="form-error" id="contact-name-err" role="alert"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email" data-i18n="contact.email">${t('contact.email')}</label>
            <input class="form-input" type="email" id="contact-email" name="email"
                   autocomplete="email" required
                   data-i18n-placeholder="contact.email">
            <span class="form-error" id="contact-email-err" role="alert"></span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-phone" data-i18n="contact.phone">${t('contact.phone')}</label>
            <input class="form-input" type="tel" id="contact-phone" name="phone"
                   autocomplete="tel"
                   data-i18n-placeholder="contact.phone">
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-msg" data-i18n="contact.message">${t('contact.message')}</label>
            <textarea class="form-input form-textarea" id="contact-msg" name="message"
                      rows="4" required
                      data-i18n-placeholder="contact.message"></textarea>
            <span class="form-error" id="contact-msg-err" role="alert"></span>
          </div>
          <button type="submit" class="btn btn--gold btn--full">
            <span data-i18n="contact.submit">${t('contact.submit')}</span>
          </button>
          <div class="form-success" id="contact-success" hidden
               data-i18n="contact.success">${t('contact.success')}</div>
        </form>
      </div>
    </div>
  `;
  return sec;
}

// ── 9. Footer ────────────────────────────────────────────────────────────────
function _footer() {
  const el = document.createElement('footer');
  el.className = 'site-footer';
  el.setAttribute('role', 'contentinfo');

  el.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <!-- Brand column -->
        <div class="footer-brand">
          <a href="#/" class="footer-logo" aria-label="ZIFARAA Timepieces home">
            <span class="footer-logo__name">ZIFARAA</span>
            <span class="footer-logo__sub">TIMEPIECES</span>
          </a>
          <p class="footer-tagline" data-i18n="footer.tagline">${t('footer.tagline')}</p>
          <address class="footer-address not-italic">
            <p data-i18n="footer.address">${t('footer.address')}</p>
            <a href="mailto:hello@zifaraa.com" data-i18n="footer.email">${t('footer.email')}</a>
            <a href="tel:+41220000000" data-i18n="footer.phone">${t('footer.phone')}</a>
          </address>
          <div class="footer-social" aria-label="Social media">
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.ig')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.x')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="footer-social__link" aria-label="${t('footer.social.yt')}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
          </div>
        </div>

        <!-- Collections column -->
        <div class="footer-col">
          <h3 class="footer-col__heading" data-i18n="footer.collections">${t('footer.collections')}</h3>
          <ul class="footer-col__list">
            ${COLLECTIONS.map(c => `
              <li><a href="#/" class="footer-col__link" data-filter="${c.id}">${c.name}</a></li>
            `).join('')}
          </ul>
        </div>

        <!-- Company column -->
        <div class="footer-col">
          <h3 class="footer-col__heading" data-i18n="footer.about">${t('footer.about')}</h3>
          <ul class="footer-col__list">
            <li><a href="#/" class="footer-col__link" data-section-link="about" data-i18n="footer.about">${t('footer.about')}</a></li>
            <li><a href="#/" class="footer-col__link" data-section-link="contact" data-i18n="footer.contact">${t('footer.contact')}</a></li>
            <li><a href="#" class="footer-col__link" data-i18n="footer.care">${t('footer.care')}</a></li>
          </ul>
        </div>

        <!-- Legal column -->
        <div class="footer-col">
          <h3 class="footer-col__heading" data-i18n="footer.shipping">${t('footer.shipping')}</h3>
          <ul class="footer-col__list">
            <li><a href="#" class="footer-col__link" data-i18n="footer.shipping">${t('footer.shipping')}</a></li>
            <li><a href="#" class="footer-col__link" data-i18n="footer.privacy">${t('footer.privacy')}</a></li>
            <li><a href="#" class="footer-col__link" data-i18n="footer.terms">${t('footer.terms')}</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy" data-i18n="footer.copyright">${t('footer.copyright')}</p>
        <div class="footer-bottom__langs" aria-label="Language selection">
          <button class="lang-btn" data-lang="en">EN</button>
          <button class="lang-btn" data-lang="ar">AR</button>
          <button class="lang-btn" data-lang="fa">FA</button>
        </div>
      </div>
    </div>
  `;
  return el;
}

// ── Wire home interactions ────────────────────────────────────────────────────
function _wireHome() {
  // Collection card clicks — filter products
  document.querySelectorAll('.collection-card[data-collection]').forEach(card => {
    card.addEventListener('click', () => {
      const col = card.dataset.collection;
      _filterProducts(col);
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });

  // Product filter buttons
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.remove('btn--filter-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('btn--filter-active');
      btn.setAttribute('aria-pressed', 'true');
      _filterProducts(btn.dataset.filter);
    });
  });

  // Product detail buttons
  document.querySelectorAll('.product-card__details').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.productId;
      openProductModal(id);
      track('product_viewed', { id });
    });
  });

  // Add to cart buttons
  document.querySelectorAll('.product-card__cart').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      const id = btn.dataset.cartId;
      cart.add(id);
      showToast(t('products.added'), 'success');
      track('cart_add', { id });
    });
  });

  // Wishlist toggle buttons
  document.querySelectorAll('.product-card__wish').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishId;
      wishlist.toggle(id);
      const isWished = wishlist.has(id);
      btn.setAttribute('aria-pressed', String(isWished));
      btn.classList.toggle('is-wished', isWished);
      btn.querySelector('svg').setAttribute('fill', isWished ? 'currentColor' : 'none');
      track('wishlist_toggle', { id, action: isWished ? 'add' : 'remove' });
    });
  });

  // Section smooth scroll links
  document.querySelectorAll('[data-section-link]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(el.dataset.sectionLink);
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!_validateContactForm(form)) return;
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.querySelector('span').textContent = t('misc.loading');
    // INTEGRATION HOOK: replace with real API call
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.querySelector('span').setAttribute('data-i18n', 'contact.submit');
      btn.querySelector('span').textContent = t('contact.submit');
      document.getElementById('contact-success').hidden = false;
    }, 1200);
  });

  // Validate on blur
  form?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => _validateField(field));
  });
}

function _filterProducts(collection) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach(card => {
    const show = collection === 'all' || card.dataset.collection === collection;
    card.style.display = show ? '' : 'none';
  });
}

function _validateField(field) {
  const errId = `${field.id}-err`;
  const errEl = document.getElementById(errId);
  if (!errEl) return true;

  if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    errEl.textContent = t('error.email');
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errId);
    return false;
  }
  if (field.required && !field.value.trim()) {
    errEl.textContent = t('error.required');
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', errId);
    return false;
  }
  errEl.textContent = '';
  field.setAttribute('aria-invalid', 'false');
  field.removeAttribute('aria-describedby');
  return true;
}

function _validateContactForm(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    if (!_validateField(field)) valid = false;
  });
  return valid;
}

// ── Toast utility ─────────────────────────────────────────────────────────────
export function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--visible'));
  setTimeout(() => {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove(), { once: true });
  }, 3500);
}
