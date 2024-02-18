import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar,Navigation } from "@/components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atonu Proshad Shaha",
  description: "Portfolio by Atonu Proshad Shaha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Navigation/>
        </body>
    </html>
  );
}
