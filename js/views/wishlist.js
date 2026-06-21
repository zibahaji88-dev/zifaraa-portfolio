import { t, currentLocale }            from '../i18n.js';
import { wishlist, cart }              from '../store.js';
import { getProductById, formatPrice } from '../../data/products.js';
import { openProductModal }            from '../modal.js';
import { showToast }                   from './home.js';

export function renderWishlist(app) {
  app.className = 'page-enter';
  const ids   = wishlist.getItems();
  const locale = currentLocale();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="wishlist.heading">${t('wishlist.heading')}</h1>
      </div>
      ${ids.length === 0 ? _empty() : _grid(ids, locale)}
    </div>
  `;

  _wireWishlist();
  document.addEventListener('locale:changed', () => renderWishlist(app), { once: true });
}

function _empty() {
  return `
    <div class="empty-state">
      <h2 class="empty-state__title" data-i18n="wishlist.empty">${t('wishlist.empty')}</h2>
      <p class="empty-state__body" data-i18n="wishlist.empty.sub">${t('wishlist.empty.sub')}</p>
      <a href="#/" class="btn btn--primary" data-i18n="wishlist.empty.cta">${t('wishlist.empty.cta')}</a>
    </div>
  `;
}

function _grid(ids, locale) {
  return `
    <div class="products-grid">
      ${ids.map(id => {
        const p = getProductById(id);
        if (!p) return '';
        const price = formatPrice(p.price, p.currency, locale);
        return `
          <article class="product-card" data-product-id="${p.id}">
            <div class="product-card__img-wrap">
              <img class="product-card__img"
                   src="${p.images[0]}"
                   alt="${p.name}"
                   loading="lazy"
                   width="400" height="533">
              ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
              <button class="product-card__wish is-wished"
                      data-wish-remove="${p.id}"
                      aria-label="${t('wishlist.remove')}: ${p.name}"
                      aria-pressed="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
            <div class="product-card__body">
              <div class="product-card__meta">
                <span class="product-card__collection">${p.collection}</span>
                <span class="product-card__price">${price}</span>
              </div>
              <h3 class="product-card__name">${p.name}</h3>
              <div class="product-card__actions">
                <button class="btn btn--primary btn--sm" data-view-id="${p.id}">${t('products.view')}</button>
                <button class="btn btn--gold btn--sm" data-move-id="${p.id}"
                        ${!p.inStock ? 'aria-disabled="true"' : ''}>
                  ${t('wishlist.move')}
                </button>
              </div>
            </div>
          </article>
        `;
      }).join('')}
    </div>
  `;
}

function _wireWishlist() {
  document.querySelectorAll('[data-wish-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.wishRemove;
      wishlist.remove(id);
      btn.closest('.product-card')?.remove();
      if (!document.querySelector('.product-card')) {
        const grid = document.querySelector('.products-grid');
        if (grid) grid.outerHTML = _empty();
      }
    });
  });

  document.querySelectorAll('[data-move-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-disabled') === 'true') return;
      const id = btn.dataset.moveId;
      cart.add(id);
      wishlist.remove(id);
      btn.closest('.product-card')?.remove();
      showToast(t('products.added'), 'success');
    });
  });

  document.querySelectorAll('[data-view-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      openProductModal(btn.dataset.viewId);
    });
  });
}
