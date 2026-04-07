"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { type Dictionary } from "@/lib/dictionaries";

const pressLogos = [
  { name: "Forbes", src: "/press/forbes.png", width: 120 },
  { name: "Bloomberg", src: "/press/bloomberg.png", width: 140 },
  { name: "Financial Times", src: "/press/financial-times.png", width: 160 },
  { name: "Business Insider", src: "/press/business-insider.png", width: 150 },
  { name: "TechCrunch", src: "/press/techcrunch.png", width: 140 },
];

export function Press({ t }: { t: Dictionary }) {
  return (
    <section className="relative py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center">
            <span className="text-xs font-mono text-champagne-muted/60 tracking-widest uppercase">
              {t.press.label}
            </span>
          </div>

          <div className="mt-12 flex items-center justify-center gap-10 md:gap-14 flex-wrap">
            {pressLogos.map((logo, i) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="opacity-30 hover:opacity-60 transition-opacity duration-500 grayscale invert brightness-75"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={40}
                  className="h-12 md:h-24 w-auto object-contain"
                />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
