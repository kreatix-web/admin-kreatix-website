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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-16">
          <a
            href="#"
            className="text-3xl lg:text-4xl font-extrabold tracking-tight hover:scale-105 transition-all duration-500 py-1"
          >
            <span
              className="bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#4ECDC4] bg-clip-text text-transparent tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
              }}
            >
              Kreatix
            </span>
          </a>

          <div className="hidden md:flex items-center gap-12">
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide text-gray-600 hover:text-gray-900 transition-colors duration-500"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 transition-transform duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-200 animate-fade-in-up">
          <div className="px-6 py-8 space-y-6">
            {["Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors duration-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
