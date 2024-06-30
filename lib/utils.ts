import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
}

export const formatToNaira = (amount: number): string => {
     if (typeof amount !== "number") return amount;
     return amount.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
     });
};
