export type Locale = "pt-BR" | "en-US" | "es-ES";

export const locales: Locale[] = ["pt-BR", "en-US", "es-ES"];
export const defaultLocale: Locale = "pt-BR";

export interface Dictionary {
  metadata: { title: string; description: string };
  nav: { services: string; benefits: string; app: string; cta: string };
  hero: {
    badge: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: {
    label: string;
    title: string;
    items: {
      title: string;
      description: string;
      cta: string;
      hoursLabel: string;
      tag: string;
    }[];
    flightHours: { label: string; title: string; unit: string };
    flapper: { label: string; text: string };
  };
  benefits: {
    label: string;
    title: string;
    description: string;
    stats: { val: string; label: string }[];
    items: { title: string; description: string }[];
  };
  appDownload: { label: string; description: string };
  press: { label: string };
  footer: {
    trademarks: string;
    linksLabel: string;
    contactLabel: string;
    legal: string;
  };
}

const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
    metadata: {
      title: "The Jet Society - A sociedade do jato",
      description:
        "Jet Society\u00AE \u00E9 um clube seleto de propriet\u00E1rios de jatos, combinando gest\u00E3o completa, efici\u00EAncia operacional e benef\u00EDcios sob medida.",
    },
    nav: {
      services: "Serviços",
      benefits: "Benefícios",
      app: "App",
      cta: "Cotar voo",
    },
    hero: {
      badge: "Powered by Flapper",
      subtitle:
        "A forma mais inteligente de possuir e gerenciar sua aeronave. Um clube seleto combinando gestão completa, eficiência operacional e benefícios sob medida.",
      cta: "Cotar voo agora",
      ctaSecondary: "Conhecer benefícios",
      stats: [
        { value: "50+", label: "Aeronaves" },
        { value: "24/7", label: "Suporte" },
        { value: "100%", label: "Gestão" },
      ],
    },
    services: {
      label: "O que oferecemos",
      title: "Cada detalhe, cuidado por nós",
      items: [
        {
          title: "Private Charter",
          description:
            "Voe quando quiser, para onde quiser. Acesso imediato a jatos executivos, sem compromissos de longo prazo.",
          cta: "Cotar voo agora",
          hoursLabel: "a partir de 5 horas/ano",
          tag: "Operação Flapper",
        },
        {
          title: "Programa de membros",
          description:
            "Faça parte de um grupo exclusivo com acesso a benefícios premium, tarifas preferenciais e experiências personalizadas.",
          cta: "Conhecer programa",
          hoursLabel: "a partir de 15 horas/ano",
          tag: "Exclusivo",
        },
        {
          title: "Propriedade fracionada",
          description:
            "Possua uma fração de um jato executivo com todos os benefícios da propriedade total por uma fração do custo.",
          cta: "Saber mais",
          hoursLabel: "a partir de 25 horas/ano",
          tag: "Popular",
        },
        {
          title: "Propriedade total",
          description:
            "A experiência definitiva em aviação privada. Sua aeronave, sua agenda, seus termos. Gestão completa inclusa.",
          cta: "Falar com especialista",
          hoursLabel: "a partir de 50 horas/ano",
          tag: "Premium",
        },
      ],
      flightHours: {
        label: "Horas de voo anuais",
        title: "Para quem voa",
        unit: "(horas/ano)",
      },
      flapper: {
        label: "Operação Flapper",
        text: "Todos os voos são operados por aeronaves com certificação de segurança, conforme Part 135/121.",
      },
    },
    benefits: {
      label: "Por que Jet Society",
      title: "Conveniência absoluta, custos otimizados",
      description:
        "Por meio de propriedade fracionada ou integral, garantimos conveniência absoluta, custos otimizados e um serviço eficiente.",
      stats: [
        { val: "40%", label: "Redução de custos" },
        { val: "98%", label: "Satisfação" },
        { val: "12min", label: "Tempo de resposta" },
      ],
      items: [
        {
          title: "Especialista dedicado",
          description:
            "Um gestor exclusivo para sua aeronave, cuidando de cada detalhe para você voar sem preocupações.",
        },
        {
          title: "Gestão end-to-end",
          description:
            "Cuidado completo para sua aeronave, da tripulação à tributagem: nós gerenciamos, e você decola.",
        },
        {
          title: "Offset de custos",
          description:
            "Reduza custos com rentabilização da sua aeronave, sem abrir mão da exclusividade.",
        },
      ],
    },
    appDownload: {
      label: "Disponível agora",
      description:
        "Gerencie sua aeronave, reserve voos e acompanhe operações diretamente pelo aplicativo.",
    },
    press: {
      label: "Jet Society\u00AE também visto em",
    },
    footer: {
      trademarks:
        "Jet Society\u00AE, Sociedade do Jato\u00AE, Sociedad del Jet\u00AE",
      linksLabel: "Links",
      contactLabel: "Contato",
      legal:
        "Jet Society\u00AE is not a direct air carrier. All flights booked through Flapper will be operated by safety-vetted aircraft, pursuant to Part 135 / Part 121 or their foreign equivalent. While on partner aircraft as part of the Flapper service, passengers are subject to the insurance coverage of said partners.",
    },
  },
  "en-US": {
    metadata: {
      title: "The Jet Society",
      description:
        "Jet Society\u00AE is an exclusive club for jet owners, combining full management, operational efficiency, and tailored benefits.",
    },
    nav: {
      services: "Services",
      benefits: "Benefits",
      app: "App",
      cta: "Quote a flight",
    },
    hero: {
      badge: "Powered by Flapper",
      subtitle:
        "The smartest way to own and manage your aircraft. An exclusive club combining full management, operational efficiency, and tailored benefits.",
      cta: "Quote a flight",
      ctaSecondary: "Explore benefits",
      stats: [
        { value: "50+", label: "Aircraft" },
        { value: "24/7", label: "Support" },
        { value: "100%", label: "Management" },
      ],
    },
    services: {
      label: "What we offer",
      title: "Every detail, handled by us",
      items: [
        {
          title: "Private Charter",
          description:
            "Fly whenever you want, wherever you want. Immediate access to executive jets, with no long-term commitments.",
          cta: "Quote a flight",
          hoursLabel: "from 5 hours/year",
          tag: "Flapper Operations",
        },
        {
          title: "Membership Program",
          description:
            "Join an exclusive group with access to premium benefits, preferential rates, and personalized experiences.",
          cta: "Learn more",
          hoursLabel: "from 15 hours/year",
          tag: "Exclusive",
        },
        {
          title: "Fractional Ownership",
          description:
            "Own a fraction of an executive jet with all the benefits of full ownership at a fraction of the cost.",
          cta: "Learn more",
          hoursLabel: "from 25 hours/year",
          tag: "Popular",
        },
        {
          title: "Full Ownership",
          description:
            "The ultimate private aviation experience. Your aircraft, your schedule, your terms. Full management included.",
          cta: "Talk to a specialist",
          hoursLabel: "from 50 hours/year",
          tag: "Premium",
        },
      ],
      flightHours: {
        label: "Annual flight hours",
        title: "For those who fly",
        unit: "(hours/year)",
      },
      flapper: {
        label: "Flapper Operations",
        text: "All flights are operated by safety-certified aircraft, in accordance with Part 135/121.",
      },
    },
    benefits: {
      label: "Why Jet Society",
      title: "Absolute convenience, optimized costs",
      description:
        "Through fractional or full ownership, we ensure absolute convenience, optimized costs, and efficient service.",
      stats: [
        { val: "40%", label: "Cost reduction" },
        { val: "98%", label: "Satisfaction" },
        { val: "12min", label: "Response time" },
      ],
      items: [
        {
          title: "Dedicated specialist",
          description:
            "An exclusive manager for your aircraft, taking care of every detail so you can fly worry-free.",
        },
        {
          title: "End-to-end management",
          description:
            "Complete care for your aircraft, from crew to taxation: we manage, and you take off.",
        },
        {
          title: "Cost offset",
          description:
            "Reduce costs by monetizing your aircraft, without giving up exclusivity.",
        },
      ],
    },
    appDownload: {
      label: "Available now",
      description:
        "Manage your aircraft, book flights, and track operations directly through the app.",
    },
    press: {
      label: "Jet Society\u00AE also featured in",
    },
    footer: {
      trademarks:
        "Jet Society\u00AE, Sociedade do Jato\u00AE, Sociedad del Jet\u00AE",
      linksLabel: "Links",
      contactLabel: "Contact",
      legal:
        "Jet Society\u00AE is not a direct air carrier. All flights booked through Flapper will be operated by safety-vetted aircraft, pursuant to Part 135 / Part 121 or their foreign equivalent. While on partner aircraft as part of the Flapper service, passengers are subject to the insurance coverage of said partners.",
    },
  },
  "es-ES": {
    metadata: {
      title: "The Jet Society - La sociedad del jet",
      description:
        "Jet Society\u00AE es un club exclusivo de propietarios de jets, que combina gestión integral, eficiencia operativa y beneficios a medida.",
    },
    nav: {
      services: "Servicios",
      benefits: "Beneficios",
      app: "App",
      cta: "Cotizar vuelo",
    },
    hero: {
      badge: "Powered by Flapper",
      subtitle:
        "La forma más inteligente de poseer y gestionar su aeronave. Un club exclusivo que combina gestión integral, eficiencia operativa y beneficios a medida.",
      cta: "Cotizar vuelo ahora",
      ctaSecondary: "Conocer beneficios",
      stats: [
        { value: "50+", label: "Aeronaves" },
        { value: "24/7", label: "Soporte" },
        { value: "100%", label: "Gestión" },
      ],
    },
    services: {
      label: "Lo que ofrecemos",
      title: "Cada detalle, cuidado por nosotros",
      items: [
        {
          title: "Private Charter",
          description:
            "Vuele cuando quiera, a donde quiera. Acceso inmediato a jets ejecutivos, sin compromisos a largo plazo.",
          cta: "Cotizar vuelo ahora",
          hoursLabel: "a partir de 5 horas/año",
          tag: "Operación Flapper",
        },
        {
          title: "Programa de miembros",
          description:
            "Sea parte de un grupo exclusivo con acceso a beneficios premium, tarifas preferenciales y experiencias personalizadas.",
          cta: "Conocer programa",
          hoursLabel: "a partir de 15 horas/año",
          tag: "Exclusivo",
        },
        {
          title: "Propiedad fraccionada",
          description:
            "Posea una fracción de un jet ejecutivo con todos los beneficios de la propiedad total por una fracción del costo.",
          cta: "Saber más",
          hoursLabel: "a partir de 25 horas/año",
          tag: "Popular",
        },
        {
          title: "Propiedad total",
          description:
            "La experiencia definitiva en aviación privada. Su aeronave, su agenda, sus términos. Gestión completa incluida.",
          cta: "Hablar con un especialista",
          hoursLabel: "a partir de 50 horas/año",
          tag: "Premium",
        },
      ],
      flightHours: {
        label: "Horas de vuelo anuales",
        title: "Para quienes vuelan",
        unit: "(horas/año)",
      },
      flapper: {
        label: "Operación Flapper",
        text: "Todos los vuelos son operados por aeronaves con certificación de seguridad, conforme Part 135/121.",
      },
    },
    benefits: {
      label: "Por qué Jet Society",
      title: "Conveniencia absoluta, costos optimizados",
      description:
        "Mediante propiedad fraccionada o integral, garantizamos conveniencia absoluta, costos optimizados y un servicio eficiente.",
      stats: [
        { val: "40%", label: "Reducción de costos" },
        { val: "98%", label: "Satisfacción" },
        { val: "12min", label: "Tiempo de respuesta" },
      ],
      items: [
        {
          title: "Especialista dedicado",
          description:
            "Un gestor exclusivo para su aeronave, cuidando cada detalle para que usted vuele sin preocupaciones.",
        },
        {
          title: "Gestión end-to-end",
          description:
            "Cuidado completo para su aeronave, de la tripulación a la tributación: nosotros gestionamos, y usted despega.",
        },
        {
          title: "Offset de costos",
          description:
            "Reduzca costos con la rentabilización de su aeronave, sin renunciar a la exclusividad.",
        },
      ],
    },
    appDownload: {
      label: "Disponible ahora",
      description:
        "Gestione su aeronave, reserve vuelos y acompañe operaciones directamente desde la aplicación.",
    },
    press: {
      label: "Jet Society\u00AE también visto en",
    },
    footer: {
      trademarks:
        "Jet Society\u00AE, Sociedade do Jato\u00AE, Sociedad del Jet\u00AE",
      linksLabel: "Enlaces",
      contactLabel: "Contacto",
      legal:
        "Jet Society\u00AE is not a direct air carrier. All flights booked through Flapper will be operated by safety-vetted aircraft, pursuant to Part 135 / Part 121 or their foreign equivalent. While on partner aircraft as part of the Flapper service, passengers are subject to the insurance coverage of said partners.",
    },
  },
};

export function getDictionary(locale: string): Dictionary {
  if (locale in dictionaries) return dictionaries[locale as Locale];
  return dictionaries[defaultLocale];
}
