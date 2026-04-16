import React, { useEffect, useMemo, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const navLinks = useMemo(
    () => [
      { href: '#', label: 'Home' },
      { href: '#services', label: 'Services' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#', label: 'About Us' },
      { href: '#contact', label: 'Contact Us' },
    ],
    []
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" onClick={closeMobile} className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-poppins font-bold text-2xl tracking-tight">
              <span className="text-shweGold">Shwe</span>
              <span className="text-white">Pilot</span>
            </span>
          </a>

          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors px-3 py-2 text-sm font-medium ${
                  link.href === '#'
                    ? 'text-white hover:text-shweGold'
                    : 'text-gray-300 hover:text-shweGold'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-shweGold" /> : <Moon className="w-5 h-5 text-shweGold" />}
            </button>

            <a
              href="#contact"
              className="bg-shweGold hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md transform hover:-translate-y-0.5"
            >
              အလုပ်အပ်ရန်
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-shweGold" /> : <Moon className="w-5 h-5 text-shweGold" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary/95 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-200 hover:bg-white/5 hover:text-shweGold transition-colors"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-2 inline-flex w-full justify-center bg-shweGold hover:bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold text-sm transition-all shadow-md"
            >
              အလုပ်အပ်ရန်
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
