"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE_NAME } from "@/i18n/config";
export default function ToggleLocal() {
    const [locale, setLocale] = useState(false); // false -> EN, true -> AR
    const router = useRouter();

    // on mount, read the preferred locale from the cookie
    useEffect(() => {
        const cookieLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith(`${LOCALE_COOKIE_NAME}=`))
            ?.split('=')[1];

        if (cookieLocale) {
            setLocale(cookieLocale === 'ar');
        }
    }, []);

    // when locale state changes, update the cookie and reload the page
    const toggleText = (e) => {
    setLocale(e.target.checked); 
    const newLocale = e.target.checked ? 'ar' : 'en';
    const currentCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${LOCALE_COOKIE_NAME}=`))
        ?.split('=')[1] || 'en';

    if (newLocale !== currentCookie) {
        const secure = location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale}; path=/; max-age=31536000; SameSite=Lax${secure}`;
        router.refresh();
    }
    };


    return (
        <div className="flex items-center">
            <span id="toggleCheckBoxLabel" className="sr-only">Toggle language</span>
            <label htmlFor="toggleCheckBox" className="relative inline-flex items-center cursor-pointer">
                <input
                    id="toggleCheckBox"
                    type="checkbox"
                    className="sr-only peer"
                    checked={locale}
                    onChange={toggleText}
                    aria-checked={locale}
                    aria-labelledby="toggleCheckBoxLabel"
                />

                <div className="w-[3.45rem] h-7 bg-transparent border border-[var(--border-blur)] 
                rounded-full relative flex items-center px-1 transition-colors duration-200
                dark:border-gray-600">
                    {/* labels */}
                    <div className="absolute inset-0 flex items-center justify-between
                     px-2 text-xs font-medium text-[var(--text)] 
                     pointer-events-none">
                        <span className={`transition-opacity duration-700 ${locale ? "opacity-100" : "opacity-0"}`}>AR</span>
                        <span className={`transition-opacity duration-700 ${locale ? "opacity-0" : "opacity-100"}`}>EN</span>
                    </div>

                    {/* knob */}
                    <span
                        className={
                            "relative z-10 block w-5 h-5 bg-[var(--bg-white)] rounded-full shadow transform transition-transform duration-1000 " +
                            (locale ? "-translate-x-[1.6rem]" : "translate-x-0") +
                            " peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-indigo-500"
                        }
                    />
                </div>
            </label>
        </div>
    );
}
