import { renderHome }         from './views/home.js';
import { renderCart }         from './views/cart.js';
import { renderWishlist }     from './views/wishlist.js';
import { renderCheckout, renderConfirmation } from './views/checkout.js';
import { renderAuth }         from './views/auth.js';
import { reinitHomeAnimations, pauseAnimations } from './animations.js';

const ROUTES = {
  '/':                    renderHome,
  '/home':                renderHome,
  '/cart':                renderCart,
  '/wishlist':            renderWishlist,
  '/checkout':            renderCheckout,
  '/auth':                renderAuth,
  '/order-confirmation':  renderConfirmation,
};

let currentPath = null;

export function navigate(path) {
  const app    = document.getElementById('app');
  const header = document.getElementById('site-header');
  if (!app) return;

  // Normalise path
  const normPath = path.startsWith('/') ? path : `/${path}`;
  currentPath = normPath;

  const isHome = normPath === '/' || normPath === '/home';

  // Update header appearance
  if (header) {
    header.classList.toggle('site-header--scrolled', !isHome);
  }

  // Pause scroll animations for sub-views
  if (!isHome) pauseAnimations();

  // Render view
  const viewFn = ROUTES[normPath] || renderHome;
  app.innerHTML = '';
  viewFn(app);

  // After home renders, kick off scroll animations
  if (isHome) {
    requestAnimationFrame(() => reinitHomeAnimations());
  }

  // Scroll to top (unless section anchor present)
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update URL hash
  const newHash = `#${normPath}`;
  if (window.location.hash !== newHash) {
    history.pushState(null, '', newHash);
  }
}

export function initRouter() {
  // Handle hash changes (back/forward, direct links)
  window.addEventListener('hashchange', _handleHash);
  window.addEventListener('popstate',   _handleHash);

  // Handle all nav clicks globally (event delegation)
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#/"]');
    if (!link) return;
    e.preventDefault();
    const path = link.getAttribute('href').replace(/^#/, '') || '/';
    navigate(path);
  });

  // Initial render
  _handleHash();
}

function _handleHash() {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  // Strip query params for routing, keep for view
  const path = hash.split('?')[0] || '/';
  if (path !== currentPath) navigate(path);
}
