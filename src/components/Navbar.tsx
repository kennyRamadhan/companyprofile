import Link from "next/link";
import { useState, useEffect } from "react";

interface NavbarProps {
  lang: "id" | "en";
}

const navContent = {
  id: {
    links: [
      { label: "Beranda", href: "#home" },
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = navContent[lang];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center font-bold text-white text-base">
            B
          </div>
          <span
            className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Bangun Jaya Abadi
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {t.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-secondary ${
                scrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2 border-l pl-4 border-white/20">
            <Link
              href="/id"
              className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-colors ${
                lang === "id"
                  ? "bg-secondary text-white"
                  : scrolled
                  ? "text-slate-500 hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              ID
            </Link>
            <Link
              href="/en"
              className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-colors ${
                lang === "en"
                  ? "bg-secondary text-white"
                  : scrolled
                  ? "text-slate-500 hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isOpen
                  ? "rotate-45 translate-y-2 bg-white"
                  : scrolled
                  ? "bg-primary"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isOpen ? "opacity-0" : scrolled ? "bg-primary" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                isOpen
                  ? "-rotate-45 -translate-y-2 bg-white"
                  : scrolled
                  ? "bg-primary"
                  : "bg-white"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-primary-900/95 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {t.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-semibold hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="flex gap-3 mt-4 pt-4 border-t border-white/20">
            <Link
              href="/id"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                lang === "id"
                  ? "bg-secondary text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Indonesia
            </Link>
            <Link
              href="/en"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                lang === "en"
                  ? "bg-secondary text-white"
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
