import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const stats = [
    { value: "50+", label: t("about.stats.projects") },
    { value: "98%", label: t("about.stats.satisfaction") },
    { value: "2024", label: t("about.stats.founded") },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark-surface relative noise-bg"
    >
      {/* Accent glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/12 rounded-full filter blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - image + stats */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] bg-dark-card rounded-lg overflow-hidden mb-12 relative group shadow-[0_0_40px_rgba(205,234,104,0.06)]">
              <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-dark/20 mix-blend-multiply" />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl lg:text-3xl font-700 text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - content */}
          <div
            className={`lg:col-span-7 lg:pt-12 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            } [transition-delay:200ms]`}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
              {t("about.label")}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-700 mb-8 leading-[1.1] text-[#FFFFFF]">
              {t("about.heading1")}
              <br />
              {t("about.heading2")}
            </h2>
            <div className="space-y-5 text-base lg:text-lg text-white/70 leading-relaxed">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
              <p>{t("about.description3")}</p>
            </div>

            {/* Accent divider */}
            <div className="w-20 h-0.5 bg-accent/70 my-10" />

            {/* <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind",
                "Node.js",
                "Figma",
              ].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 border border-dark-border rounded-full text-muted hover:text-accent hover:border-accent/30 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
