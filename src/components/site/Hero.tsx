import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import hero from "@/assets/hero-building.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.img
        src={hero}
        alt="EDZ Cipreses 343 — fachada nocturna"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3.2, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-12 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-gold" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
            San Isidro · Lima · Perú
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="font-serif text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] text-bone"
        >
          EDZ
          <span className="block italic text-beige/90">Cipreses 343</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.2 }}
          className="mt-8 max-w-xl text-base font-light leading-relaxed text-bone/70"
        >
          Una residencia exclusiva concebida para quienes entienden el lujo como
          la pureza de los detalles. Arquitectura atemporal en el corazón
          financiero de Lima.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contacto"
            className="group relative inline-flex items-center gap-3 overflow-hidden bg-gold px-7 py-4 text-[11px] uppercase tracking-[0.25em] text-ink transition-all duration-500 hover:bg-bone"
          >
            Agendar una visita
            <span className="h-px w-6 bg-ink transition-all duration-500 group-hover:w-10" />
          </a>
          <a
            href="#proyecto"
            className="inline-flex items-center gap-3 border border-white/20 px-7 py-4 text-[11px] uppercase tracking-[0.25em] text-bone transition-all duration-500 hover:border-gold hover:text-gold"
          >
            Visualizar brochure
          </a>
          <a
            href="https://wa.me/51953849058"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-2 py-4 text-[11px] uppercase tracking-[0.25em] text-bone/70 transition-colors hover:text-gold"
          >
            Contactar asesor →
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-bone/60"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.4em]">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
