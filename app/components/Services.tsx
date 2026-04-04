"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AirplaneTilt,
  Users,
  ChartPieSlice,
  Crown,
} from "@phosphor-icons/react";
import { AnimatedSection } from "./AnimatedSection";

const services = [
  {
    id: "charter",
    icon: AirplaneTilt,
    title: "Private Charter",
    description:
      "Voe quando quiser, para onde quiser. Acesso imediato a jatos executivos, sem compromissos de longo prazo.",
    cta: "Cotar voo agora",
    hours: "5h",
    hoursLabel: "a partir de 5 horas/ano",
    tag: "Operação Flapper",
  },
  {
    id: "membership",
    icon: Users,
    title: "Programa de membros",
    description:
      "Faça parte de um grupo exclusivo com acesso a benefícios premium, tarifas preferenciais e experiências personalizadas.",
    cta: "Conhecer programa",
    hours: "15h",
    hoursLabel: "a partir de 15 horas/ano",
    tag: "Exclusivo",
  },
  {
    id: "fractional",
    icon: ChartPieSlice,
    title: "Propriedade fracionada",
    description:
      "Possua uma fração de um jato executivo com todos os benefícios da propriedade total por uma fração do custo.",
    cta: "Saber mais",
    hours: "25h",
    hoursLabel: "a partir de 25 horas/ano",
    tag: "Popular",
  },
  {
    id: "full",
    icon: Crown,
    title: "Propriedade total",
    description:
      "A experiência definitiva em aviação privada. Sua aeronave, sua agenda, seus termos. Gestão completa inclusa.",
    cta: "Falar com especialista",
    hours: "50h",
    hoursLabel: "a partir de 50 horas/ano",
    tag: "Premium",
  },
];

function ServiceCard({
  service,
  isActive,
  onClick,
  index,
}: {
  service: (typeof services)[0];
  isActive: boolean;
  onClick: () => void;
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
        isActive
          ? "bg-champagne/[0.06] border-champagne/20"
          : "bg-transparent border-champagne/[0.06] hover:border-champagne/10 hover:bg-champagne/[0.02]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-500 ${
              isActive ? "bg-champagne/15" : "bg-champagne/5"
            }`}
          >
            <Icon
              size={20}
              weight={isActive ? "fill" : "regular"}
              className="text-champagne"
            />
          </div>
          <div>
            <h3 className="text-base font-medium text-ivory tracking-tight">
              {service.title}
            </h3>
            <span className="text-xs text-champagne-muted font-mono mt-0.5 block">
              {service.hoursLabel}
            </span>
          </div>
        </div>
        <span
          className={`text-[10px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border transition-all duration-500 ${
            isActive
              ? "bg-champagne/10 border-champagne/20 text-champagne"
              : "bg-transparent border-champagne/10 text-champagne-muted"
          }`}
        >
          {service.tag}
        </span>
      </div>

      <div
        className="grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          gridTemplateRows: isActive ? "1fr" : "0fr",
          opacity: isActive ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="text-champagne-muted text-sm leading-relaxed mt-5 max-w-[55ch]">
            {service.description}
          </p>
          <div className="mt-6 pb-1">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-champagne/10 border border-champagne/20 text-champagne text-xs tracking-wide rounded-lg hover:bg-champagne/15 transition-colors duration-300">
              {service.cta}
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function FlightHoursBar() {
  const hours = [5, 15, 25, 50];

  return (
    <div className="flex items-end gap-3 h-40">
      {hours.map((h, i) => (
        <motion.div
          key={h}
          initial={{ height: 0 }}
          whileInView={{ height: `${(h / 50) * 100}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex-1 bg-gradient-to-t from-champagne/20 to-champagne/5 rounded-t-lg relative group"
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono text-champagne whitespace-nowrap">
            {h}h
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="servicos" className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <AnimatedSection>
          <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
            O que oferecemos
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl tracking-tighter leading-none font-medium text-ivory max-w-[20ch]">
            Cada detalhe, cuidado por nós
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3 flex flex-col gap-3">
            {services.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                isActive={activeIndex === i}
                onClick={() => setActiveIndex(i)}
                index={i}
              />
            ))}
          </div>

          <AnimatedSection
            delay={0.3}
            className="lg:col-span-2 flex flex-col justify-between"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-champagne/[0.04] to-transparent border border-champagne/[0.08]">
              <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
                Horas de voo anuais
              </span>
              <h3 className="mt-3 text-lg font-medium text-ivory tracking-tight">
                Para quem voa
              </h3>
              <p className="text-xs text-champagne-muted mt-1">(horas/ano)</p>
              <div className="mt-8">
                <FlightHoursBar />
              </div>
            </div>

            <div className="mt-6 p-6 rounded-2xl border border-champagne/[0.06] bg-champagne/[0.02]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-champagne/10 flex items-center justify-center">
                  <AirplaneTilt
                    size={16}
                    weight="fill"
                    className="text-champagne"
                  />
                </div>
                <span className="text-xs font-mono text-champagne-muted tracking-wider uppercase">
                  Operação Flapper
                </span>
              </div>
              <p className="text-sm text-champagne-muted leading-relaxed">
                Todos os voos são operados por aeronaves com certificação de
                segurança, conforme Part 135/121.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
