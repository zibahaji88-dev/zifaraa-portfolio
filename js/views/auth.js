import { t }    from '../i18n.js';
import { auth }   from '../store.js';
import { navigate } from '../router.js';
import { showToast } from './home.js';

export function renderAuth(app) {
  app.className = 'page-enter';

  if (auth.isLoggedIn()) {
    _renderAccountPage(app);
    return;
  }

  _renderLoginRegister(app, 'login');
  document.addEventListener('locale:changed', () => renderAuth(app), { once: true });
}

function _renderLoginRegister(app, activeTab = 'login') {
  const isLogin = activeTab === 'login';

  app.innerHTML = `
    <div class="view-page container">
      <div style="max-width:480px">
        <div class="view-header">
          <h1 class="view-title" data-i18n="auth.heading.${activeTab}">${t(`auth.heading.${activeTab}`)}</h1>
        </div>

        <div class="auth-tabs" role="tablist">
          <button class="auth-tab${isLogin ? ' auth-tab--active' : ''}"
                  role="tab" aria-selected="${isLogin}"
                  id="tab-login" data-auth-tab="login"
                  data-i18n="auth.tab.login">${t('auth.tab.login')}</button>
          <button class="auth-tab${!isLogin ? ' auth-tab--active' : ''}"
                  role="tab" aria-selected="${!isLogin}"
                  id="tab-register" data-auth-tab="register"
                  data-i18n="auth.tab.register">${t('auth.tab.register')}</button>
        </div>

        <form id="auth-form" novalidate>
          ${!isLogin ? `
          <div class="form-group">
            <label class="form-label" for="auth-name" data-i18n="auth.name">${t('auth.name')}</label>
            <input class="form-input" type="text" id="auth-name" name="name"
                   autocomplete="name" required
                   placeholder="${t('auth.name')}">
            <span class="form-error" id="auth-name-err" role="alert"></span>
          </div>
          ` : ''}

          <div class="form-group">
            <label class="form-label" for="auth-email" data-i18n="auth.email">${t('auth.email')}</label>
            <input class="form-input" type="email" id="auth-email" name="email"
                   autocomplete="email" required
                   placeholder="${t('auth.email')}">
            <span class="form-error" id="auth-email-err" role="alert"></span>
          </div>

          <div class="form-group">
            <label class="form-label" for="auth-password" data-i18n="auth.password">${t('auth.password')}</label>
            <input class="form-input" type="password" id="auth-password" name="password"
                   autocomplete="${isLogin ? 'current-password' : 'new-password'}" required
                   minlength="8"
                   placeholder="${t('auth.password')}">
            <span class="form-error" id="auth-password-err" role="alert"></span>
          </div>

          ${!isLogin ? `
          <div class="form-group">
            <label class="form-label" for="auth-confirm" data-i18n="auth.password.confirm">${t('auth.password.confirm')}</label>
            <input class="form-input" type="password" id="auth-confirm" name="confirm"
                   autocomplete="new-password" required
                   placeholder="${t('auth.password.confirm')}">
            <span class="form-error" id="auth-confirm-err" role="alert"></span>
          </div>
          ` : ''}

          ${isLogin ? `
          <div style="text-align:end; margin-bottom:var(--sp-6)">
            <a href="#" class="footer-col__link" data-i18n="auth.forgot">${t('auth.forgot')}</a>
          </div>
          ` : ''}

          <button type="submit" class="btn btn--gold btn--full" id="auth-submit">
            <span data-i18n="auth.submit.${activeTab}">${t(`auth.submit.${activeTab}`)}</span>
          </button>
        </form>
      </div>
    </div>
  `;

  _wireAuth(activeTab, app);
}

function _renderAccountPage(app) {
  const user = auth.getUser();
  app.innerHTML = `
    <div class="view-page container">
      <div style="max-width:480px">
        <div class="view-header">
          <h1 class="view-title" data-i18n="nav.account">${t('nav.account')}</h1>
        </div>
        <p style="color:var(--color-muted-light);margin-bottom:var(--sp-8)">
          ${user?.name || user?.email || ''}
        </p>
        <div style="display:flex;flex-direction:column;gap:var(--sp-4)">
          <a href="#/wishlist" class="btn btn--outline">${t('nav.wishlist')}</a>
          <a href="#/cart"     class="btn btn--outline">${t('nav.cart')}</a>
          <button class="btn btn--primary" id="auth-logout">
            ${t('nav.logout')}
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('auth-logout')?.addEventListener('click', () => {
    auth.logout();
    showToast(t('auth.logout.success'), 'info');
    renderAuth(app);
  });
}

function _wireAuth(activeTab, app) {
  // Tab switching
  document.querySelectorAll('[data-auth-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      _renderLoginRegister(app, btn.dataset.authTab);
    });
  });

  // Form submission
  const form = document.getElementById('auth-form');
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    if (!_validateAuthForm(form, activeTab)) return;

    const submitBtn = document.getElementById('auth-submit');
    submitBtn.disabled = true;
    submitBtn.querySelector('span').textContent = t('misc.loading');

    const email    = form.querySelector('#auth-email')?.value.trim();
    const password = form.querySelector('#auth-password')?.value;
    const name     = form.querySelector('#auth-name')?.value.trim();

    try {
      if (activeTab === 'login') {
        await auth.login(email, password);
      } else {
        await auth.register(email, password, name);
      }
      navigate('/');
    } catch {
      submitBtn.disabled = false;
      submitBtn.querySelector('span').textContent = t(`auth.submit.${activeTab}`);
    }
  });

  // Validate on blur
  form?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => _validateAuthField(field, activeTab));
  });
}

function _validateAuthField(field, mode) {
  const errEl = document.getElementById(`${field.id}-err`);
  if (!errEl) return true;

  if (field.type === 'email' && field.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    return _setError(field, errEl, t('error.email'));
  }
  if (field.type === 'password' && field.value && field.value.length < 8) {
    return _setError(field, errEl, t('error.password.short'));
  }
  if (field.id === 'auth-confirm') {
    const pw = document.getElementById('auth-password')?.value;
    if (field.value !== pw) return _setError(field, errEl, t('error.password.match'));
  }
  if (field.required && !field.value.trim()) {
    return _setError(field, errEl, t('error.required'));
  }

  _clearError(field, errEl);
  return true;
}

function _validateAuthForm(form, mode) {
  let valid = true;
  form.querySelectorAll('[required]').forEach(f => {
    if (!_validateAuthField(f, mode)) valid = false;
  });
  return valid;
}

function _setError(field, errEl, msg) {
  errEl.textContent = msg;
  field.setAttribute('aria-invalid', 'true');
  field.setAttribute('aria-describedby', errEl.id);
  return false;
}

function _clearError(field, errEl) {
  errEl.textContent = '';
  field.setAttribute('aria-invalid', 'false');
  field.removeAttribute('aria-describedby');
}
