"use client";

import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { List, X, GlobeSimple, CaretDown } from "@phosphor-icons/react";
import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent } from "react";
import { type Locale, type Dictionary, locales } from "@/lib/dictionaries";

const localeLabels: Record<Locale, Record<Locale, string>> = {
  "pt-BR": { "pt-BR": "Português", "en-US": "Inglês", "es-ES": "Espanhol" },
  "en-US": { "pt-BR": "Portuguese", "en-US": "English", "es-ES": "Spanish" },
  "es-ES": { "pt-BR": "Portugués", "en-US": "Inglés", "es-ES": "Español" },
};

function MagneticButton({
  children,
  href,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: ReactMouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className="group relative py-2 text-sm text-champagne-muted tracking-wide hover:text-champagne transition-colors duration-300">
      {label}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne/40 group-hover:w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
    </a>
  );
}

function LocaleSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const otherLocales = locales.filter((l) => l !== locale);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className={`relative ${className ?? ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-champagne-muted tracking-wider hover:text-champagne transition-colors duration-300"
      >
        <GlobeSimple size={14} weight="bold" />
        {localeLabels[locale][locale]}
        <CaretDown size={10} weight="bold" className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-1 min-w-[120px] rounded-lg border border-champagne/10 bg-midnight/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {otherLocales.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono text-champagne-muted tracking-wider hover:text-champagne hover:bg-champagne/[0.06] transition-colors duration-200"
              >
                {localeLabels[locale][l]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.benefits, href: "#beneficios" },
    { label: t.nav.app, href: "#app" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-midnight/60 backdrop-blur-2xl border-b border-champagne/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20">
          <div className="flex items-center justify-between h-20">
            <a href={`/${locale}`} className="flex items-center gap-1.5 group">
              <span className="text-ivory text-base tracking-tight font-medium group-hover:text-champagne transition-colors duration-300">
                Jet Society
              </span>
              <span className="text-champagne-muted/60 text-[9px] font-mono tracking-widest align-super">
                &reg;
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-8 mr-8">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>

              <div className="w-px h-5 bg-champagne/10 mr-4" />

              <LocaleSwitcher locale={locale} className="mr-4" />

              <MagneticButton
                href="#servicos"
                className="relative text-sm px-6 py-2.5 text-champagne rounded-lg overflow-hidden transition-all duration-300 active:scale-[0.97] bg-champagne/[0.08] border border-champagne/[0.12] shadow-[inset_0_1px_0_rgba(203,192,170,0.06)] hover:bg-champagne/[0.14] hover:border-champagne/20"
              >
                {t.nav.cta}
              </MagneticButton>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <LocaleSwitcher locale={locale} />

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-champagne p-2 active:scale-[0.92] transition-transform"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <X size={22} weight="bold" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <List size={22} weight="bold" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-midnight/80 backdrop-blur-2xl border-b border-champagne/[0.06]"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="px-6 py-8 flex flex-col gap-1"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="text-champagne-muted text-lg py-3 hover:text-champagne transition-colors border-b border-champagne/[0.04] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#servicos"
                onClick={() => setIsOpen(false)}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="text-sm px-6 py-3.5 bg-champagne/[0.08] border border-champagne/[0.12] shadow-[inset_0_1px_0_rgba(203,192,170,0.06)] text-champagne rounded-lg text-center mt-4 active:scale-[0.98]"
              >
                {t.nav.cta}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
