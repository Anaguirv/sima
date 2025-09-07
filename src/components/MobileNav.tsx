import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

type Props = { whatsapp: string };

export default function MobileNav({ whatsapp }: Props) {
  return (
    <div className="ml-auto md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* Outline usa --ring/--border; icono hereda currentColor (text-ink) */}
          <Button variant="outline" size="icon" className="text-ink" aria-label="Abrir menú">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </SheetTrigger>

        {/* Fondo y texto toman --background/--foreground (temeable) */}
        <SheetContent side="left" className="w-72">
          <nav className="mt-8 flex flex-col gap-1">
            <SheetClose asChild>
              <a href="#servicios" className="nav-link">Servicios</a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#sobre" className="nav-link">Sobre nosotros</a>
            </SheetClose>
            <SheetClose asChild>
              <a href="#contacto" className="nav-link">Contacto</a>
            </SheetClose>

            {/* Botón primario: usa --primary y --primary-foreground */}
            <Button asChild className="mt-4 mx-4">
              <a href={`https://wa.me/${whatsapp.replace("+", "")}`} aria-label="WhatsApp SIMA Ingeniería">
                WhatsApp
              </a>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
