import React from "react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import { LatestProductSlider } from "./latest-product-slider";
import { LATEST_PRODUCTS } from "@/consts";

export default function LatestProducts() {
     return (
          <div className="bg-secondary py-10">
               <MaxWidthWrapper className="grid gap-10">
                    <h2 className="text-center text-3xl font-bold">
                         Latest Products
                    </h2>
                    <LatestProductSlider
                         images={LATEST_PRODUCTS}
                         className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
                    />
               </MaxWidthWrapper>
          </div>
     );
}
