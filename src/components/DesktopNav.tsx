import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

type Props = { whatsapp: string };

export default function DesktopNav({ whatsapp }: Props) {
  return (
    <div className="ml-auto hidden md:flex items-center gap-6 font-size: 10px">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#servicios" className={navigationMenuTriggerStyle()}>
                Servicios
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#por-que-elegirnos" className={navigationMenuTriggerStyle()}>
                Sobre nosotros
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/#contacto" className={navigationMenuTriggerStyle()}>
                Contacto
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Usa tokens: bg = --primary, text = --primary-foreground */}
      <Button asChild>
        <a href={`https://wa.me/${whatsapp.replace("+", "")}`} aria-label="Escribir por WhatsApp">
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
