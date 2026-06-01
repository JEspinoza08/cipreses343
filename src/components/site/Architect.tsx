import { Reveal } from "./Reveal";
import mario from "@/assets/EZD/mario-lara.png";

export function Architect() {
  return (
    <section id="arquitectura" className="relative overflow-hidden bg-charcoal/30 py-32 lg:py-48">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <Reveal className="lg:col-span-6">
          <div className="relative">
            <img
              src={mario}
              alt="Mario Lara — Arquitecto"
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden border border-gold/40 p-6 backdrop-blur lg:block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Arquitecto
              </div>
              <div className="mt-2 font-serif text-2xl text-bone">Mario Lara</div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pt-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
                Arquitectura
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
              Mario Lara,
              <span className="block italic text-beige">una visión atemporal.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-base font-light leading-loose text-bone/70">
              Arquitecto peruano formado y consolidado tras varios años de
              trabajo en grandes ciudades como Madrid y Tokio. En la década de
              los 80 regresa al Perú para fundar su prestigioso estudio de
              arquitectura en Lima, dejando una huella reconocida en el
              residencial de alto nivel del país.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-1 gap-px border border-white/5 sm:grid-cols-2">
              {[
  ["Luz natural", "Aperturas orientadas para maximizar la entrada de luz en cada espacio."],
  ["Materia noble", "Bambú, granito, mármol y detalles en bronce."],
  ["Líneas puras", "Geometría limpia y silenciosa que trasciende las tendencias."],
  ["Atemporalidad", "Diseño concebido para durar y envejecer con elegancia."],
].map(([t, d]) => (
                <div key={t} className="bg-ink/60 p-6">
                  <div className="font-serif text-lg text-bone">{t}</div>
                  <div className="mt-2 text-xs font-light leading-relaxed text-bone/60">
                    {d}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
