import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';


// supported locales list
const supported = ['en', 'ar'];
const defaultLocale = 'en';

export default getRequestConfig(async ({  }) => {

  const store = await cookies();
  const localeFromCookie = store.get('VFront_locale')?.value || "en";

const locale = localeFromCookie && supported.includes(localeFromCookie) 
    ? localeFromCookie 
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});