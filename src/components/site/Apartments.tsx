import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const units = [
  {
    code: "Tipo A",
    name: "Residencia Jardín",
    beds: 2,
    sqm: 142,
    floor: "Pisos 3 – 7",
    status: "Disponible",
    price: "USD 545,000",
  },
  {
    code: "Tipo B",
    name: "Residencia Skyline",
    beds: 3,
    sqm: 198,
    floor: "Pisos 8 – 14",
    status: "Últimas unidades",
    price: "USD 780,000",
  },
  {
    code: "Tipo C",
    name: "Penthouse Cipreses",
    beds: 4,
    sqm: 312,
    floor: "Piso 15",
    status: "Reservado bajo consulta",
    price: "Precio bajo consulta",
  },
];

export function Apartments() {
  return (
    <section
      id="departamentos"
      className="relative bg-charcoal/30 py-32 lg:py-48"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Residencias
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="max-w-3xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
            Tres tipologías,
            <span className="italic text-beige"> una sola idea de hogar.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px border border-white/5 lg:grid-cols-3">
          {units.map((u, i) => (
            <Reveal key={u.code} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col justify-between bg-ink/60 p-8 transition-all duration-700 hover:bg-ink lg:p-10">
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                        {u.code}
                      </div>
                      <div className="mt-3 font-serif text-3xl leading-tight text-bone">
                        {u.name}
                      </div>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-bone/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-y-6 text-sm">
                    <Detail label="Dormitorios" value={String(u.beds)} />
                    <Detail label="Área" value={`${u.sqm} m²`} />
                    <Detail label="Niveles" value={u.floor} />
                    <Detail label="Estado" value={u.status} />
                  </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
                    Desde
                  </div>
                  <div className="mt-2 font-serif text-2xl text-bone">
                    {u.price}
                  </div>
                  <a
                    href="#contacto"
                    className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-gold transition-opacity hover:opacity-70"
                  >
                    Solicitar plano →
                  </a>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[9px] uppercase tracking-[0.3em] text-bone/40">
        {label}
      </div>
      <div className="mt-1 font-light text-bone/85">{value}</div>
    </div>
  );
}
