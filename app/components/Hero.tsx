"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function FloatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 20 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/15 bg-champagne/5 backdrop-blur-sm mb-8"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-xs text-champagne-muted tracking-widest uppercase font-mono">
        Powered by Flapper
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#070d1f]">
      <Image
        src="/bg-hero.png"
        alt=""
        fill
        className="object-cover object-[50%_0%] md:object-right scale-100 md:scale-[0.75] md:origin-[100%_center] md:translate-x-[8%]"
        priority
        quality={90}
      />

      <div className="absolute inset-0 bg-[#070d1f]/30 md:bg-[#070d1f]/50" />
      <div className="absolute inset-x-0 top-0 h-[20%] md:h-[50%] bg-gradient-to-b from-[#070d1f] via-[#070d1f]/60 md:via-[#070d1f]/85 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-gradient-to-r from-transparent md:from-[#070d1f]/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] md:h-40 bg-gradient-to-t from-[#070d1f] via-[#070d1f]/95 md:via-transparent to-transparent" />

      <div className="relative z-10 flex items-end md:items-center min-h-[100dvh] w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="max-w-xl pb-8 pt-28 md:pt-0 md:pb-0">
          <FloatingBadge />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tighter leading-none font-medium text-ivory whitespace-nowrap"
          >
            Jet Society
            <span className="text-champagne-muted align-super text-base md:text-lg ml-1">
              &reg;
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-5 md:mt-8 text-sm md:text-lg text-champagne-muted leading-relaxed max-w-[46ch]"
          >
            A forma mais inteligente de possuir e gerenciar sua aeronave. Um
            clube seleto combinando gestão completa, eficiência operacional e
            benefícios sob medida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-row gap-3 mt-8 md:mt-10"
          >
            <a
              href="#servicos"
              className="group relative px-6 md:px-8 py-3.5 md:py-4 bg-champagne text-midnight font-medium text-sm tracking-wide rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.98] text-center"
            >
              <span className="relative z-10">Cotar voo agora</span>
              <div className="absolute inset-0 bg-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#beneficios"
              className="px-6 md:px-8 py-3.5 md:py-4 border border-champagne/20 text-champagne text-sm tracking-wide rounded-xl hover:bg-champagne/5 backdrop-blur-sm transition-all duration-300 active:scale-[0.98] text-center"
            >
              Conhecer benefícios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 md:mt-16 flex items-center gap-6 md:gap-8"
          >
            {[
              { value: "50+", label: "Aeronaves" },
              { value: "24/7", label: "Suporte" },
              { value: "100%", label: "Gestão" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-xl md:text-3xl font-medium text-ivory font-mono tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-champagne-muted tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-champagne/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-champagne/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
