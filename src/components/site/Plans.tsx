import { useState } from "react";
import { Reveal } from "./Reveal";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import plano01 from "@/assets/EZD/planos/optimizado/plano_01.webp";
import plano02 from "@/assets/EZD/planos/optimizado/plano_02.webp";
import plano03 from "@/assets/EZD/planos/optimizado/plano_03.webp";
import plano04 from "@/assets/EZD/planos/optimizado/plano_04.webp";
import plano05 from "@/assets/EZD/planos/optimizado/plano_05.webp";
import plano06 from "@/assets/EZD/planos/optimizado/plano_06.webp";
import plano07 from "@/assets/EZD/planos/optimizado/plano_07.webp";
import plano08 from "@/assets/EZD/planos/optimizado/plano_08.webp";
import plano09 from "@/assets/EZD/planos/optimizado/plano_09.webp";
import plano10 from "@/assets/EZD/planos/optimizado/plano_10.webp";

const planos = [
  { src: plano01, name: "Plano 01" },
  { src: plano02, name: "Plano 02" },
  { src: plano03, name: "Plano 03" },
  { src: plano04, name: "Plano 04" },
  { src: plano05, name: "Plano 05" },
  { src: plano06, name: "Plano 06" },
  { src: plano07, name: "Plano 07" },
  { src: plano08, name: "Plano 08" },
  { src: plano09, name: "Plano 09" },
  { src: plano10, name: "Plano 10" },
];

export function Plans() {
  const [selectedImage, setSelectedImage] = useState<{
  src: string;
  name: string;
} | null>(null);

  return (
    <section id="planos" className="relative bg-ink py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
              Planos
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-14 max-w-2xl font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
            Distribuciones pensadas para vivir con comodidad.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {planos.map((plano, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <button
                type="button"
                onClick={() => setSelectedImage(plano)}
                className="group relative h-[280px] w-full overflow-hidden border border-white/10 bg-bone/5"
              >
                <img
  src={plano.src}
  alt={plano.name}
  className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
  loading="lazy"
/>

                <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-bone/80">
  {plano.name}
</div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <button
      type="button"
      className="absolute right-6 top-6 text-4xl text-white"
      onClick={() => setSelectedImage(null)}
    >
      ×
    </button>

    <div
      className="flex flex-col items-center gap-4"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="mb-4 text-center font-serif text-4xl uppercase tracking-[0.5em] text-bone">
  {selectedImage.name}
</h3>

      <TransformWrapper
  initialScale={1}
  minScale={1}
  maxScale={5}
  centerOnInit
  wheel={{ step: 0.2 }}
  doubleClick={{ mode: "zoomIn" }}
>
  {({ zoomIn, zoomOut, resetTransform }) => (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => zoomIn()}
          className="border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.25em] text-bone hover:bg-white/10"
        >
          +
        </button>

        <button
          type="button"
          onClick={() => zoomOut()}
          className="border border-white/20 px-4 py-2 text-sm uppercase tracking-[0.25em] text-bone hover:bg-white/10"
        >
          -
        </button>

        <button
          type="button"
          onClick={() => resetTransform()}
          className="border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.25em] text-bone hover:bg-white/10"
        >
          Reset
        </button>
      </div>

      <TransformComponent>
        <img
          src={selectedImage.src}
          alt={selectedImage.name}
          className="max-h-[78vh] max-w-[90vw] cursor-grab rounded-md bg-white p-4 active:cursor-grabbing"
        />
      </TransformComponent>
    </div>
  )}
</TransformWrapper>
    </div>
  </div>
)}
    </section>
  );
}