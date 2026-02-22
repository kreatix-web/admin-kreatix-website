import { Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

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
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              {t("footer.servicesLabel")}
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {[
                t("footer.services.webDesign"),
                t("footer.services.development"),
                t("footer.services.ecommerce"),
                t("footer.services.brandStrategy"),
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
              {t("footer.companyLabel")}
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {[
                t("footer.company.about"),
                t("footer.company.contact"),
                t("footer.company.blog"),
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

          {/* Social */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.3em] uppercase text-accent mb-6">
              {t("footer.connectLabel")}
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
            {t("footer.copyright", { year: currentYear })}
          </p>
          <div className="flex gap-8">
            <a
              href="/privacy"
              className="font-mono text-[11px] tracking-wider hover:text-accent transition-colors duration-300"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="/terms"
              className="font-mono text-[11px] tracking-wider hover:text-accent transition-colors duration-300"
            >
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
