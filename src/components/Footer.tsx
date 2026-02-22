import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-8 px-6 lg:px-16 bg-dark border-t border-accent/10 relative">
      {/* Accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent/8 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-800 tracking-tight text-[#FFFFFF] mb-4">
              Kreatix
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Strategy-driven web studio building digital products that perform.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {[
                "Web Design",
                "Development",
                "E-Commerce",
                "Brand Strategy",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FFFFFF] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {["About", "Contact", "Blog"].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#FFFFFF] transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                {
                  icon: <Twitter size={15} />,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  icon: <Linkedin size={15} />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <Github size={15} />,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: <Instagram size={15} />,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-dark-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="accent-rule mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted">
          <p className="font-mono text-[11px] tracking-wider">
            &copy; {currentYear} Kreatix. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="font-mono text-[11px] tracking-wider hover:text-accent transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="font-mono text-[11px] tracking-wider hover:text-accent transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
