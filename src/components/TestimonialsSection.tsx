import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    company: "TechFlow Inc",
    role: "CEO",
    content:
      "Kreatix transformed our digital presence completely. Their attention to detail and creative approach exceeded all expectations.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Chen",
    company: "Innovate Labs",
    role: "CTO",
    content:
      "Working with Kreatix was an absolute pleasure. They understood our vision from day one and brought it to life with exceptional design.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Bright Future Co",
    role: "Marketing Director",
    content:
      "The level of professionalism and creativity Kreatix brings is unmatched. Our new website has significantly increased engagement.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "David Park",
    company: "Momentum Digital",
    role: "Founder",
    content:
      "Kreatix doesn't just build websites, they create experiences. Their strategic approach and stunning designs have helped us stand out.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    company: "NextGen Solutions",
    role: "VP of Marketing",
    content:
      "The team at Kreatix delivered beyond our expectations. Their innovative designs and seamless execution made our project a huge success.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Creative Studios",
    role: "Creative Director",
    content:
      "Working with Kreatix was a game-changer. Their ability to translate our ideas into stunning visual experiences is truly remarkable.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const totalCards = testimonials.length;

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalCards]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark-surface relative overflow-hidden noise-bg"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/3 rounded-full filter blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div
          className={`grid lg:grid-cols-12 gap-8 mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              Testimonials
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 text-[#EDEDED]">
              Clients talk
            </h2>
            <p className="text-lg text-muted max-w-2xl">
              Don't just take our word for it — hear from the people we've built
              for.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 mb-10 px-1 transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3 + 1.5)}%)`,
            }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div
                  className={`bg-dark-card border border-dark-border rounded-xl p-8 hover:border-accent/20 transition-all duration-500 h-full flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Quote */}
                  <div className="mb-5">
                    <Quote size={28} className="text-accent/30" />
                  </div>

                  {/* Text */}
                  <p className="text-[#EDEDED]/80 leading-relaxed mb-8 flex-1">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-dark-border">
                    <div className="w-11 h-11 rounded-full overflow-hidden ring-1 ring-accent/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#EDEDED] text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="font-mono text-[10px] tracking-wider uppercase text-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-px transition-all duration-300 ${
                    index === currentIndex
                      ? "w-10 bg-accent"
                      : "w-6 bg-dark-border hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center transition-all duration-300 hover:border-accent text-muted hover:text-accent"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full border border-dark-border flex items-center justify-center transition-all duration-300 hover:border-accent text-muted hover:text-accent"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
