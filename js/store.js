import { getProductById } from '../data/products.js';

// ── Internal state ──
const state = {
  cart:     JSON.parse(localStorage.getItem('zifaraa_cart')     || '[]'),
  wishlist: JSON.parse(localStorage.getItem('zifaraa_wishlist') || '[]'),
  auth:     JSON.parse(localStorage.getItem('zifaraa_auth')     || 'null'),
  order:    JSON.parse(localStorage.getItem('zifaraa_order')    || 'null'),
};

function persist(key) {
  localStorage.setItem(`zifaraa_${key}`, JSON.stringify(state[key]));
  document.dispatchEvent(new CustomEvent(`store:${key}`, { detail: state[key] }));
}

function _animateBadge(type) {
  const badge = document.querySelector(`[data-badge="${type}"]`);
  if (!badge) return;
  badge.classList.remove('badge--pop');
  requestAnimationFrame(() => {
    badge.classList.add('badge--pop');
    badge.addEventListener('animationend', () => badge.classList.remove('badge--pop'), { once: true });
  });
}

function _updateBadge(type) {
  const badge = document.querySelector(`[data-badge="${type}"]`);
  if (!badge) return;
  const count = type === 'cart'     ? cart.getCount()
               : type === 'wishlist' ? state.wishlist.length
               : 0;
  badge.textContent = count;
  badge.setAttribute('aria-label', `${count} items in ${type}`);
  badge.style.display = count > 0 ? '' : 'none';
}

// ── Cart ──
export const cart = {
  getItems()     { return [...state.cart]; },
  getCount()     { return state.cart.reduce((s, i) => s + i.qty, 0); },
  getSubtotal()  {
    return state.cart.reduce((sum, item) => {
      const p = getProductById(item.id);
      return sum + (p?.price ?? 0) * item.qty;
    }, 0);
  },

  add(id, qty = 1, variant = null) {
    const existing = state.cart.find(i => i.id === id && i.variant === variant);
    if (existing) {
      existing.qty += qty;
    } else {
      state.cart.push({ id, qty, variant });
    }
    persist('cart');
    _animateBadge('cart');
    _updateBadge('cart');
  },

  remove(id, variant = null) {
    state.cart = state.cart.filter(i => !(i.id === id && i.variant === variant));
    persist('cart');
    _updateBadge('cart');
  },

  updateQty(id, qty, variant = null) {
    if (qty <= 0) { this.remove(id, variant); return; }
    const item = state.cart.find(i => i.id === id && i.variant === variant);
    if (item) { item.qty = qty; persist('cart'); _updateBadge('cart'); }
  },

  clear() {
    state.cart = [];
    persist('cart');
    _updateBadge('cart');
  }
};

// ── Wishlist ──
export const wishlist = {
  getItems() { return [...state.wishlist]; },
  has(id)    { return state.wishlist.includes(id); },

  toggle(id) {
    if (this.has(id)) {
      state.wishlist = state.wishlist.filter(i => i !== id);
    } else {
      state.wishlist.push(id);
      _animateBadge('wishlist');
    }
    persist('wishlist');
    _updateBadge('wishlist');
  },

  remove(id) {
    state.wishlist = state.wishlist.filter(i => i !== id);
    persist('wishlist');
    _updateBadge('wishlist');
  }
};

// ── Auth ──
export const auth = {
  getUser()    { return state.auth ? { ...state.auth } : null; },
  isLoggedIn() { return !!state.auth; },

  // INTEGRATION HOOK: replace body with real POST /api/auth/login
  async login(email, _password) {
    const user = { id: 'u_' + Date.now(), email, name: email.split('@')[0] };
    state.auth = user;
    persist('auth');
    _updateNavAuth();
    return user;
  },

  // INTEGRATION HOOK: replace body with real POST /api/auth/register
  async register(email, _password, name) {
    const user = { id: 'u_' + Date.now(), email, name: name || email.split('@')[0] };
    state.auth = user;
    persist('auth');
    _updateNavAuth();
    return user;
  },

  logout() {
    state.auth = null;
    persist('auth');
    _updateNavAuth();
  }
};

// ── Order ──
export const order = {
  set(data)  { state.order = data; persist('order'); },
  get()      { return state.order ? { ...state.order } : null; },
  clear()    { state.order = null; persist('order'); }
};

// ── Analytics stub ──
export function track(event, props = {}) {
  // INTEGRATION HOOK: wire to GA4 / Segment / Mixpanel
  if (window.ZIFARAA_CONFIG?.debug) {
    console.log('[ZIFARAA Track]', event, props);
  }
}

function _updateNavAuth() {
  const btn = document.getElementById('nav-auth-btn');
  if (!btn) return;
  const user = auth.getUser();
  btn.setAttribute('aria-label', user ? `${user.name} — account` : 'Sign in to your account');
}

// ── Init badges on load ──
export function initStore() {
  _updateBadge('cart');
  _updateBadge('wishlist');
  _updateNavAuth();
}
