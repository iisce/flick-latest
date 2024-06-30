import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
     return (
          <div className="mx-auto max-w-5xl px-8">
               <HoverEffect items={projects} />
          </div>
     );
}
export const projects = [
     {
          title: "Durable",
          description:
               "Engineered for resilience, Flick safeguards your phone against everyday wear and tear, no matter your lifestyle.",
     },
     {
          title: "Classy",
          description:
               "Go beyond protection with Flick's collection of stylish designs. Express your personality while keeping your phone secure.",
     },
     {
          title: "Affordable",
          description:
               "Premium quality doesn't have to come at a premium price. Equip your phone with Flick's reliable protection for a fraction of the cost.",
     },
     {
          title: "Speedy",
          description:
               "Don't let a dead battery slow you down. Flick's fast-charging solutions get you back in the game quickly, keeping you connected and powered up.",
     },
     {
          title: "Innovative",
          description:
               "Experience the cutting edge of mobile functionality with Flick. Pioneering features elevate your phone use and redefine your mobile experience.",
     },
     {
          title: "Trustworthy",
          description:
               "Flick prioritizes quality and reliability. You can depend on Flick to keep your phone safe, connected, and functioning flawlessly.",
     },
];
