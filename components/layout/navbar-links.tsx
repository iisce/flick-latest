"use client";

import Link from "next/link";

import {
     NavigationMenu,
     NavigationMenuItem,
     NavigationMenuLink,
     NavigationMenuList,
     navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MENU_LINKS } from "@/consts";

export function NavbarLinks() {
     return (
          <NavigationMenu className="hidden lg:flex lg:gap-x-12">
               <NavigationMenuList>
                    {MENU_LINKS.map((link, key) => (
                         <NavigationMenuItem key={key}>
                              <Link href={link.url} legacyBehavior passHref>
                                   <NavigationMenuLink
                                        className={navigationMenuTriggerStyle()}
                                   >
                                        {link.title}
                                   </NavigationMenuLink>
                              </Link>
                         </NavigationMenuItem>
                    ))}
               </NavigationMenuList>
          </NavigationMenu>
     );
}
