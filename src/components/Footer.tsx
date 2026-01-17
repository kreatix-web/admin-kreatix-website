import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 px-6 bg-gradient-to-br from-[#F0E6FF] via-[#FFE4D6] to-[#E0F4F4]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3
              className="text-2xl mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#4ECDC4] bg-clip-text text-transparent tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
              }}
            >
              Kreatix
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Crafting digital experiences that inspire and transform.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900">
              Services
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Brand Strategy
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Web Design
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Development
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Digital Marketing
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900">
              Company
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Careers
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Blog
              </li>
              <li className="hover:text-gray-900 transition-colors duration-500 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-900">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF6B6B] hover:bg-[#FF6B6B] transition-all duration-500 hover:scale-110 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-white hover:border-[#A855F7] hover:bg-[#A855F7] transition-all duration-500 hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-white hover:border-[#4ECDC4] hover:bg-[#4ECDC4] transition-all duration-500 hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:text-white hover:border-[#FF6B6B] hover:bg-[#FF6B6B] transition-all duration-500 hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Kreatix. All rights reserved.</p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="hover:text-gray-900 transition-colors duration-500"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-gray-900 transition-colors duration-500"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
