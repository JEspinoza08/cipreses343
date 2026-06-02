import { Reveal } from "./Reveal";
import facade from "@/assets/EZD/optimizado/fachada.webp";
import living from "@/assets/EZD/optimizado/living.webp";
import kitchen from "@/assets/EZD/optimizado/kitchen.webp";
import lobby from "@/assets/EZD/optimizado/lobby.webp";
import rooftop from "@/assets/EZD/optimizado/rof.webp";
import terrace2 from "@/assets/EZD/optimizado/rof2.webp";
import terrace3 from "@/assets/EZD/optimizado/rof3.webp";

const items = [
  { src: facade, label: "Fachada", span: "lg:col-span-4 lg:row-span-2" },
  { src: living, label: "Living", span: "lg:col-span-4" },
  { src: kitchen, label: "Cocina", span: "lg:col-span-4" },
  { src: lobby, label: "Lobby", span: "lg:col-span-4" },
  { src: rooftop, label: "Terraza", span: "lg:col-span-4" },
  { src: terrace2, label: "Terraza", span: "lg:col-span-4" },
  { src: terrace3, label: "Terraza", span: "lg:col-span-4" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-ink py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Galería
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
              La luz, el material,
              <span className="italic text-beige"> el silencio.</span>
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-bone/60">
              Imágenes del proyecto que capturan la esencia del Edificio Cipreses: una residencia diseñada con atención al detalle, materiales selectos y espacios pensados para vivir con comodidad y elegancia en San Isidro.
            </p>
          </div>
        </Reveal>

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {items.map((it, i) => (
            <Reveal
              key={it.label}
              delay={i * 0.06}
              className={`group relative overflow-hidden ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.3em] text-bone/80">
                {it.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
