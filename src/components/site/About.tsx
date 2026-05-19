import { Reveal } from "./Reveal";

const pillars = [
  { n: "01", t: "Exclusividad", d: "Pocas residencias por nivel. Privacidad absoluta." },
  { n: "02", t: "Arquitectura", d: "Líneas puras, materiales nobles, luz natural." },
  { n: "03", t: "Ubicación", d: "El corazón financiero y residencial de San Isidro." },
  { n: "04", t: "Acabados", d: "Roble europeo, mármol, bronce y piedra natural." },
];

export function About() {
  return (
    <section id="proyecto" className="relative bg-ink py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              El Proyecto
            </span>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] text-bone">
              Un refugio
              <span className="block italic text-beige">contemporáneo</span>
              <span className="block">en San Isidro.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-base font-light leading-loose text-bone/70">
              EDZ Cipreses 343 es una colección limitada de residencias
              concebidas para una vida discreta, sofisticada y conectada. Una
              fachada de piedra y vidrio enmarcada por la energía del distrito
              más exclusivo de Lima, con interiores diseñados como un manifiesto
              de elegancia atemporal.
            </p>
            <p className="mt-6 text-base font-light leading-loose text-bone/70">
              Cada espacio respira luz, silencio y materia noble. Una propuesta
              residencial sin precedentes en el Perú.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden border border-white/5 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="group h-full bg-charcoal/40 p-8 transition-colors duration-700 hover:bg-charcoal lg:p-10">
                <div className="font-serif text-sm text-gold">{p.n}</div>
                <div className="mt-6 font-serif text-2xl text-bone">{p.t}</div>
                <div className="mt-3 text-sm font-light leading-relaxed text-bone/60">
                  {p.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
