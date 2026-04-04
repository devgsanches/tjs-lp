import { AnimatedSection } from "./AnimatedSection";

export function Footer() {
  return (
    <footer className="relative py-16 md:py-24 border-t border-champagne/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-champagne text-lg tracking-tight font-medium">
                Jet Society
              </span>
              <span className="text-champagne-muted text-[10px] font-mono tracking-widest">
                &reg;
              </span>
            </div>
            <p className="mt-4 text-sm text-champagne-muted/60 leading-relaxed max-w-[50ch]">
              Jet Society&reg;, Sociedade do Jato&reg;, Sociedad del Jet&reg;
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
              Links
            </span>
            <div className="mt-4 flex flex-col gap-3">
              {[
                "Terms and Conditions",
                "Privacy Settings",
                "Privacy Policy",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-champagne-muted/50 hover:text-champagne-muted transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-champagne-muted tracking-widest uppercase">
              Contato
            </span>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-champagne-muted/50 hover:text-champagne-muted transition-colors duration-300"
              >
                hello@jetsociety.com
              </a>
              <a
                href="#"
                className="text-sm text-champagne-muted/50 hover:text-champagne-muted transition-colors duration-300"
              >
                +55 (11) 4780-2934
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-champagne/[0.04]">
          <p className="text-xs text-champagne-muted/30 leading-relaxed max-w-[80ch]">
            Jet Society&reg; is not a direct air carrier. All flights booked
            through Flapper will be operated by safety-vetted aircraft, pursuant
            to Part 135 / Part 121 or their foreign equivalent. While on partner
            aircraft as part of the Flapper service, passengers are subject to
            the insurance coverage of said partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
