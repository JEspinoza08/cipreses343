import { Reveal } from "./Reveal";
import facade from "@/assets/gallery-facade.jpg";
import lobby from "@/assets/gallery-lobby.jpg";
import living from "@/assets/gallery-living.jpg";
import bedroom from "@/assets/gallery-bedroom.jpg";
import kitchen from "@/assets/gallery-kitchen.jpg";
import rooftop from "@/assets/gallery-rooftop.jpg";
import aerial from "@/assets/gallery-aerial.jpg";

const items = [
  { src: facade, label: "Fachada", span: "lg:col-span-4 lg:row-span-2" },
  { src: living, label: "Living", span: "lg:col-span-4" },
  { src: lobby, label: "Lobby", span: "lg:col-span-4 lg:row-span-2" },
  { src: kitchen, label: "Cocina", span: "lg:col-span-4" },
  { src: bedroom, label: "Dormitorio", span: "lg:col-span-4" },
  { src: rooftop, label: "Rooftop", span: "lg:col-span-4" },
  { src: aerial, label: "Aéreo nocturno", span: "lg:col-span-8" },
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
              Renders cinematográficos que capturan la esencia del proyecto: una
              residencia diseñada para ser fotografiada todos los días.
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
