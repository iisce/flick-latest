import { NewContactForm } from "@/components/contact/new-contact-form";
import MaxWidthWrapper from "@/components/layout/max-width-wrapper";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
     return (
          <MaxWidthWrapper>
               <div className="mb-5 grid w-full grid-cols-3 gap-10">
                    <div className="col-span-3 md:col-span-1">
                         <div className="border-b-primary text-2xl font-bold">
                              Contact Infomation
                         </div>
                         <div className="mt-5 flex gap-x-3">
                              <MapPin className="h-8 w-8 shrink-0" />
                              <div className="">
                                   <div className="font-bold">Head Office</div>
                                   <div className="">
                                        Shop 1 & 2, VIP Plaza, Chinese Line,
                                        Alaba International Market, Ojo, Lagos
                                   </div>

                                   <div className="font-bold">
                                        Branch Office
                                   </div>
                                   <div className="">
                                        Shop 8, CB Plaza, Alaba International
                                        Market, Ojo, Lagos
                                   </div>
                              </div>
                         </div>
                         <div className="mt-5 flex gap-x-3">
                              <Phone className="h-8 w-8 shrink-0" />
                              <div className="">
                                   <div className="font-bold">Phone</div>
                                   <div className="">
                                        + 234 806 0972 989
                                        <br />+ 234 803 3481 446
                                        <br />+ 234 703 665 2105
                                   </div>
                              </div>
                         </div>
                         <div className="mt-5 flex gap-x-3">
                              <Mail className="h-8 w-8 shrink-0" />
                              <div className="">
                                   <div className="font-bold">
                                        Email Address
                                   </div>
                                   <div className="">
                                        info@flickaccessories.ng
                                        <br />
                                        flicksmartaccessories@gmail.com
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="col-span-3 md:col-span-2">
                         <div className="border-b-primary text-2xl font-bold">
                              Contact Us
                         </div>
                         <NewContactForm />
                    </div>
               </div>
          </MaxWidthWrapper>
     );
}
