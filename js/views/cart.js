import { t, currentLocale }            from '../i18n.js';
import { cart }                        from '../store.js';
import { getProductById, formatPrice } from '../../data/products.js';
import { navigate }                    from '../router.js';

export function renderCart(app) {
  app.className = 'page-enter';
  const items   = cart.getItems();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="cart.heading">${t('cart.heading')}</h1>
      </div>
      ${items.length === 0 ? _empty() : _cartLayout(items)}
    </div>
  `;

  _wireCart();

  document.addEventListener('locale:changed', () => renderCart(app), { once: true });
  document.addEventListener('store:cart', () => {
    app.innerHTML = '';
    renderCart(app);
  }, { once: true });
}

function _empty() {
  return `
    <div class="empty-state">
      <h2 class="empty-state__title" data-i18n="cart.empty">${t('cart.empty')}</h2>
      <p class="empty-state__body" data-i18n="cart.empty.sub">${t('cart.empty.sub')}</p>
      <a href="#/" class="btn btn--primary" data-i18n="cart.empty.cta">${t('cart.empty.cta')}</a>
    </div>
  `;
}

function _cartLayout(items) {
  const subtotal = cart.getSubtotal();
  const locale   = currentLocale();

  return `
    <div class="checkout-layout">
      <div class="cart-items-list">
        ${items.map(item => _cartItem(item, locale)).join('')}
      </div>
      <aside class="checkout-summary-panel" aria-label="Order summary">
        <div class="order-summary">
          <h2 class="order-summary__title" data-i18n="checkout.summary">${t('checkout.summary')}</h2>
          <div class="order-summary__row">
            <span data-i18n="cart.subtotal">${t('cart.subtotal')}</span>
            <span id="cart-subtotal">${formatPrice(subtotal, 'USD', locale)}</span>
          </div>
          <div class="order-summary__row">
            <span data-i18n="cart.shipping">${t('cart.shipping')}</span>
            <span data-i18n="cart.shipping.val">${t('cart.shipping.val')}</span>
          </div>
          <div class="order-summary__row order-summary__row--total">
            <span data-i18n="cart.total">${t('cart.total')}</span>
            <span>${formatPrice(subtotal, 'USD', locale)}</span>
          </div>
          <button class="btn btn--gold btn--full" id="cart-checkout-btn" style="margin-top:var(--sp-6)">
            <span data-i18n="cart.proceed">${t('cart.proceed')}</span>
          </button>
        </div>
      </aside>
    </div>
  `;
}

function _cartItem(item, locale) {
  const product = getProductById(item.id);
  if (!product) return '';
  const lineTotal = formatPrice(product.price * item.qty, product.currency, locale);

  return `
    <div class="cart-item" data-item-id="${item.id}">
      <div class="cart-item__img">
        <img src="${product.images[0]}" alt="${product.name}" width="80" height="107" loading="lazy">
      </div>
      <div class="cart-item__details">
        <p class="cart-item__collection">${item.collection || ''}</p>
        <h3 class="cart-item__name">${product.name}</h3>
        <div class="qty-control" aria-label="Quantity">
          <button class="qty-btn" data-qty-dec="${item.id}" aria-label="Decrease quantity">−</button>
          <span class="qty-value" aria-live="polite">${item.qty}</span>
          <button class="qty-btn" data-qty-inc="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="cart-item__remove" data-remove-id="${item.id}" aria-label="Remove ${product.name} from cart"
                data-i18n="cart.remove">${t('cart.remove')}</button>
      </div>
      <div class="cart-item__price">${lineTotal}</div>
    </div>
  `;
}

function _wireCart() {
  // Qty decrease
  document.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyDec;
      const item = cart.getItems().find(i => i.id === id);
      if (item) cart.updateQty(id, item.qty - 1);
    });
  });

  // Qty increase
  document.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyInc;
      const item = cart.getItems().find(i => i.id === id);
      if (item) cart.updateQty(id, item.qty + 1);
    });
  });

  // Remove
  document.querySelectorAll('[data-remove-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.remove(btn.dataset.removeId);
    });
  });

  // Proceed to checkout
  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    navigate('/checkout');
  });
}
