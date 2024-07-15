"use client";
import localFont from "next/font/local";

export const editorial = localFont({
  src: [
    {
      path: "../../../public/fontAssets/PPEditorialNew-Ultralight.otf",
      weight: "400",
    },
  ],
});

export const neueMontreal = localFont({
  src: [
    {
      path: "../../../public/fontAssets/neueMontreal/PPNeueMontreal-Book.otf",
      weight: "500",
    },
  ],
});
