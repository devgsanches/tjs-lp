"use client";

import { UserCircleGear, Gear, TrendDown } from "@phosphor-icons/react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "./AnimatedSection";
import { type Dictionary } from "@/lib/dictionaries";

const benefitIcons = [UserCircleGear, Gear, TrendDown];

export function Benefits({ t }: { t: Dictionary }) {
  return (
    <section id="beneficios" className="relative py-24 md:py-40">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-deep-navy/50 to-midnight" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <AnimatedSection className="lg:sticky lg:top-32">
            <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
              {t.benefits.label}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl tracking-tighter leading-none font-medium text-ivory max-w-[18ch]">
              {t.benefits.title}
            </h2>
            <p className="mt-6 text-base text-champagne-muted leading-relaxed max-w-[50ch]">
              {t.benefits.description}
            </p>

            <div className="mt-10 w-full h-px bg-gradient-to-r from-champagne/20 via-champagne/5 to-transparent" />

            <div className="mt-8 grid grid-cols-3 gap-6">
              {t.benefits.stats.map((stat) => (
                <div key={stat.label}>
                  <span className="text-2xl font-medium text-ivory font-mono tracking-tight">
                    {stat.val}
                  </span>
                  <span className="block text-[10px] text-champagne-muted tracking-wider uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <StaggerContainer className="flex flex-col gap-6">
            {t.benefits.items.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <StaggerItem key={benefit.title}>
                  <div className="group p-8 md:p-10 rounded-2xl border border-champagne/[0.06] bg-champagne/[0.02] hover:bg-champagne/[0.04] hover:border-champagne/10 transition-all duration-500">
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-champagne/[0.08] border border-champagne/10 flex items-center justify-center shrink-0 group-hover:bg-champagne/15 transition-colors duration-500">
                        <Icon
                          size={24}
                          weight="duotone"
                          className="text-champagne"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-ivory tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="mt-3 text-sm text-champagne-muted leading-relaxed max-w-[45ch]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
