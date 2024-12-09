import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const inter = Inter ({subsets:["latin"], weight:["400", "700"]});

 

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}