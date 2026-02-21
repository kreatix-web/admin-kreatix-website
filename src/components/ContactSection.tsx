import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { sql, type ContactSubmission } from "../lib/neon";
import { ensureSchema } from "../lib/migrate";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const submission: ContactSubmission = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await ensureSchema();

      await sql(
        "INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)",
        [submission.name, submission.email, submission.message],
      );

      setSubmitted(true);
      setShowToast(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
        setShowToast(false);
      }, 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-40 px-6 lg:px-16 bg-dark relative"
    >
      {/* Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up max-w-md">
          <div className="bg-accent text-dark px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3">
            <CheckCircle2 size={24} className="flex-shrink-0" />
            <div>
              <p className="font-display font-bold">Message sent!</p>
              <p className="text-sm text-dark/70">
                We'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — copy */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Contact
            </p>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-[#EDEDED] leading-[1.1]">
              Let's build
              <br />
              something great.
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-10">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted text-sm">
                  Free project consultation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted text-sm">
                  Transparent pricing, no surprises
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-muted text-sm">
                  Fast turnaround on all projects
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } [transition-delay:200ms]`}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-accent transition-colors duration-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-lg py-4 px-4 text-[#EDEDED] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 placeholder:text-muted/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-accent transition-colors duration-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-lg py-4 px-4 text-[#EDEDED] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 placeholder:text-muted/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] tracking-[0.2em] uppercase text-muted mb-3 group-focus-within:text-accent transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full bg-dark-card border border-dark-border rounded-lg py-4 px-4 text-[#EDEDED] focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 placeholder:text-muted/50 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm animate-fade-in-up">
                  {error}
                </p>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group relative inline-flex items-center gap-3 bg-accent text-dark font-display font-bold text-sm tracking-wide px-8 py-4 rounded-full hover:bg-[#d8f06e] transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {submitted ? (
                    "Message Sent!"
                  ) : isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <Send
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
