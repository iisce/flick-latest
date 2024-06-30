"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import ImageSlider from "./ImageSlider";

interface ProductListingProps {
     product: Product | null;
     index: number;
}

const ProductListing = ({ product, index }: ProductListingProps) => {
     const [isVisible, setIsVisible] = useState<boolean>(false);
     const specificationArray = product?.description.split(";");

     useEffect(() => {
          const timer = setTimeout(() => {
               setIsVisible(true);
          }, index * 75);

          return () => clearTimeout(timer);
     }, [index]);

     if (!product || !isVisible) return <ProductPlaceholder />;

     if (isVisible && product) {
          return (
               <Link
                    className={cn(
                         "group/main invisible h-full w-full cursor-pointer rounded-xl border",
                         {
                              "visible animate-in fade-in-5": isVisible,
                         },
                    )}
                    // href={`/store/product/${product.name}`}
                    href={`#`}
               >
                    <div className="flex w-full flex-col">
                         <ImageSlider urls={[product.image]} />

                         <div className="grid">
                              <h3 className="border-b px-4 py-2 font-medium uppercase text-gray-700">
                                   {product.name}
                              </h3>
                              <ul className="p-4 text-sm">
                                   {specificationArray?.map((spec, i) => (
                                        <li>
                                             <span className="font-bold">
                                                  {spec.split(":")[0]}:
                                             </span>
                                             <span>{spec.split(":")[1]}</span>
                                        </li>
                                   ))}
                              </ul>
                              {/* <p className="mt-1 text-sm font-medium text-gray-900">
                              {formatToNaira(product.price)}
                         </p> */}
                              {/* <Button>Garri</Button> */}
                         </div>
                    </div>
               </Link>
          );
     }
};

const ProductPlaceholder = () => {
     return (
          <div className="flex w-full flex-col">
               <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100">
                    <Skeleton className="h-full w-full" />
               </div>
               <Skeleton className="mt-4 h-4 w-2/3 rounded-lg" />
               <Skeleton className="mt-2 h-4 w-16 rounded-lg" />
               <Skeleton className="mt-2 h-4 w-12 rounded-lg" />
          </div>
     );
};

export default ProductListing;
