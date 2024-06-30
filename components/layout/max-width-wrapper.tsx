import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export default function MaxWidthWrapper({
     className,
     children,
}: {
     className?: string;
     children: ReactNode;
}) {
     return (
          <div className={cn("container p-5 md:p-10", className)}>
               {children}
          </div>
     );
}
