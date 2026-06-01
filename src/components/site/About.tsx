import { Reveal } from "./Reveal";

const pillars = [
  {
    n: "01",
    t: "Exclusividad",
    d: "Pocas residencias por nivel. Privacidad y tranquilidad absoluta.",
  },
  {
    n: "02",
    t: "Arquitectura",
    d: "Líneas puras y luz natural como protagonista.",
  },
  {
    n: "03",
    t: "Ubicación",
    d: "A pasos del Parque El Olivar, en la zona más exclusiva de San Isidro.",
  },
  {
    n: "04",
    t: "Acabados",
    d: "Piso de bambú, tableros de granito o mármol, ventanas europeas aislantes y gas natural.",
  },
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
  Un edificio boutique,
  <span className="block italic text-beige">
    en el corazón de San Isidro.
  </span>
</h2>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-base font-light leading-loose text-bone/70">
  Cipreses 343 es un edificio residencial boutique diseñado por el
  reconocido arquitecto Mario Lara, ubicado en una tranquila calle
  arbolada a pasos del emblemático Parque El Olivar.
</p>

<p className="mt-6 text-base font-light leading-loose text-bone/70">
  Una colección limitada de departamentos amplios, cómodos y bien
  distribuidos, con acabados de lujo y espacios llenos de luz natural.
  El sitio ideal para vivir en la mejor zona de San Isidro.
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
