import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden max-w-full">
      {/* Vibrant creative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFF5EB] via-[#FFE4D6] to-[#F0E6FF]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B6B] rounded-full filter blur-[150px] opacity-30 animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-[#4ECDC4] rounded-full filter blur-[130px] opacity-25 animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-[#A855F7] rounded-full filter blur-[120px] opacity-20 animate-pulse [animation-delay:2s]" />
        </div>
      </div>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_#00000008_1px,_transparent_1px)] bg-[length:24px_24px]" />

      <div className="relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 lg:mb-8 text-balance leading-[0.95] opacity-0 animate-fade-in-scale text-gray-900">
            Crafting Digital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#A855F7] to-[#4ECDC4]">
              Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light tracking-wide max-w-2xl mx-auto opacity-0 animate-fade-in-up [animation-delay:300ms]">
            Award-winning web agency building products that people love
          </p>
        </div>
      </div>

      <a
        href="#intro"
        className="absolute bottom-12 left-0 right-0 mx-auto w-fit flex flex-col items-center gap-2 text-gray-400 hover:text-gray-900 transition-all duration-700 group opacity-0 animate-fade-in-up [animation-delay:600ms]"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown
          size={24}
          className="animate-bounce group-hover:translate-y-1 transition-transform duration-500"
        />
      </a>
    </section>
  );
}
