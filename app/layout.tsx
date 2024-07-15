import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis, useLenis } from "@/app/libs/lenis";
import Navbar from "./Components/Navbar/Navbar";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import { spaceGrotesk } from "./libs/fonts/fonts";

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
      <ReactLenis root>
        <body className={spaceGrotesk.className}>
          <Navbar />
          <CustomCursor />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
