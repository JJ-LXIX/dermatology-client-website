"use client";
import useMouse from "@/app/hooks/useMouse";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import cosmeticDerma from "@/public/images/service_section/cosmetic_derma.jpg";
import acneDerma from "@/public/images/service_section/acne.jpg";
import medicalDerma from "@/public/images/service_section/medical_derma.jpg";
import cancerDerma from "@/public/images/service_section/cancer_derma.jpg";
import laserDerma from "@/public/images/service_section/laser_derma.jpg";
import Image from "next/image";

type Props = {
  imageNumber: number;
};

const imageArray = [
  {
    imageHref: cosmeticDerma,
    alt: "Image of woman getting work done by a dermatologist",
  },
  { imageHref: acneDerma, alt: "Image of a woman with acne" },
  {
    imageHref: medicalDerma,
    alt: "Image of woman getting work done by a dermatologist",
  },
  { imageHref: cancerDerma, alt: "Image that reads skin cancer awareness" },
  { imageHref: laserDerma, alt: "Woman getting laser therapy done" },
];

function ServiceImage({ imageNumber }: Props) {
  const { x, y } = useMouse();
  const rotate = useTransform(x, [300, 1200], ["-10deg", "10deg"]);

  return (
    // TODO: make images load faster (maybe preloading)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ x, y, rotate }}
      className="h-[30rem] w-[20rem] bg-zinc-300 fixed top-0 z-30"
    >
      <Image
        src={imageArray[imageNumber].imageHref}
        alt={`${imageArray[imageNumber].alt}`}
        fill
        className="object-cover z-30"
        sizes="40vw"
      />
    </motion.div>
  );
}

export default ServiceImage;
