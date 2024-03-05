import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import Sidebar from "@/components/shared/Sidebar";

const IBMPLEX = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:["300","400","500","600","700"],
  variable:"--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "Imaginify app ",
  description: "generative ai with saas and implemente transationale and much more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider appearance={{
    variables:{colorPrimary:"#624cf5"}
  }}>
      <html lang="en">
      <body className={cn("font-IBMPLEX antialiased",IBMPLEX.variable)}>
        {children}
        </body>
    </html>
  </ClerkProvider>
  );
}
