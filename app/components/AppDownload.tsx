"use client";

import { motion } from "framer-motion";
import { AppStoreLogo, GooglePlayLogo } from "@phosphor-icons/react";
import { AnimatedSection } from "./AnimatedSection";
import { type Dictionary } from "@/lib/dictionaries";

export function AppDownload({ t }: { t: Dictionary }) {
  return (
    <section id="app" className="relative py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] border border-champagne/[0.08] bg-gradient-to-br from-champagne/[0.04] via-transparent to-champagne/[0.02] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-champagne/[0.03] to-transparent" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 p-8 md:p-16 lg:p-20 items-center">
            <AnimatedSection>
              <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
                {t.appDownload.label}
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl tracking-tighter leading-none font-medium text-ivory">
                Jet Society
              </h2>
              <p className="mt-6 text-base text-champagne-muted leading-relaxed max-w-[45ch]">
                {t.appDownload.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-champagne/15 bg-champagne/[0.05] hover:bg-champagne/10 transition-all duration-300 active:scale-[0.98]"
                >
                  <AppStoreLogo
                    size={28}
                    weight="fill"
                    className="text-champagne"
                  />
                  <div>
                    <span className="block text-[10px] text-champagne-muted uppercase tracking-wider">
                      Download on the
                    </span>
                    <span className="block text-sm font-medium text-ivory tracking-tight">
                      App Store
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  className="group flex items-center gap-4 px-6 py-4 rounded-xl border border-champagne/15 bg-champagne/[0.05] hover:bg-champagne/10 transition-all duration-300 active:scale-[0.98]"
                >
                  <GooglePlayLogo
                    size={28}
                    weight="fill"
                    className="text-champagne"
                  />
                  <div>
                    <span className="block text-[10px] text-champagne-muted uppercase tracking-wider">
                      GET IT ON
                    </span>
                    <span className="block text-sm font-medium text-ivory tracking-tight">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3} className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="w-[220px] md:w-[260px] h-[440px] md:h-[520px] rounded-[2.5rem] border-2 border-champagne/15 bg-gradient-to-b from-navy to-deep-navy shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8">
                    <div className="w-16 h-16 rounded-2xl bg-champagne/10 border border-champagne/15 flex items-center justify-center">
                      <span className="text-champagne text-xl font-medium tracking-tighter">
                        JS
                      </span>
                    </div>
                    <span className="text-sm text-ivory font-medium tracking-tight">
                      Jet Society
                    </span>
                    <div className="mt-4 w-full space-y-3">
                      {[60, 80, 45, 70].map((w, i) => (
                        <div
                          key={i}
                          className="h-2 rounded-full bg-champagne/[0.06]"
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
