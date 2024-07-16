"use client";

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
};

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set mounted to true after the component mounts
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <aside className="mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative pb-1 fade md:overflow-auto md:relative" id="nav">
          <div className="flex flex-row space-x-12 w-full">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative text-4xl"
              >
                {name}
              </Link>
            ))}
            {mounted && (
              <button onClick={toggleTheme} className="flex transition-all duration-1500 ease-in-out hover:text-neutral-800 dark:hover:text-neutral-200">
                <img
                  src={`/icons/${theme === 'dark' ? 'sun.svg' : 'moon.svg'}`}
                  alt={theme === 'dark' ? 'Sun Icon' : 'Moon Icon'}
                  className={`h-8 w-8 transition-opacity duration-1500 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
                />
                <img
                  src={`/icons/${theme === 'dark' ? 'moon.svg' : 'sun.svg'}`}
                  alt={theme === 'dark' ? 'Moon Icon' : 'Sun Icon'}
                  className={`h-8 w-8 transition-opacity duration-1500 ease-in-out ${theme === 'dark' ? 'opacity-100' : 'opacity-100'}`}
                />
              </button>
            )}
          </div>
        </nav>
      </div>
    </aside>
  );
}
