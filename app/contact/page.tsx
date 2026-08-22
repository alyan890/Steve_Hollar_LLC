"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { a } from "framer-motion/client";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xzepjnea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHeader eyebrow="Get In Touch" title="CONTACT US" />

      <section className="py-20 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="font-display text-3xl mb-8">REACH OUT DIRECTLY</h2>

            <div className="space-y-6 mb-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-1">
                  Phone
                </p>
                <a href="tel:321-229-1012" className="text-2xl font-display hover:text-safety-green transition-colors">
                  321-229-1012
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-1">
                  Email
                </p>
                <a
                  href="mailto:steveh@stevehollarconcretellc.com"
                  className="text-lg hover:text-safety-green transition-colors break-all"
                >
                  steveh@stevehollarconcretellc.com
                </a>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-1">
                  Service Area
                </p>
                <p className="text-lg text-concrete-light">
                  Serving all your concrete needs across FL
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-safety-green mb-1">
                  Hours
                </p>
                <p className="text-lg text-concrete-light">
                  Licensed &amp; Insured &middot; Free Estimates
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="border border-concrete/30 p-8">
              <h2 className="font-display text-3xl mb-6">REQUEST AN ESTIMATE</h2>

              {submitted ? (
                <div className="py-12 text-center">
                  <p className="font-display text-2xl text-safety-green mb-2">
                    MESSAGE SENT
                  </p>
                  <p className="text-concrete-light">
                    Thanks for reaching out — we&rsquo;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-concrete-light mb-2">
                      Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      className="w-full bg-charcoal-soft border border-concrete/30 px-4 py-3 text-off-white focus:border-safety-green outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-concrete-light mb-2">
                      Phone
                    </label>
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="w-full bg-charcoal-soft border border-concrete/30 px-4 py-3 text-off-white focus:border-safety-green outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-concrete-light mb-2">
                      Email
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      className="w-full bg-charcoal-soft border border-concrete/30 px-4 py-3 text-off-white focus:border-safety-green outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-concrete-light mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-charcoal-soft border border-concrete/30 px-4 py-3 text-off-white focus:border-safety-green outline-none transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm font-mono">
                      Something went wrong — please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-safety-green text-caution-black font-mono font-bold uppercase tracking-wider px-8 py-4 hover:bg-steel-blue-bright hover:text-off-white transition-colors disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Request"}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}