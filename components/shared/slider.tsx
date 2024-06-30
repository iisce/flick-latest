"use client";

import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

export function Slider({
     images,
     className,
     imageClassNames,
}: {
     images: {
          src: string;
          alt: string;
     }[];
     className?: string;
     imageClassNames?: string;
}) {
     return (
          <Carousel
               className=""
               opts={{
                    align: "start",
                    loop: true,
               }}
               plugins={[
                    Autoplay({
                         delay: 2000,
                    }),
               ]}
          >
               <CarouselContent>
                    {images.map((image, index) => (
                         <CarouselItem key={index} className={cn(className)}>
                              <Image
                                   className={cn(
                                        "flex w-full items-center justify-center object-cover lg:aspect-[22/9]",
                                        imageClassNames,
                                   )}
                                   src={image.src}
                                   alt={image.alt}
                                   height={1080}
                                   width={1400}
                              />
                         </CarouselItem>
                    ))}
               </CarouselContent>
          </Carousel>
     );
}
