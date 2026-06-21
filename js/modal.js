import { t, currentLocale } from './i18n.js';
import { getProductById, formatPrice, COLLECTIONS } from '../data/products.js';
import { cart, wishlist, track } from './store.js';
import { showToast } from './views/home.js';

let activeProduct = null;
let currentImageIndex = 0;

export function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  activeProduct = product;
  currentImageIndex = 0;

  const modal   = document.getElementById('product-modal');
  const content = document.getElementById('modal-content');

  content.innerHTML = _renderModal(product);
  modal.removeAttribute('aria-hidden');
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';

  // Focus management
  const firstFocusable = modal.querySelector('button, [href], input, select, textarea');
  firstFocusable?.focus();

  _wireModal(product);
  track('product_modal_open', { id: productId });
}

export function closeProductModal() {
  const modal = document.getElementById('product-modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
  activeProduct = null;
}

function _renderModal(p) {
  const inWish = wishlist.has(p.id);
  const price  = formatPrice(p.price, p.currency, currentLocale());
  const col    = COLLECTIONS.find(c => c.id === p.collection);

  const specRows = [
    ['modal.movement',  p.specs.movement],
    ['modal.diameter',  p.specs.caseDiameter],
    ['modal.thickness', p.specs.caseThickness],
    ['modal.crystal',   p.specs.crystal],
    ['modal.water',     p.specs.waterResistance],
    ['modal.power',     p.specs.powerReserve],
    ['modal.case',      p.specs.caseMaterial],
    ['modal.strap',     p.specs.strapMaterial],
  ];

  return `
    <div class="modal__gallery">
      <div class="modal__gallery-main">
        <img id="modal-img-main"
             src="${p.images[0]}"
             alt="${p.name} — primary view"
             width="600" height="800">
      </div>
      <div class="modal__gallery-thumbs" role="list">
        ${p.images.map((img, i) => `
          <button class="modal__thumb${i === 0 ? ' modal__thumb--active' : ''}"
                  data-img-index="${i}"
                  aria-label="View image ${i + 1}"
                  role="listitem">
            <img src="${img}" alt="" width="80" height="107" loading="lazy">
          </button>
        `).join('')}
      </div>
    </div>

    <div class="modal__info">
      <div class="modal__meta">
        <span class="modal__collection">${col?.name || ''}</span>
        ${p.badge ? `<span class="product-card__badge">${p.badge}</span>` : ''}
      </div>
      <h2 class="modal__name">${p.name}</h2>
      <p class="modal__price">${price}</p>
      <p class="modal__desc">${p.description}</p>

      <div class="modal__stock ${p.inStock ? 'modal__stock--in' : 'modal__stock--out'}">
        <span class="modal__stock-dot" aria-hidden="true"></span>
        <span data-i18n="${p.inStock ? 'modal.in_stock' : 'modal.notify'}">
          ${t(p.inStock ? 'modal.in_stock' : 'modal.notify')}
        </span>
      </div>

      <div class="modal__actions">
        <button class="btn btn--gold btn--full modal__add-cart${!p.inStock ? ' btn--disabled' : ''}"
                data-cart-id="${p.id}"
                ${!p.inStock ? 'aria-disabled="true"' : ''}>
          ${t(p.inStock ? 'modal.add_cart' : 'modal.notify')}
        </button>
        <button class="btn btn--outline modal__add-wish${inWish ? ' is-wished' : ''}"
                data-wish-id="${p.id}"
                aria-pressed="${inWish}">
          ${t(inWish ? 'modal.remove_wish' : 'modal.add_wish')}
        </button>
      </div>

      <details class="modal__specs" open>
        <summary class="modal__specs-toggle">Specifications</summary>
        <dl class="modal__specs-list">
          ${specRows.map(([key, val]) => `
            <div class="modal__spec-row">
              <dt class="modal__spec-key" data-i18n="${key}">${t(key)}</dt>
              <dd class="modal__spec-val">${val}</dd>
            </div>
          `).join('')}
        </dl>
      </details>
    </div>
  `;
}

function _wireModal(product) {
  const modal = document.getElementById('product-modal');

  // Close button
  document.getElementById('modal-close')?.addEventListener('click', closeProductModal);

  // Backdrop click
  document.getElementById('modal-backdrop')?.addEventListener('click', closeProductModal);

  // Keyboard close
  const onKey = e => {
    if (e.key === 'Escape') { closeProductModal(); document.removeEventListener('keydown', onKey); }
  };
  document.addEventListener('keydown', onKey);

  // Thumbnail switching
  modal.querySelectorAll('.modal__thumb').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.imgIndex, 10);
      currentImageIndex = idx;
      const mainImg = document.getElementById('modal-img-main');
      if (mainImg) {
        mainImg.src = product.images[idx];
        mainImg.alt = `${product.name} — view ${idx + 1}`;
      }
      modal.querySelectorAll('.modal__thumb').forEach(b => b.classList.remove('modal__thumb--active'));
      btn.classList.add('modal__thumb--active');
    });
  });

  // Add to cart
  modal.querySelector('.modal__add-cart')?.addEventListener('click', btn => {
    if (btn.target.getAttribute('aria-disabled') === 'true') return;
    cart.add(product.id);
    showToast(t('products.added'), 'success');
    track('cart_add', { id: product.id, source: 'modal' });
  });

  // Wishlist
  modal.querySelector('.modal__add-wish')?.addEventListener('click', btn => {
    const id = btn.target.dataset.wishId || btn.target.closest('[data-wish-id]')?.dataset.wishId || product.id;
    wishlist.toggle(id);
    const isWished = wishlist.has(id);
    const wishBtn = modal.querySelector('.modal__add-wish');
    wishBtn.classList.toggle('is-wished', isWished);
    wishBtn.setAttribute('aria-pressed', String(isWished));
    wishBtn.textContent = t(isWished ? 'modal.remove_wish' : 'modal.add_wish');
    // Sync product grid card
    const gridWishBtn = document.querySelector(`.product-card__wish[data-wish-id="${id}"]`);
    if (gridWishBtn) {
      gridWishBtn.classList.toggle('is-wished', isWished);
      gridWishBtn.querySelector('svg')?.setAttribute('fill', isWished ? 'currentColor' : 'none');
    }
    track('wishlist_toggle', { id, action: isWished ? 'add' : 'remove' });
  });
}
