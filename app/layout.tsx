import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/app/libs/lenis";
import Navbar from "./Components/Navbar/Navbar";
import CustomCursor from "./Components/CustomCursor/CustomCursor";
import { spaceGrotesk, montserrat } from "./libs/fonts/fonts";

export const metadata: Metadata = {
  title: "Dermatology Test Website",
  description: "still in progress - LXIX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        {/* TODO: choose font */}
        <body className={montserrat.className}>
          <Navbar />
          <CustomCursor />
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
