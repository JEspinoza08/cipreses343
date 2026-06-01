import logo from "@/assets/logo-edz.jpg";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="EZD Cipreses 343"
                className="h-10 w-10 rounded-sm object-cover ring-1 ring-white/10"
              />
              <div>
                <div className="font-serif text-xl text-bone">EZD</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-stone">
                  Cipreses 343 · San Isidro
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm font-light text-bone/60">
              Residencias exclusivas en el corazón del distrito financiero de
              Lima. Diseño, arquitectura y materia noble.
            </p>
          </div>

          <FooterCol title="Proyecto" items={["El edificio", "Arquitectura", "Interiores", "Departamentos"]} />
          <FooterCol title="Visita" items={["Agendar", "Brochure", "WhatsApp", "Ubicación"]} />
          <FooterCol title="Contacto" items={["ventas@EZDcipreses.com", "+51 953 849 058", "Lun – Sáb · 9–18h"]} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-8 text-[10px] uppercase tracking-[0.3em] text-bone/40 lg:flex-row lg:items-center">
          <span>© {new Date().getFullYear()} EZD Cipreses 343 — All rights reserved</span>
          <span>San Isidro · Lima · Perú</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="lg:col-span-2">
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
        {title}
      </div>
      <ul className="mt-6 space-y-3 text-sm font-light text-bone/70">
        {items.map((i) => (
          <li key={i} className="cursor-pointer transition-colors hover:text-gold">
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}
