import {
  Zap,
  Layers,
  ShoppingCart,
  Check,
  ShieldCheck,
  Rocket,
  Crown,
  ArrowUpRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function WorkSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useTranslation();

  const offerings = [
    {
      id: 1,
      title: t("work.offerings.singlePage.title"),
      badge: t("work.offerings.singlePage.badge"),
      description: t("work.offerings.singlePage.description"),
      features: [
        t("work.offerings.singlePage.features.f1"),
        t("work.offerings.singlePage.features.f2"),
        t("work.offerings.singlePage.features.f3"),
        t("work.offerings.singlePage.features.f4"),
        t("work.offerings.singlePage.features.f5"),
      ],
      icon: <Zap className="text-accent" size={24} />,
      image: "/images/template-concept-coffee-shop.jpg",
    },
    {
      id: 2,
      title: t("work.offerings.multiPage.title"),
      badge: t("work.offerings.multiPage.badge"),
      description: t("work.offerings.multiPage.description"),
      features: [
        t("work.offerings.multiPage.features.f1"),
        t("work.offerings.multiPage.features.f2"),
        t("work.offerings.multiPage.features.f3"),
        t("work.offerings.multiPage.features.f4"),
      ],
      icon: <Layers className="text-accent" size={24} />,
      image: "/images/multipage.jpg",
    },
    {
      id: 3,
      title: t("work.offerings.ecommerce.title"),
      badge: t("work.offerings.ecommerce.badge"),
      description: t("work.offerings.ecommerce.description"),
      features: [
        t("work.offerings.ecommerce.features.f1"),
        t("work.offerings.ecommerce.features.f2"),
        t("work.offerings.ecommerce.features.f3"),
        t("work.offerings.ecommerce.features.f4"),
        t("work.offerings.ecommerce.features.f5"),
      ],
      icon: <ShoppingCart className="text-accent" size={24} />,
      image: "/images/ecommerce.jpg",
    },
  ];

  const essentialFeatures = [
    t("work.supportHosting.essential.features.f1"),
    t("work.supportHosting.essential.features.f2"),
    t("work.supportHosting.essential.features.f3"),
    t("work.supportHosting.essential.features.f4"),
    t("work.supportHosting.essential.features.f5"),
    t("work.supportHosting.essential.features.f6"),
    t("work.supportHosting.essential.features.f7"),
  ];

  const growthFeatures = [
    t("work.supportHosting.growth.features.f1"),
    t("work.supportHosting.growth.features.f2"),
    t("work.supportHosting.growth.features.f3"),
    t("work.supportHosting.growth.features.f4"),
    t("work.supportHosting.growth.features.f5"),
    t("work.supportHosting.growth.features.f6"),
    t("work.supportHosting.growth.features.f7"),
  ];

  const proFeatures = [
    t("work.supportHosting.pro.features.f1"),
    t("work.supportHosting.pro.features.f2"),
    t("work.supportHosting.pro.features.f3"),
    t("work.supportHosting.pro.features.f4"),
    t("work.supportHosting.pro.features.f5"),
    t("work.supportHosting.pro.features.f6"),
    t("work.supportHosting.pro.features.f7"),
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark relative"
    >
      {/* Accent glow */}
      <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[500px] bg-accent/10 rounded-full filter blur-[200px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div
          className={`grid lg:grid-cols-12 gap-8 mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              {t("work.label")}
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#FFFFFF] mb-4">
              {t("work.heading")}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              {t("work.subheading")}
            </p>
          </div>
        </div>

        {/* Offering cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.id}
              className={`group transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/2] bg-dark-card group-hover:shadow-[0_0_30px_rgba(205,234,104,0.08)]">
                <img
                  src={offering.image}
                  alt={`Illustration for ${offering.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-dark-surface/80 backdrop-blur-sm border border-dark-border flex items-center justify-center">
                  {offering.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-accent bg-accent/15 px-2.5 py-1 rounded font-semibold">
                    {offering.badge}
                  </span>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#FFFFFF] group-hover:text-accent transition-colors duration-300">
                  {offering.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {offering.description}
                </p>
                <ul className="mt-3 space-y-2">
                  {offering.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted">
                      <Check
                        size={14}
                        className="mt-0.5 text-accent shrink-0"
                      />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase text-accent hover:text-[#FFFFFF] transition-colors duration-300 mt-4 group/link"
                  aria-label={`${t("work.getStarted")} - ${offering.title}`}
                >
                  {t("work.getStarted")}
                  <ArrowUpRight
                    size={14}
                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support/Hosting plans */}
        <div
          className={`mt-24 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-xl border border-dark-border bg-dark-surface p-8 lg:p-10 relative overflow-hidden">
            {/* Subtle accent top-border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-10">
              <div>
                <h4 className="font-display text-2xl font-bold text-[#FFFFFF] mb-2">
                  {t("work.supportHosting.heading")}
                </h4>
                <p className="text-muted">
                  {t("work.supportHosting.description")}
                  <br />
                  {t("work.supportHosting.description2")}
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-accent text-dark font-display font-bold text-sm px-6 py-3 rounded-full hover:bg-[#d8f06e] transition-all duration-300 shrink-0 shadow-[0_0_25px_rgba(205,234,104,0.3)] hover:shadow-[0_0_35px_rgba(205,234,104,0.5)]"
              >
                {t("work.supportHosting.talkToUs")}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Essential */}
              <div className="group rounded-lg border border-dark-border bg-dark-card hover:border-accent/30 hover:shadow-[0_0_25px_rgba(205,234,104,0.06)] transition-all duration-300 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[#FFFFFF]">
                      {t("work.supportHosting.essential.name")}
                    </h5>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                      {t("work.supportHosting.essential.tagline")}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted">
                  {essentialFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="mt-0.5 text-accent shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <br />
                <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                  <strong>{t("work.supportHosting.idealForLabel")}</strong>{" "}
                  {t("work.supportHosting.essential.idealFor")}
                </p>
              </div>

              {/* Growth */}
              <div className="group rounded-lg border border-dark-border bg-dark-card hover:border-accent/30 hover:shadow-[0_0_25px_rgba(205,234,104,0.06)] transition-all duration-300 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Rocket size={18} />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[#FFFFFF]">
                      {t("work.supportHosting.growth.name")}
                    </h5>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                      {t("work.supportHosting.growth.tagline")}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted">
                  {growthFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="mt-0.5 text-accent shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <br />
                <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                  <strong>{t("work.supportHosting.idealForLabel")}</strong>{" "}
                  {t("work.supportHosting.growth.idealFor")}
                </p>
              </div>

              {/* Pro */}
              <div className="group rounded-lg border border-accent/30 bg-dark-card hover:border-accent/50 hover:shadow-[0_0_30px_rgba(205,234,104,0.1)] transition-all duration-300 p-6 relative overflow-hidden">
                {/* <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.2em] uppercase bg-accent text-dark px-2 py-0.5 rounded">
                  Popular
                </div> */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Crown size={18} />
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-[#FFFFFF]">
                      {t("work.supportHosting.pro.name")}
                    </h5>
                    <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                      {t("work.supportHosting.pro.tagline")}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 text-sm text-muted">
                  {proFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className="mt-0.5 text-accent shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <br />
                <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                  <strong>{t("work.supportHosting.idealForLabel")}</strong>{" "}
                  {t("work.supportHosting.pro.idealFor")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
