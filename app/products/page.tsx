import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import ProductBody from "@/components/product/product-body";
import { Hero } from "@/components/shared/hero";

export default function Products() {
     return (
          <div className="grid">
               <Hero
                    title="Flick Products"
                    subtitle=""
                    image="/images/background/3.webp"
                    boxes
               />
               <MaxWidthWrapper className="grid">
                    <div className="flex items-center justify-between">
                         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                              All Products
                         </h2>
                    </div>

                    <ProductBody />
               </MaxWidthWrapper>
          </div>
     );
}
