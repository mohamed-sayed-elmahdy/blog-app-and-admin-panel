// Import functions to detect current locale and load its messages
import { getLocale, getMessages } from "next-intl/server";
// Import supported locales and default fallback
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "./config";

// Map cache keyed by locale, stores either a Promise (inflight) or resolved messages
const messagesCacheByLocale = new Map();

export default async function getMessagesOnce() {
  // Detect the current request locale
  let locale = await getLocale();

  // Validate locale: if not supported, fallback to DEFAULT_LOCALE
  if (!SUPPORTED_LOCALES.includes(locale)) {
    locale = DEFAULT_LOCALE;
  }
  
  // If messages (or inflight Promise) already cached for this locale
  if (messagesCacheByLocale.has(locale)) {
    const v = messagesCacheByLocale.get(locale); 
    // Await in case it's still a Promise; otherwise returns messages directly
    return { locale, messages: await v }; 
  }

  // Not cached yet → load messages (returns a Promise)
  const p = getMessages(locale)
  .catch((err) => {
    // If fetching fails, remove the entry from cache
    messagesCacheByLocale.delete(locale);
   return getMessages(DEFAULT_LOCALE); // Important: if locale fails, fallback to default
  });   

  // Store the Promise in the cache immediately so concurrent calls reuse it
  messagesCacheByLocale.set(locale, p); 

  // Wait for the Promise to resolve into actual messages
  const messages = await p;

  // Return locale and its resolved messages
  return { locale, messages };
}
