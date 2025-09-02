'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from "react-icons/fi"

export default function ThemeSwitch({ className = '' }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Small Placeholder to avoid layout shift
    return (
      <button
        aria-label="Toggle theme"
        className={`h-7 w-6 rounded-xl animate-pulse ${className}`}
        disabled
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`flex justify-center items-center rounded-md 
           transition-colors text-xl sm:text-[20px]
           text-[var(--text)] border-none  place-items-center border border-gray-200 dark:border-gray-700 ${className} font-semibold`}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >

      {isDark ? (
        <FiSun />
      ) : (
        <FiMoon />
      )}
    </button>
  );
}