import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const currentLang = i18n.language?.startsWith("el") ? "el" : "en";

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang menu on outside click
  useEffect(() => {
    const handleClickOutside = () => setLangMenuOpen(false);
    if (langMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [langMenuOpen]);

  const navItems = [
    { key: "services", label: t("nav.services") },
    { key: "about", label: t("nav.about") },
    { key: "contact", label: t("nav.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-accent/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-display text-3xl font-800 tracking-tight text-[#FFFFFF] hover:text-accent transition-colors duration-300"
          >
            Kreatix
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-[#FFFFFF] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLangMenuOpen(!langMenuOpen);
                }}
                className="flex items-center gap-1.5 font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-[#FFFFFF] transition-colors duration-300"
                aria-label="Select language"
              >
                <Globe size={14} />
                {currentLang === "en" ? "EN" : "ΕΛ"}
              </button>
              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-dark-surface border border-dark-border rounded-lg shadow-xl overflow-hidden min-w-[120px] animate-fade-in-up">
                  <button
                    onClick={() => toggleLanguage("en")}
                    className={`w-full text-left px-4 py-2.5 font-mono text-xs tracking-wider transition-colors duration-200 ${
                      currentLang === "en"
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-[#FFFFFF] hover:bg-dark-card"
                    }`}
                  >
                    🇬🇧 English
                  </button>
                  <button
                    onClick={() => toggleLanguage("el")}
                    className={`w-full text-left px-4 py-2.5 font-mono text-xs tracking-wider transition-colors duration-200 ${
                      currentLang === "el"
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-[#FFFFFF] hover:bg-dark-card"
                    }`}
                  >
                    🇬🇷 Ελληνικά
                  </button>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="ml-2 bg-accent text-dark font-display font-700 text-xs tracking-wide px-5 py-2.5 rounded-full hover:bg-[#d8f06e] transition-all duration-300 shadow-[0_0_20px_rgba(205,234,104,0.25)] hover:shadow-[0_0_30px_rgba(205,234,104,0.4)]"
            >
              {t("nav.getInTouch")}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#FFFFFF] transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-surface/98 backdrop-blur-xl border-t border-dark-border animate-fade-in-up">
          <div className="px-6 py-10 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-sm tracking-wider uppercase text-muted hover:text-[#FFFFFF] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex items-center gap-3 pt-2">
              <Globe size={14} className="text-muted" />
              <button
                onClick={() => toggleLanguage("en")}
                className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                  currentLang === "en"
                    ? "text-accent"
                    : "text-muted hover:text-[#FFFFFF]"
                }`}
              >
                EN
              </button>
              <span className="text-dark-border">|</span>
              <button
                onClick={() => toggleLanguage("el")}
                className={`font-mono text-sm tracking-wider transition-colors duration-300 ${
                  currentLang === "el"
                    ? "text-accent"
                    : "text-muted hover:text-[#FFFFFF]"
                }`}
              >
                ΕΛ
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-4 bg-accent text-dark font-display font-700 text-sm tracking-wide px-6 py-3 rounded-full"
            >
              {t("nav.getInTouch")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
