import React from "react";
import MaxWidthWrapper from "../layout/max-width-wrapper";
import Image from "next/image";
import { FlipWords } from "../ui/flip-words";

export default function About() {
     const words = ["STRONG", "RELIABLE", "AFFORDABLE", "DURABLE"];
     return (
          <div className="py-10">
               <MaxWidthWrapper className="grid gap-6">
                    <h2 className="text-center text-3xl font-bold">
                         About Flick
                    </h2>
                    <div className="grid gap-10 lg:grid-cols-2">
                         <div className="">
                              <Image
                                   className="aspect-video w-full rounded-lg object-cover"
                                   src="/images/slides/img01.jpg"
                                   alt="about flick image"
                                   height={600}
                                   width={600}
                              />
                         </div>
                         <div className="flex flex-col items-center justify-center text-justify">
                              <div className="mb-3 w-full text-2xl">
                                   Get
                                   <FlipWords
                                        className="font-bold"
                                        words={words}
                                   />{" "}
                                   <br />
                                   products from FLICK
                              </div>
                              <p className="mb-3">
                                   FLICK is a first-class phone accessories
                                   brand. We concentrate on providing quality
                                   products that would stand out in the Nigerian
                                   Market.{" "}
                              </p>
                              <p className="mb-3">
                                   We have provided thousands of products in the
                                   past four years. We believe in the excellence
                                   of our products, and we are certain that we
                                   will dominate the market because of the
                                   quality and affordability of our products.
                              </p>
                              <p className="mb-3">
                                   We are confident that you will stick with us
                                   after one try. We are driven to ensuring that
                                   we do our part in changing the mindset that
                                   Nigerian products are ‘fake’.
                              </p>
                         </div>
                    </div>
               </MaxWidthWrapper>
          </div>
     );
}
