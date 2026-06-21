import { t, currentLocale }            from '../i18n.js';
import { cart, order, track }          from '../store.js';
import { getProductById, formatPrice } from '../../data/products.js';
import { navigate }                    from '../router.js';

// ── State machine: 'cart_review' | 'shipping_info' | 'payment' | 'confirmed' ──
let checkoutState = 'cart_review';
let shippingData  = {};

export function renderCheckout(app) {
  app.className = 'page-enter';
  checkoutState = 'cart_review';
  // Restore shipping data if back-navigated
  const saved = localStorage.getItem('zifaraa_shipping');
  if (saved) try { shippingData = JSON.parse(saved); } catch {}

  if (cart.getCount() === 0) {
    navigate('/cart');
    return;
  }

  _renderState(app);
  document.addEventListener('locale:changed', () => renderCheckout(app), { once: true });
}

export function renderConfirmation(app) {
  app.className = 'page-enter';
  const o = order.get();

  app.innerHTML = `
    <div class="view-page container">
      <div class="order-confirmed">
        <div class="order-confirmed__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <p class="order-confirmed__number">
          <span data-i18n="checkout.confirmed.order">${t('checkout.confirmed.order')}</span>
          ${o?.orderNumber || ''}
        </p>
        <h1 class="section-heading" data-i18n="checkout.confirmed.heading">${t('checkout.confirmed.heading')}</h1>
        <p class="section-body" data-i18n="checkout.confirmed.body">${t('checkout.confirmed.body')}</p>

        ${o?.items?.length ? `
          <div style="margin-block:var(--sp-8)">
            ${o.items.map(item => {
              const p = getProductById(item.id);
              if (!p) return '';
              return `
                <div class="cart-item" style="grid-template-columns:64px 1fr">
                  <div class="cart-item__img">
                    <img src="${p.images[0]}" alt="${p.name}" width="64" height="85" loading="lazy">
                  </div>
                  <div>
                    <h3 class="cart-item__name">${p.name}</h3>
                    <p class="cart-item__collection">Qty: ${item.qty}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}

        <a href="#/" class="btn btn--gold" data-i18n="checkout.confirmed.cta">${t('checkout.confirmed.cta')}</a>
      </div>
    </div>
  `;
}

// ── Render current step ────────────────────────────────────────────────────────
function _renderState(app) {
  const locale   = currentLocale();
  const items    = cart.getItems();
  const subtotal = cart.getSubtotal();

  app.innerHTML = `
    <div class="view-page container">
      <div class="view-header">
        <h1 class="view-title" data-i18n="checkout.title">${t('checkout.title')}</h1>
      </div>
      ${_steps()}
      <div class="checkout-layout">
        <div id="checkout-main">
          ${checkoutState === 'cart_review'   ? _stepReview(items, locale) : ''}
          ${checkoutState === 'shipping_info' ? _stepShipping() : ''}
          ${checkoutState === 'payment'       ? _stepPayment(items, locale) : ''}
        </div>
        <aside class="checkout-summary-panel" aria-label="Order summary">
          ${_summary(items, subtotal, locale)}
        </aside>
      </div>
    </div>
  `;

  _wireStep(app);
}

function _steps() {
  const steps = [
    { key: 'checkout.step.review',   id: 'cart_review'   },
    { key: 'checkout.step.shipping', id: 'shipping_info' },
    { key: 'checkout.step.payment',  id: 'payment'       },
  ];

  return `
    <div class="checkout-steps" role="list" aria-label="Checkout progress">
      ${steps.map((step, i) => {
        const idx    = steps.findIndex(s => s.id === checkoutState);
        const done   = i < idx;
        const active = step.id === checkoutState;
        const cls    = active ? 'checkout-step--active' : done ? 'checkout-step--done' : '';
        return `
          ${i > 0 ? '<div class="checkout-step__divider" aria-hidden="true"></div>' : ''}
          <div class="checkout-step ${cls}" role="listitem" aria-current="${active ? 'step' : 'false'}">
            <span class="checkout-step__num" aria-hidden="true">
              ${done ? '✓' : i + 1}
            </span>
            <span data-i18n="${step.key}">${t(step.key)}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// ── Step 1: Cart Review ───────────────────────────────────────────────────────
function _stepReview(items, locale) {
  return `
    <div class="cart-items-list">
      ${items.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="cart-item" data-item-id="${item.id}">
            <div class="cart-item__img">
              <img src="${p.images[0]}" alt="${p.name}" width="80" height="107" loading="lazy">
            </div>
            <div class="cart-item__details">
              <h3 class="cart-item__name">${p.name}</h3>
              <div class="qty-control">
                <button class="qty-btn" data-qty-dec="${p.id}">−</button>
                <span class="qty-value">${item.qty}</span>
                <button class="qty-btn" data-qty-inc="${p.id}">+</button>
              </div>
            </div>
            <div class="cart-item__price">${formatPrice(p.price * item.qty, p.currency, locale)}</div>
          </div>
        `;
      }).join('')}
      <div style="margin-top:var(--sp-8)">
        <button class="btn btn--gold" id="step-next" data-i18n="checkout.next">
          ${t('checkout.next')}
        </button>
      </div>
    </div>
  `;
}

// ── Step 2: Shipping Info ─────────────────────────────────────────────────────
function _stepShipping() {
  const d = shippingData;
  const field = (id, label, type = 'text', ac = '', required = true) => `
    <div class="form-group">
      <label class="form-label" for="${id}" data-i18n="${label}">${t(label)}</label>
      <input class="form-input" type="${type}" id="${id}" name="${id}"
             autocomplete="${ac}" ${required ? 'required' : ''}
             value="${d[id] || ''}"
             placeholder="${t(label)}">
      ${required ? `<span class="form-error" id="${id}-err" role="alert"></span>` : ''}
    </div>
  `;

  const countries = ['United Arab Emirates','Saudi Arabia','Kuwait','Bahrain','Qatar','Oman',
    'United States','United Kingdom','Germany','France','Switzerland','Italy','Japan','Singapore','Australia'];

  return `
    <form id="shipping-form" novalidate>
      ${field('ship-name',  'checkout.shipping.name',  'text',  'name')}
      ${field('ship-email', 'checkout.shipping.email', 'email', 'email')}
      ${field('ship-phone', 'checkout.shipping.phone', 'tel',   'tel')}
      ${field('ship-addr1', 'checkout.shipping.addr1', 'text',  'address-line1')}
      ${field('ship-addr2', 'checkout.shipping.addr2', 'text',  'address-line2', false)}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        ${field('ship-city', 'checkout.shipping.city', 'text', 'address-level2')}
        ${field('ship-zip',  'checkout.shipping.zip',  'text', 'postal-code')}
      </div>
      <div class="form-group">
        <label class="form-label" for="ship-country" data-i18n="checkout.shipping.country">${t('checkout.shipping.country')}</label>
        <select class="form-input" id="ship-country" name="ship-country" required autocomplete="country-name">
          <option value="">—</option>
          ${countries.map(c => `<option value="${c}" ${d['ship-country'] === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
        <span class="form-error" id="ship-country-err" role="alert"></span>
      </div>
      <div style="display:flex;gap:var(--sp-4);margin-top:var(--sp-8)">
        <button type="button" class="btn btn--outline" id="step-back"
                data-i18n="checkout.back">${t('checkout.back')}</button>
        <button type="submit" class="btn btn--gold" id="step-next"
                data-i18n="checkout.next">${t('checkout.next')}</button>
      </div>
    </form>
  `;
}

// ── Step 3: Payment ───────────────────────────────────────────────────────────
function _stepPayment(items, locale) {
  const hasStripe = !!window.ZIFARAA_CONFIG?.stripePublishableKey;

  return `
    <div>
      <h2 class="section-label" style="margin-bottom:var(--sp-6)" data-i18n="checkout.payment.card">${t('checkout.payment.card')}</h2>

      <form id="payment-form" novalidate>
        ${hasStripe
          ? `<div id="stripe-card-element" style="padding:var(--sp-4);background:var(--color-bg-surface);border:1px solid var(--color-border-subtle);border-radius:var(--radius-sm);min-height:48px;"></div>`
          : _mockCardInput()
        }
        <div style="display:flex;gap:var(--sp-4);margin-top:var(--sp-8)">
          <button type="button" class="btn btn--outline" id="step-back"
                  data-i18n="checkout.back">${t('checkout.back')}</button>
          <button type="submit" class="btn btn--gold" id="step-place"
                  data-i18n="checkout.place">${t('checkout.place')}</button>
        </div>
        <p style="font-size:var(--text-xs);color:var(--color-muted);margin-top:var(--sp-5)">
          🔒 Your payment information is encrypted and secure.
        </p>
      </form>
    </div>
  `;
}

function _mockCardInput() {
  return `
    <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
      <div class="form-group" style="margin:0">
        <label class="form-label" for="mock-card">Card Number</label>
        <input class="form-input" type="text" id="mock-card"
               placeholder="1234 5678 9012 3456"
               maxlength="19"
               autocomplete="cc-number">
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-4)">
        <div class="form-group" style="margin:0">
          <label class="form-label" for="mock-expiry">Expiry</label>
          <input class="form-input" type="text" id="mock-expiry"
                 placeholder="MM / YY" maxlength="7"
                 autocomplete="cc-exp">
        </div>
        <div class="form-group" style="margin:0">
          <label class="form-label" for="mock-cvv">CVV</label>
          <input class="form-input" type="text" id="mock-cvv"
                 placeholder="123" maxlength="4"
                 autocomplete="cc-csc">
        </div>
      </div>
      <p style="font-size:var(--text-xs);color:var(--color-gold);letter-spacing:0.08em">
        SIMULATED PAYMENT — no real transaction occurs
      </p>
    </div>
  `;
}

// ── Summary sidebar ───────────────────────────────────────────────────────────
function _summary(items, subtotal, locale) {
  return `
    <div class="order-summary">
      <h2 class="order-summary__title" data-i18n="checkout.summary">${t('checkout.summary')}</h2>
      ${items.map(item => {
        const p = getProductById(item.id);
        if (!p) return '';
        return `
          <div class="order-summary__row">
            <span style="max-width:60%">${p.name} ×${item.qty}</span>
            <span>${formatPrice(p.price * item.qty, p.currency, locale)}</span>
          </div>
        `;
      }).join('')}
      <div class="order-summary__row">
        <span data-i18n="cart.shipping">${t('cart.shipping')}</span>
        <span data-i18n="cart.shipping.val">${t('cart.shipping.val')}</span>
      </div>
      <div class="order-summary__row order-summary__row--total">
        <span data-i18n="cart.total">${t('cart.total')}</span>
        <span>${formatPrice(subtotal, 'USD', locale)}</span>
      </div>
    </div>
  `;
}

// ── Step wiring ───────────────────────────────────────────────────────────────
function _wireStep(app) {
  // Qty controls in cart review
  document.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyDec;
      const item = cart.getItems().find(i => i.id === id);
      if (item) { cart.updateQty(id, item.qty - 1); _renderState(app); }
    });
  });
  document.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.qtyInc;
      const item = cart.getItems().find(i => i.id === id);
      if (item) { cart.updateQty(id, item.qty + 1); _renderState(app); }
    });
  });

  // Next / back
  document.getElementById('step-next')?.addEventListener('click', () => {
    if (checkoutState === 'cart_review') {
      checkoutState = 'shipping_info';
      _renderState(app);
    }
  });

  document.getElementById('step-back')?.addEventListener('click', () => {
    if (checkoutState === 'shipping_info') checkoutState = 'cart_review';
    else if (checkoutState === 'payment')   checkoutState = 'shipping_info';
    _renderState(app);
  });

  // Shipping form submit
  document.getElementById('shipping-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    if (!_validateShipping(form)) return;

    // Persist shipping data
    const data = {};
    form.querySelectorAll('input, select').forEach(f => { data[f.id] = f.value; });
    shippingData = data;
    localStorage.setItem('zifaraa_shipping', JSON.stringify(data));

    checkoutState = 'payment';
    _renderState(app);
  });

  // Payment form submit
  document.getElementById('payment-form')?.addEventListener('submit', async e => {
    e.preventDefault();
    const placeBtn = document.getElementById('step-place');
    placeBtn.disabled = true;
    placeBtn.textContent = t('checkout.processing');

    // INTEGRATION HOOK: replace with real Stripe / PayPal API call
    const orderData = await _submitOrder(cart.getItems(), shippingData);

    order.set({
      ...orderData,
      items:    cart.getItems(),
      shipping: shippingData,
    });
    cart.clear();
    localStorage.removeItem('zifaraa_shipping');

    track('order_placed', { orderNumber: orderData.orderNumber, total: cart.getSubtotal() });
    navigate('/order-confirmation');
  });

  // Card formatting
  const cardInput = document.getElementById('mock-card');
  cardInput?.addEventListener('input', () => {
    let v = cardInput.value.replace(/\D/g, '').slice(0, 16);
    cardInput.value = v.match(/.{1,4}/g)?.join(' ') || v;
  });

  const expiryInput = document.getElementById('mock-expiry');
  expiryInput?.addEventListener('input', () => {
    let v = expiryInput.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = `${v.slice(0, 2)} / ${v.slice(2)}`;
    expiryInput.value = v;
  });
}

function _validateShipping(form) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(field => {
    const errEl = document.getElementById(`${field.id}-err`);
    if (!field.value.trim()) {
      if (errEl) errEl.textContent = t('error.required');
      field.setAttribute('aria-invalid', 'true');
      if (errEl) field.setAttribute('aria-describedby', errEl.id);
      valid = false;
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      if (errEl) errEl.textContent = t('error.email');
      field.setAttribute('aria-invalid', 'true');
      valid = false;
    } else {
      if (errEl) errEl.textContent = '';
      field.setAttribute('aria-invalid', 'false');
    }
  });
  return valid;
}

// INTEGRATION HOOK: replace body with real API call
async function _submitOrder(items, shipping) {
  // const res = await fetch('/api/orders', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ items, shipping })
  // });
  // return res.json();

  await new Promise(r => setTimeout(r, 1600));
  return { orderNumber: 'ZIF-' + String(Date.now()).slice(-6) };
}
