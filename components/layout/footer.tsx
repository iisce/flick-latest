import Logo from "@/components/layout/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import {
     Facebook,
     Linkedin,
     Mail,
     MapPin,
     Phone,
     Twitter,
     Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
     return (
          <div className="grid bg-secondary pt-10">
               <div className="container py-6">
                    <div className="grid grid-cols-12 gap-6">
                         <div className="col-span-12 mb-8 lg:col-span-4">
                              <div className="grid">
                                   <Logo />

                                   <div className="mt-5">
                                        <p className="mb-3 gap-10">
                                             FLICK is a first-class phone
                                             accessories brand. We concentrate
                                             on providing quality products that
                                             would stand out in the Nigerian
                                             Market.
                                        </p>
                                        <div className="mb-3 flex flex-row gap-10">
                                             <Phone className="h-6 w-6 shrink-0" />
                                             <div className="grid">
                                                  <div className="">
                                                       + 234 806 0972 989
                                                  </div>
                                                  <div className="">
                                                       + 234 803 3481 446
                                                  </div>
                                                  <div className="">
                                                       + 234 703 665 2105
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mb-3 flex flex-row gap-10">
                                             <Mail className="h-6 w-6 shrink-0" />
                                             <div className="grid">
                                                  <div className="">
                                                       info@flickaccessories.ng
                                                  </div>
                                                  <div className="">
                                                       flicksmartaccessories@gmail.com
                                                  </div>
                                             </div>
                                        </div>
                                        <p className="mb-3 flex flex-row gap-10">
                                             <MapPin className="h-6 w-6 shrink-0" />
                                             <span>
                                                  Shop 1 & 2, VIP Plaza, Chinese
                                                  Line, Alaba International
                                                  Market, Ojo, Lagos
                                             </span>
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="col-span-6 mb-8 lg:col-span-2">
                              <div className="">
                                   <h3 className="text-xl font-bold">
                                        PRODUCTS
                                   </h3>
                                   <ul className="mt-5">
                                        <li className="mb-3">
                                             <a href="#">Power Banks</a>
                                        </li>
                                        <li className="mb-3">
                                             <a href="#">Chargers</a>
                                        </li>
                                        <li className="mb-3">
                                             <a href="#">Ear Phones</a>
                                        </li>
                                        <li className="mb-3">
                                             <a href="#">Car Charger</a>
                                        </li>
                                   </ul>
                              </div>
                         </div>

                         <div className="col-span-6 mb-8 lg:col-span-2">
                              <div className="">
                                   <h3 className="text-xl font-bold">
                                        USEFUL LINKS
                                   </h3>
                                   <ul className="mt-5">
                                        <li className="mb-3">
                                             <a href="#">Home</a>
                                        </li>
                                        <li className="mb-3">
                                             <a href="#">About</a>
                                        </li>
                                        <li className="mb-3">
                                             <a href="#">Contact</a>
                                        </li>
                                        <li className="mb-3">Products</li>
                                   </ul>
                              </div>
                         </div>

                         <div className="col-span-12 mb-8 lg:col-span-4">
                              <div className="">
                                   <h3 className="text-xl font-bold">
                                        Subscribe Newsletter
                                   </h3>
                                   <p className="mt-5">
                                        By subscribing to our mailing list you
                                        will always be updated
                                   </p>
                                   <NewsletterForm />
                              </div>
                         </div>
                    </div>
               </div>

               <div className="border-t bg-primary bg-opacity-80 py-10 text-center text-background">
                    <p className="mb-5">
                         Copyright @ {new Date().getFullYear()}{" "}
                         <Link href="#" className="font-bold">
                              ISCE
                         </Link>{" "}
                         all right reserved.
                    </p>
                    <ul className="flex flex-row justify-center gap-3">
                         <li className="">
                              <Link href="#">
                                   <Facebook />
                              </Link>
                         </li>
                         <li className="">
                              <Link href="#">
                                   <Twitter />
                              </Link>
                         </li>
                         <li className="">
                              <Link href="#">
                                   <Linkedin />
                              </Link>
                         </li>
                         <li className="">
                              <Link href="#">
                                   <Youtube />
                              </Link>
                         </li>
                    </ul>
               </div>
          </div>
     );
}
