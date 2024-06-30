import FlickIntro from "@/components/about/flick-intro";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Hero } from "@/components/shared/hero";
import { CardHoverEffectDemo } from "@/components/shared/hover-effect-demo";
import { FlipWords } from "@/components/ui/flip-words";

export default function AboutPage() {
     const words = [
          "DURABLE",
          "CLASSY",
          "AFFORDABLE",
          "SPEEDY",
          "INNOVATIVE",
          "TRUSTWORTHY",
     ];
     return (
          <div className="grid">
               <Hero
                    title="About Flick"
                    subtitle=""
                    // image="/images/background/3.webp"
                    boxes
               />
               <FlickIntro />
               <div className="bg-secondary">
                    <MaxWidthWrapper className="grid place-items-center text-4xl">
                         <h2>
                              Think{" "}
                              <span className="font-bold text-primary">
                                   Flick
                              </span>
                         </h2>
                         <div>
                              Think
                              <FlipWords
                                   className="font-bold text-primary"
                                   words={words}
                              />
                         </div>
                         <CardHoverEffectDemo />
                    </MaxWidthWrapper>
               </div>
               <MaxWidthWrapper className="grid max-w-2xl place-items-center">
                    <h2 className="mb-3 text-4xl font-bold">Meet Our CEO</h2>
                    <div className="grid gap-3 text-pretty">
                         <p className="">
                              My name is Obiajuru Chinedu, I have always wanted
                              to own a business that solves a particular
                              problem, or helps people find what they need.
                         </p>
                         <p className="">
                              The name Flick came to me when I was praying about
                              a brand name. It connotes something fast, quick, a
                              propeller, it literally means to spark something
                              quickly, which is in line with what chargers and
                              other accessories do.
                         </p>
                         <p className="">
                              I believe that is a fitting name considering that
                              our products are strong, fast and give you results
                              quick.
                         </p>
                         <p className="">
                              In the few years we have been operating, Flick has
                              over 50 staff ready to meet your phone accessory
                              needs.
                         </p>
                    </div>
               </MaxWidthWrapper>
          </div>
     );
}
