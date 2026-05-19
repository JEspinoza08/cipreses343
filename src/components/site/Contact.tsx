import { useState } from "react";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contacto" className="relative bg-ink py-32 lg:py-48">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-gold">
                Contacto
              </span>
            </div>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] text-bone">
              Una asesoría
              <span className="block italic text-beige">personalizada.</span>
            </h2>
            <p className="mt-8 text-base font-light leading-loose text-bone/70">
              Conozca EDZ Cipreses 343 acompañado por uno de nuestros asesores
              privados. Visitas con cita previa, atención discreta y
              exclusivamente para clientes calificados.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <Row label="Dirección" value="Calle Los Cipreses 343, San Isidro · Lima" />
              <Row label="Correo" value="ventas@edzcipreses.com" />
              <Row label="Teléfono" value="+51 953 849 058" />
            </div>

            <a
              href="https://wa.me/51953849058?text=Hola,%20me%20interesa%20EDZ%20Cipreses%20343"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 border border-gold/50 px-7 py-4 text-[11px] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-ink"
            >
              Conversar por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="relative border border-white/10 bg-charcoal/30 p-8 lg:p-12">
              <div className="absolute -top-3 left-12 bg-ink px-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                Reserve su visita
              </div>

              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="font-serif text-3xl text-bone">Gracias.</div>
                  <div className="mt-3 max-w-sm text-sm font-light text-bone/60">
                    Un asesor privado se pondrá en contacto en breve para
                    coordinar su visita.
                  </div>
                </div>
              ) : (
                <form
                  className="grid gap-6 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field label="Nombre" name="name" />
                  <Field label="Apellido" name="last" />
                  <Field label="Correo" name="email" type="email" />
                  <Field label="Teléfono" name="phone" type="tel" />
                  <div className="sm:col-span-2">
                    <Field label="Tipología de interés" name="unit" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm font-light text-bone outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group sm:col-span-2 mt-4 inline-flex items-center justify-center gap-3 bg-gold py-4 text-[11px] uppercase tracking-[0.25em] text-ink transition-all duration-500 hover:bg-bone"
                  >
                    Enviar solicitud
                    <span className="h-px w-6 bg-ink transition-all duration-500 group-hover:w-10" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[10px] uppercase tracking-[0.3em] text-bone/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm font-light text-bone outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-3">
      <span className="text-[10px] uppercase tracking-[0.3em] text-bone/50">
        {label}
      </span>
      <span className="text-right font-light text-bone/85">{value}</span>
    </div>
  );
}
