import { Trans, useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function IntroSection() {
  const { ref, isVisible } = useScrollAnimation();
  useTranslation();

  return (
    <section
      id="intro"
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark relative"
    >
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/12 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="accent-rule mb-24" />
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left label */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted">
              <Trans i18nKey="intro.label" />
            </p>
          </div>

          {/* Right statement */}
          <div className="lg:col-span-9">
            <h2
              className={`font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-600 leading-[1.15] text-[#FFFFFF] transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <Trans
                i18nKey="intro.heading"
                components={{ accent: <span className="text-accent" /> }}
              />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
