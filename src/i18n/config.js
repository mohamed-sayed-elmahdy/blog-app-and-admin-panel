// config.js

// Supported locales for the site
export const SUPPORTED_LOCALES = ['en', 'ar'];

// Default locale
export const DEFAULT_LOCALE = 'en';

// Cookie name for storing user's selected locale
// SameSite=Lax → preserves locale on external link navigations
// max-age=31536000 → 1 year
// Secure → only sent over HTTPS
export const LOCALE_COOKIE_NAME = 'VFrontApp_locale';
