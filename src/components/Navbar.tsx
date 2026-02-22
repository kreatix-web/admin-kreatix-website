import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-[#FFFFFF] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-accent text-dark font-display font-700 text-xs tracking-wide px-5 py-2.5 rounded-full hover:bg-[#d8f06e] transition-all duration-300 shadow-[0_0_20px_rgba(205,234,104,0.25)] hover:shadow-[0_0_30px_rgba(205,234,104,0.4)]"
            >
              Get in touch
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
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-sm tracking-wider uppercase text-muted hover:text-[#FFFFFF] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block mt-4 bg-accent text-dark font-display font-700 text-sm tracking-wide px-6 py-3 rounded-full"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
