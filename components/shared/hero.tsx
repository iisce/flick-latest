"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "../ui/background-boxes";
import Image from "next/image";

export function Hero({
     image,
     title = "Add Title To Component",
     subtitle = "Add Subtitle To Component",
     boxes,
     circleSize = 300,
}: {
     image?: string;
     title?: string;
     subtitle?: string;
     boxes?: boolean;
     circleSize?: number;
}) {
     return (
          <div className="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden bg-primary">
               {image && (
                    <Image
                         className="pointer-events-none absolute inset-0 z-10 h-full w-full object-cover"
                         src={image}
                         alt=""
                         width={1920}
                         height={400}
                    />
               )}
               <div
                    className={`pointer-events-none absolute inset-0 z-20 h-full w-full bg-primary [mask-image:radial-gradient(circle,transparent,white)]`}
               />

               {boxes && <Boxes />}
               <h1
                    className={cn(
                         "relative z-20 text-2xl font-semibold text-white md:text-4xl",
                    )}
               >
                    {title}
               </h1>
               <p className="relative z-20 mt-2 text-center text-neutral-300">
                    {subtitle}
               </p>
          </div>
     );
}
