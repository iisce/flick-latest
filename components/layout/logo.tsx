import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
     return (
          <div className="flex lg:flex-1">
               <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">{`Flick Electronics`}</span>
                    <Image
                         className="h-12 w-auto"
                         height={100}
                         width={100}
                         src="/logo.png"
                         alt=""
                         priority
                    />
               </Link>
          </div>
     );
}
