import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { 
  SUPPORTED_LOCALES, 
  DEFAULT_LOCALE, 
  LOCALE_COOKIE_NAME 
} from "@/i18n/config";

// supported locales list
const supported = SUPPORTED_LOCALES;
const defaultLocale = DEFAULT_LOCALE;

export default getRequestConfig(async ({}) => {

  const store = await cookies();
  const localeFromCookie = store.get(LOCALE_COOKIE_NAME)?.value;

const locale = localeFromCookie && supported.includes(localeFromCookie) 
    ? localeFromCookie 
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});