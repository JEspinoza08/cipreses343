import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-edz.jpg";

const links = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Interiores", href: "#interiores" },
  // { label: "Departamentos", href: "#departamentos" },
  { label: "Galería", href: "#galeria" },
  { label: "Planos", href: "#planos" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="EZD Cipreses 343"
            className="h-10 w-10 rounded-sm object-cover ring-1 ring-white/10"
          />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg text-bone">EZD</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-stone">
              Cipreses 343
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[11px] uppercase tracking-[0.25em] text-bone/70 transition-colors hover:text-bone"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-sm border border-gold/50 px-5 py-2.5 text-[11px] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-ink lg:inline-block"
        >
          Agendar visita
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-white/10 p-2 text-bone lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink/95 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-4 text-xs uppercase tracking-[0.25em] text-bone/80"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
