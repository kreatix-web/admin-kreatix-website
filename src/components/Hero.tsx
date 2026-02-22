export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark noise-bg flex flex-col">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] z-[1]" />

      {/* Single accent glow - subtle, not a blob party */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] bg-accent/15 rounded-full filter blur-[200px] z-[1]" />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-16 pt-24 pb-32">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Monospace tag */}
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent/80 mb-8 opacity-0 animate-fade-in-up">
            Web Studio — Est. 2024
          </p>

          {/* Main headline - editorial, massive */}
          <h1 className="font-display text-[clamp(2.8rem,8vw,9rem)] font-800 leading-[0.92] tracking-[-0.03em] mb-8 opacity-0 animate-fade-in-scale">
            <span className="block text-white">We design & build</span>
            <span className="block text-accent drop-shadow-[0_0_40px_rgba(205,234,104,0.3)]">
              websites that convert
            </span>
          </h1>

          {/* Subline */}
          <p className="text-lg lg:text-xl text-white/70 font-light max-w-xl leading-relaxed opacity-0 animate-fade-in-up [animation-delay:200ms]">
            For businesses that demand more than a template.
            <br className="hidden sm:block" />
            Strategy. Design. Development. Results.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap items-center gap-6 mt-12 opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-accent text-dark font-display font-700 text-sm tracking-wide px-8 py-4 rounded-full hover:bg-[#d8f06e] transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(205,234,104,0.3)] hover:shadow-[0_0_40px_rgba(205,234,104,0.5)]"
            >
              Start a project
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-muted hover:text-[#FFFFFF] font-mono text-xs tracking-wider uppercase transition-colors duration-300"
            >
              View services
            </a>
          </div>
        </div>
      </div>

      {/* Marquee ticker strip */}
      <div className="relative z-10 border-t border-accent/10 overflow-hidden py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8">
              {[
                "Web Design",
                "Development",
                "E-Commerce",
                "Brand Strategy",
                "UI/UX",
                "SEO",
                "Hosting",
                "Support",
              ].map((item) => (
                <span key={`${i}-${item}`} className="flex items-center gap-8">
                  <span className="font-mono text-xs tracking-widest uppercase text-muted/70">
                    {item}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <a
        href="#intro"
        className="absolute bottom-20 right-6 lg:right-16 z-10 flex flex-col items-center gap-3 text-muted hover:text-accent transition-colors duration-500 group opacity-0 animate-fade-in-up [animation-delay:600ms]"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-dark-border relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-accent/60 animate-bounce" />
        </div>
      </a> */}
    </section>
  );
}
