"use client";

import {
     Carousel,
     CarouselContent,
     CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Card } from "../ui/card";

export function LatestProductSlider({
     images,
     className,
     imageClassNames,
}: {
     images: {
          src: string;
          name: string;
     }[];
     className?: string;
     imageClassNames?: string;
}) {
     return (
          <Carousel
               className="container p-0"
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
                              <div className="">
                                   <Card className="bg-primary text-background">
                                        <div className="overflow-hidden rounded-md">
                                             <Image
                                                  className={cn(
                                                       "aspect-square h-auto w-auto object-cover transition-all hover:scale-105",
                                                       imageClassNames,
                                                  )}
                                                  src={image.src}
                                                  alt={image.name}
                                                  height={1080}
                                                  width={1400}
                                             />
                                        </div>
                                        <div className="flex h-10 items-center justify-center">
                                             <h3 className="text-center font-medium">
                                                  {image.name}
                                             </h3>
                                        </div>
                                   </Card>
                              </div>
                         </CarouselItem>
                    ))}
               </CarouselContent>
          </Carousel>
     );
}
