import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import React from "react";

export default function FlickIntro() {
     return (
          <MaxWidthWrapper className="grid gap-5 md:grid-cols-2">
               <p className="first-letter:text-5xl">
                    FLICK is a first-class phone accessories brand. We
                    concentrate on providing quality products that would stand
                    out in the Nigerian Market. We have provided thousands of
                    products in the past four years. We believe in the
                    excellence of our products, and we are certain that we will
                    dominate the market because of the quality and affordability
                    of our products.
               </p>
               <p className="first-letter:text-5xl">
                    We are confident that you will stick with us after one try.
                    We are driven to ensuring that we do our part in changing
                    the mindset that Nigerian products are ‘fake’. We deliver
                    anywhere in Nigeria, and are located in Lagos, Abuja, Port
                    Harcourt, Benin, Enugu, and other states across Nigeria.
               </p>
          </MaxWidthWrapper>
     );
}
