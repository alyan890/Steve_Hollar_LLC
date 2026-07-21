"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-sm py-2 shadow-[0_2px_0_0_var(--safety-green)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-wide text-off-white">
          STEVE HOLLER <span className="text-safety-green">CONCRETE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-wider">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-off-white/90 hover:text-safety-green transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-safety-green transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="tel:321-229-1012"
            className="bg-safety-green text-caution-black px-4 py-2 font-mono font-bold text-sm hover:bg-steel-blue-bright hover:text-off-white transition-colors"
          >
            321-229-1012
          </a>
        </nav>

        <button
          className="md:hidden text-off-white flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-off-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block w-7 h-0.5 bg-off-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-7 h-0.5 bg-off-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-charcoal border-t border-concrete/20 mt-4"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-mono uppercase text-sm">
              {LINKS.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-off-white/90 hover:text-safety-green">
                  {link.label}
                </Link>
              ))}
              <a href="tel:321-229-1012" className="text-safety-green font-bold">
                321-229-1012
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
