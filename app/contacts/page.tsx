import ContactForm from "@/components/contact/contact-form";
import ContactMap from "@/components/contact/contact-map";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Hero } from "@/components/shared/hero";

export default function Products() {
     return (
          <div className="grid">
               <Hero
                    title="Contact Us"
                    subtitle=""
                    image="/images/background/3.webp"
                    boxes
               />
               <MaxWidthWrapper className="grid">
                    <ContactForm />
               </MaxWidthWrapper>
               <ContactMap />
          </div>
     );
}
