import {
  Zap,
  Layers,
  ShoppingCart,
  Check,
  ShieldCheck,
  Rocket,
  Crown,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Offering = {
  id: number;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  image: string;
};

const offerings: Offering[] = [
  {
    id: 1,
    title: "Website in a day",
    badge: "Single‑page",
    description:
      "For fast‑moving owners and small local businesses that rely on Facebook pages. A polished single‑page site with multiple sections and optional contact/booking forms.",
    features: [
      "Single‑page application",
      "Multiple content sections",
      "Optional contact/booking forms",
      "Quick launch",
      "Perfect for Facebook uplift",
    ],
    icon: <Zap className="text-[#FF6B6B]" size={28} />,
    image: "/images/template-concept-coffee-shop.jpg",
  },
  {
    id: 2,
    title: "Multi‑page",
    badge: "Up to 5 pages",
    description:
      "Everything in ‘Website in a day’, plus up to 5 pages with multiple sections per page for more depth and SEO coverage.",
    features: [
      "Up to 5 pages",
      "Section‑rich layouts",
      "SEO‑ready structure",
      "Fast and accessible",
    ],
    icon: <Layers className="text-[#A855F7]" size={28} />,
    image: "/images/multipage.jpg",
  },
  {
    id: 3,
    title: "E‑commerce",
    badge: "Shop & CMS",
    description:
      "Multi‑page with product listings and product detail pages, sorting & filters. Manage products and process payments.",
    features: [
      "Product listing & detail pages",
      "Sorting & filters",
      "CMS‑managed content",
      "Shopping cart & checkout",
      "Payment gateway integration",
    ],
    icon: <ShoppingCart className="text-[#4ECDC4]" size={28} />,
    image: "/images/ecommerce.jpg",
  },
];

export default function WorkSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 lg:py-24 px-6 bg-[#FFFBF7]"
    >
      <div className="max-w-[1600px] mx-auto">
        <div
          className={`mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-[#FF6B6B] mb-4">
            Services
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
            Services
          </h2>
          <p className="text-gray-600 max-w-2xl mt-4">
            Websites tailored to your business stage—from fast single‑page
            builds to multi‑page and full e‑commerce.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className={`group cursor-pointer transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3/2]">
                <img
                  src={offering.image}
                  alt={`Illustration for ${offering.title}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                    {offering.icon}
                  </div>
                </div> */}
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium text-[#FF6B6B] tracking-wide">
                  {offering.badge}
                </p>
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 group-hover:text-[#A855F7] transition-colors duration-500">
                  {offering.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {offering.description}
                </p>
                <ul className="mt-2 space-y-2">
                  {offering.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <Check size={16} className="mt-0.5 text-[#4ECDC4]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#A855F7] hover:text-gray-900 transition-colors duration-300 mt-3"
                  aria-label={`Get started with ${offering.title}`}
                >
                  Get started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Support/Hosting plans blurb */}
        <div
          className={`mt-14 lg:mt-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 lg:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Support & Hosting Plans
                </h4>
                <p className="text-gray-600 mt-1">
                  Choose a plan that fits your pace—from essentials to growth
                  and pro-level care.
                </p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-[#FF6B6B] to-[#A855F7] text-white hover:opacity-90 transition-opacity duration-300 shrink-0"
              >
                Talk to us
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {/* Essential */}
              <div className="group rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/10 border border-[#4ECDC4]/20 flex items-center justify-center text-[#4ECDC4]">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Essential</h5>
                    <p className="text-xs text-gray-500">
                      Care + secure hosting
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Managed hosting
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" /> Free
                    SSL & CDN
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" /> Weekly
                    backups
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" /> Email
                    support
                  </li>
                </ul>
              </div>

              {/* Growth */}
              <div className="group rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 flex items-center justify-center text-[#FF6B6B]">
                    <Rocket size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Growth</h5>
                    <p className="text-xs text-gray-500">
                      Faster support & staging
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Priority support
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" /> Uptime
                    monitoring
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Staging site
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Monthly report
                  </li>
                </ul>
              </div>

              {/* Pro */}
              <div className="group rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md transition-all p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/20 flex items-center justify-center text-[#A855F7]">
                    <Crown size={18} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Pro</h5>
                    <p className="text-xs text-gray-500">Performance + SLA</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" /> 24/7
                    SLA
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Advanced caching/CDN
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Headless CMS support
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-[#4ECDC4]" />{" "}
                    Quarterly strategy call
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
