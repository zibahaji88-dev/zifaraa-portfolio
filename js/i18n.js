import { translations } from '../data/translations.js';

const SUPPORTED = ['en', 'ar', 'fa'];
const RTL_LOCALES = ['ar', 'fa'];

const FONTS = {
  en: { display: "'Cormorant Garamond', Georgia, serif", body: "'Inter', system-ui, sans-serif" },
  ar: { display: "'Tajawal', sans-serif",                body: "'Tajawal', sans-serif" },
  fa: { display: "'Vazirmatn', sans-serif",               body: "'Vazirmatn', sans-serif" }
};

let locale = 'en';

export function t(key) {
  return translations[locale]?.[key]
    ?? translations['en']?.[key]
    ?? key;
}

export function currentLocale() {
  return locale;
}

export function setLocale(code) {
  if (!SUPPORTED.includes(code)) return;
  locale = code;
  localStorage.setItem('zifaraa_locale', code);
  _apply(code);
}

function _apply(code) {
  const html = document.documentElement;
  const isRTL = RTL_LOCALES.includes(code);

  html.setAttribute('lang', code);
  html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

  // Toggle RTL stylesheet
  const rtlLink = document.getElementById('rtl-stylesheet');
  if (rtlLink) rtlLink.disabled = !isRTL;

  // Swap font stack via CSS custom properties
  const fonts = FONTS[code] || FONTS.en;
  html.style.setProperty('--font-display', fonts.display);
  html.style.setProperty('--font-body', fonts.body);

  // Re-render all static [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
  });

  // Update language switcher button states
  document.querySelectorAll('[data-lang]').forEach(btn => {
    const active = btn.dataset.lang === code;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  // Notify views to re-render dynamic content
  document.dispatchEvent(new CustomEvent('locale:changed', { detail: { locale: code } }));
}

export function initLocale() {
  const saved    = localStorage.getItem('zifaraa_locale');
  const detected = navigator.language?.slice(0, 2);
  const initial  = SUPPORTED.includes(saved)     ? saved
                 : SUPPORTED.includes(detected)  ? detected
                 : 'en';
  locale = initial;
  _apply(initial);
}
