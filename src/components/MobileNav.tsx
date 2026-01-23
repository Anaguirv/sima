import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

type Props = { whatsapp: string };

export default function MobileNav({ whatsapp }: Props) {
  return (
    <div className="ml-auto md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* Botón hamburguesa */}
          <Button
            variant="outline"
            size="icon"
            className="border-slate-300 bg-white/85 text-[rgb(8,62,82)] shadow-sm hover:bg-white"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </SheetTrigger>

        {/* Menú lateral */}
        <SheetContent
          side="left"
          className="w-[18.5rem] max-w-[85vw] bg-gradient-to-b from-white via-white to-[rgb(245,249,251)] border-r border-slate-200 px-4 pb-6 pt-6"
        >
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="SIMA Ingeniería" className="h-10 w-auto" />
            <div>
              {/* <p className="text-xs uppercase tracking-widest text-[rgb(11,122,163)] font-semibold">Menú</p> */}
              {/* <p className="text-sm text-[rgb(8,62,82)] font-semibold">SIMA Ingeniería</p> */}
            </div>
          </div>

          <nav className="mt-6 flex flex-col gap-3">
            <SheetClose asChild>
              <a
                href="/services"
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-[rgb(8,62,82)] font-semibold shadow-sm transition hover:border-[rgb(11,122,163)] hover:text-[rgb(11,122,163)]"
              >
                Servicios
                <span className="text-[rgb(11,122,163)] transition group-hover:translate-x-0.5">→</span>
              </a>
            </SheetClose>

            <SheetClose asChild>
              <a
                href="#por-que-elegirnos"
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-[rgb(8,62,82)] font-semibold shadow-sm transition hover:border-[rgb(11,122,163)] hover:text-[rgb(11,122,163)]"
              >
                Sobre nosotros
                <span className="text-[rgb(11,122,163)] transition group-hover:translate-x-0.5">→</span>
              </a>
            </SheetClose>

            <SheetClose asChild>
              <a
                href="#contacto"
                className="group flex items-center justify-between rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-[rgb(8,62,82)] font-semibold shadow-sm transition hover:border-[rgb(11,122,163)] hover:text-[rgb(11,122,163)]"
              >
                Contacto
                <span className="text-[rgb(11,122,163)] transition group-hover:translate-x-0.5">→</span>
              </a>
            </SheetClose>

            {/* Botón WhatsApp */}
            <Button asChild className="mt-2 w-full rounded-xl bg-[rgb(11,122,163)] text-white hover:bg-[rgb(8,62,82)]">
              <a
                href={`https://wa.me/${whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp SIMA Ingeniería"
              >
                WhatsApp
              </a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
