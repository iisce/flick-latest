import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";

const poppins = Poppins({
     subsets: ["latin"],
     weight: ["100", "200", "300", "400", "600", "800", "500", "700", "900"],
});

export const metadata: Metadata = {
     title: "Flick Electronics",
     description:
          "FLICK is a first-class phone accessories brand. We concentrate on providing quality products that would stand out in the Nigerian Market.",
};

export const viewport: Viewport = {
     width: "device-width",
     initialScale: 1,
     maximumScale: 1,
};

// TODO: get flick website description from vicky

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="en">
               <body className={poppins.className}>
                    <Navbar />
                    {children}
                    <Footer />
                    <Toaster richColors />
                    <Analytics />
                    <SpeedInsights />
               </body>
          </html>
     );
}
