import { Reveal } from "./Reveal";
import vera from "@/assets/vera-velarde.png";

export function Interior() {
  return (
    <section id="interiores" className="relative bg-ink py-32 lg:py-48">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-12">
        <div className="order-2 lg:order-1 lg:col-span-6 lg:pt-12">
          <Reveal>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
                Interiorismo
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
              Vera Velarde,
              <span className="block italic text-beige">
                interiores de lujo cálido.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-base font-light leading-loose text-bone/70">
              Arquitecta y diseñadora peruana, destaca por crear espacios
              atemporales y funcionales con un estilo cálido y sofisticado. Sus
              interiores combinan texturas naturales, paletas serenas y piezas
              de autor para componer hogares íntimos, refinados y profundamente
              habitables.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-12 space-y-4 text-sm font-light text-bone/70">
              {[
                "Texturas naturales y paleta cálida",
                "Mobiliario de autor y piezas únicas",
                "Iluminación arquitectónica integrada",
                "Funcionalidad sin renunciar al refinamiento",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="h-px w-6 bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative">
            <img
              src={vera}
              alt="Vera Velarde — Diseñadora de Interiores"
              loading="lazy"
              className="w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden border border-gold/40 bg-ink/70 p-6 backdrop-blur lg:block">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Diseñadora de interiores
              </div>
              <div className="mt-2 font-serif text-2xl text-bone">
                Vera Velarde
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
