import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { value: "50+", label: "Projects delivered" },
    { value: "98%", label: "Client satisfaction" },
    { value: "2024", label: "Founded" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark-surface relative noise-bg"
    >
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
            <div className="aspect-[4/5] bg-dark-card rounded-lg overflow-hidden mb-12 relative group">
              <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-dark/30 mix-blend-multiply" />
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
              About
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-700 mb-8 leading-[1.1] text-[#EDEDED]">
              Small team.
              <br />
              Big standards.
            </h2>
            <div className="space-y-5 text-base lg:text-lg text-muted leading-relaxed">
              <p>
                We're a tight-knit collective of designers, developers, and
                strategists who believe great work comes from giving a damn
                about the details.
              </p>
              <p>
                No bloated teams. No endless meetings. Just focused people
                building focused products — from concept to launch and beyond.
              </p>
              <p>
                We've partnered with startups and established businesses alike,
                bringing their visions to life through clean design and
                bulletproof code.
              </p>
            </div>

            {/* Accent divider */}
            <div className="w-16 h-px bg-accent/40 my-10" />

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
