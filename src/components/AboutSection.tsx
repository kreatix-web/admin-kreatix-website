// import { Twitter, Linkedin, Mail } from 'lucide-react';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 lg:py-24 px-6 bg-gradient-to-br from-[#F0E6FF] via-[#FFE4D6] to-[#E0F4F4]"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`relative group transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[15/16] bg-gradient-to-br from-[#A855F7]/20 to-[#4ECDC4]/20 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center hover:scale-105 transition-all duration-700" />
            </div>
            <div className="absolute inset-0 border-2 border-[#A855F7]/30 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            } [transition-delay:200ms]`}
          >
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-[#A855F7] mb-4">
                About Us
              </p>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Building the future, one pixel at a time
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  We are a collective of designers, developers, and strategists
                  united by a passion for creating exceptional digital
                  experiences.
                </p>
                <p>
                  With over a decade of expertise, we've partnered with startups
                  and Fortune 500 companies to bring their visions to life
                  through elegant design and cutting-edge technology.
                </p>
                <p>
                  Our approach combines strategic thinking with meticulous
                  craft, delivering products that don't just look beautiful—they
                  perform brilliantly.
                </p>
              </div>
            </div>

            {/* <div className="flex gap-4 pt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#contact"
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-[#00E5CC] hover:bg-[#00E5CC]/10 transition-all duration-500 hover:scale-110"
                aria-label="Newsletter"
              >
                <Mail size={18} />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
