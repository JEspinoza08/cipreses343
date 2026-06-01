import { Reveal } from "./Reveal";
import { MapPin } from "lucide-react";

const highlights = [
  { t: "Distrito financiero", d: "A pasos del Centro Financiero de San Isidro, el Swissotel y las principales sedes corporativas de Lima." },
  { t: "Gastronomía y comercio", d: "Cerca de la zona comercial de Miguel Dasso, restaurantes de autor y el Óvalo Gutiérrez." },
  { t: "Parques", d: "A pasos del Parque El Olivar y del Golf de San Isidro." },
  { t: "Conectividad", d: "Próximo a la Av. Los Conquistadores, con fácil acceso a Miraflores y Surco." },
];

export function Location() {
  return (
    <section
      id="ubicacion"
      className="relative bg-charcoal/30 py-32 lg:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Ubicación
            </span>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
              Cipreses 343,
              <span className="block italic text-beige">San Isidro.</span>
            </h2>
            <p className="mt-8 text-base font-light leading-loose text-bone/70">
              Un emplazamiento privilegiado en el distrito más exclusivo de Lima. A pasos de todo lo que importa, en una calle tranquila y llena de árboles.
            </p>

            <div className="mt-12 space-y-6">
              {highlights.map((h) => (
                <div key={h.t} className="flex items-start gap-4 border-t border-white/5 pt-6">
                  <MapPin size={16} className="mt-1 shrink-0 text-gold" />
                  <div>
                    <div className="font-serif text-lg text-bone">{h.t}</div>
                    <div className="mt-1 text-sm font-light text-bone/60">
                      {h.d}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 lg:aspect-[5/6]">
              <iframe
                title="Mapa Cipreses 343 San Isidro"
                src="https://www.google.com/maps?q=Calle+Los+Cipreses+343+San+Isidro+Lima&output=embed"
                className="h-full w-full brightness-75 contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
            <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-bone/60">
              <span>12° 06' S · 77° 02' W</span>
              <a
                href="https://maps.google.com/?q=Calle+Los+Cipreses+343+San+Isidro+Lima"
                target="_blank"
                rel="noreferrer"
                className="text-gold transition-opacity hover:opacity-70"
              >
                Ver en Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
