"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ToggleLocal() {
    const [locale, setLocale] = useState(false); // false -> EN, true -> AR
    const router = useRouter();

    // on mount, read the preferred locale from the cookie
    useEffect(() => {
        const cookieLocale = document.cookie
            .split('; ')
            .find(row => row.startsWith('VFront_locale='))
            ?.split('=')[1];

        if (cookieLocale) {
            setLocale(cookieLocale === 'ar');
        }
        else {
            setLocale(false); // default to English if no cookie is found
        }

    }, []);

    // when locale state changes, update the cookie and reload the page
    useEffect(() => {
        document.cookie = `VFront_locale=${locale ? 'ar' : 'en'}; path=/; max-age=31536000; SameSite=lax`; // 1 year
        router.refresh(); // refresh the page to apply the new locale
    }, [locale, router]);


    const toggleText = (e) => {
        setLocale(e.target.checked);
    }

    return (
        <div className="flex items-center">
            <label htmlFor="toggleCheckBox" className="relative inline-flex items-center cursor-pointer">
                <input
                    id="toggleCheckBox"
                    type="checkbox"
                    className="sr-only"
                    checked={locale}
                    onChange={toggleText}
                    aria-checked={locale}
                    aria-label="Toggle language"
                />

                <div className="w-[3.45rem] h-7 bg-transparent border border-[var(--border-blur)] 
                rounded-full relative flex items-center px-1 transition-colors duration-200
                dark:border-gray-600 peer-checked:bg-[var(--btn-bg-hover)]">
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
                            "relative z-10 block w-5 h-5 bg-[var(--bg-white)] rounded-full shadow transform transition-transform duration-700 " +
                            (locale ? "-translate-x-[1.6rem]" : "translate-x-0")
                        }
                    />
                </div>
            </label>
        </div>
    );
}
