"use client";

import { motion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative pt-40 pb-20 bg-charcoal-soft grain-overlay overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-safety-green/10 rounded-full blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-safety-green uppercase tracking-widest text-sm mb-3"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl"
        >
          {title}
        </motion.h1>
      </div>
      <div className="hazard-stripe mt-16" />
    </section>
  );
}
