import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect, useCallback } from "react";

interface NavbarProps {
  lang: "id" | "en";
}

const navContent = {
  id: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Tentang Kami", href: "#about" },
      { label: "Layanan", href: "#services" },
      { label: "Proyek", href: "#projects" },
      { label: "Kontak", href: "#contact" },
    ],
  },
  en: {
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

export default function Navbar({ lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setDark(document.documentElement.classList.contains("dark"));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleDark = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  }, []);

  const t = navContent[lang];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <NextImage
            src="/images/icon_company.jpeg"
            alt="Syah Construction Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span
            className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-primary dark:text-white" : "text-white"
            }`}
          >
            Syah Construction
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {t.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                scrolled ? "text-slate-700 dark:text-slate-300" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`ml-2 w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
              scrolled
                ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 bg-slate-50 dark:bg-slate-800/50"
                : "text-white bg-white/20 hover:bg-white/30"
            }`}
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Language switcher */}
          <div className="flex items-center gap-1 border-l pl-4 border-white/20 dark:border-slate-700">
            <Link
              href="/id"
              scroll={false}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-colors ${
                lang === "id"
                  ? "bg-secondary text-primary-900 font-bold"
                  : scrolled
                  ? "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ID
            </Link>
            <Link
              href="/en"
              scroll={false}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-colors ${
                lang === "en"
                  ? "bg-secondary text-primary-900 font-bold"
                  : scrolled
                  ? "text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className={`min-w-[44px] min-h-[44px] rounded-lg flex items-center justify-center transition-colors ${
              scrolled
                ? "text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50"
                : "text-white bg-white/20"
            }`}
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="relative z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen
                    ? "rotate-45 translate-y-2 bg-white"
                    : scrolled
                    ? "bg-primary dark:bg-white"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen ? "opacity-0" : scrolled ? "bg-primary dark:bg-white" : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  isOpen
                    ? "-rotate-45 -translate-y-2 bg-white"
                    : scrolled
                    ? "bg-primary dark:bg-white"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay — always in DOM, animated via CSS transform */}
      <div
        className={`fixed inset-0 bg-primary-900/95 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-out md:hidden will-change-transform ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {t.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={closeMenu}
              className="text-white text-2xl font-semibold hover:text-secondary transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}

          <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
            <Link
              href="/id"
              scroll={false}
              onClick={closeMenu}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
                lang === "id"
                  ? "bg-secondary text-primary-900 font-bold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Indonesia
            </Link>
            <Link
              href="/en"
              scroll={false}
              onClick={closeMenu}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[44px] flex items-center ${
                lang === "en"
                  ? "bg-secondary text-primary-900 font-bold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              English
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
