"use client";
import React, { useState } from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import Link from "next/link";
import ServiceImage from "./ServiceImage";
import { AnimatePresence, motion } from "framer-motion";
import useDimension from "@/app/hooks/useDimension";

type Props = {};
type serviceType = {
  index: number;
  service_name: string;
  bio: string;
  link: string;
};

const services = [
  {
    index: 0,
    service_name: "Cosmetic Dermatology",
    bio: "Botox, dermal fillers, laser treatments & microdermabrasion to enhance skin appearance.",
    link: "/services",
  },
  {
    index: 1,
    service_name: "Acne Treatment",
    bio: "Management of acne using medications, laser therapy & chemical peels.",
    link: "/services",
  },
  {
    index: 2,
    service_name: "Medical Dermatology",
    bio: "Treatment of skin conditions like acne, psoriasis, eczema & other skin diseases.",
    link: "/services",
  },
  {
    index: 3,
    service_name: "Skin Cancer Care",
    bio: "Comprehensive screening, diagnosis & treatment of skin cancers.",
    link: "/services",
  },
  {
    index: 4,
    service_name: "Laser Therapy",
    bio: "To treat various skin conditions like scars, pigmentation & vascular lesions.",
    link: "/services",
  },
];

function ServiceSection({}: Props) {
  const [hovered, setHovered] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(1);
  const { isSmallScreen } = useDimension();

  function mouseEnter(service: serviceType) {
    if (isSmallScreen) return;
    setHovered(true);
    setHoveredImage(service.index);
  }
  function mouseLeave() {
    if (isSmallScreen) return;
    setHovered(false);
  }

  return (
    <div className="min-h-[125svh] lg:min-h-[150vh] w-full relative">
      <AnimatePresence>
        {hovered ? <ServiceImage imageNumber={hoveredImage} /> : null}
      </AnimatePresence>

      {/* Services Table */}
      <div className="min-h-[125svh] lg:min-h-[150vh] w-full flex flex-col items-center">
        {services.map((service) => {
          return (
            <Link
              onMouseEnter={() => mouseEnter(service)}
              onMouseLeave={mouseLeave}
              href={service.link}
              key={service.index}
              className={`w-[80%] h-[20vh] border-b-2 border-zinc-300 transform z-10 duration-300 ease-in-out flex group/service relative ${
                service.index === 0 ? "border-t-2" : null
              }`}
            >
              <div className="z-10 absolute inset-0  bg-zinc-300/10 scale-y-0 transform duration-300 ease-in-out group-hover/service:scale-y-100 group-hover/service:cursor-pointer"></div>
              <div className="w-full flex scale-x-100 transform duration-300 ease-in-out group-hover/service:scale-x-95">
                <div className="w-[10%] flex items-center justify-center">
                  <p className="text-lg lg:text-2xl text-zinc-400">
                    {service.index + 1}
                  </p>
                </div>
                <div className="h-full w-full flex items-center">
                  <p className="text-3xl pl-5 lg:text-5xl text-zinc-800 font-semibold">
                    {service.service_name}
                  </p>
                </div>
              </div>
              <div className="hidden w-fit text-nowrap -translate-x-10 opacity-0 lg:flex items-center justify-center transform duration-300 ease-in-out group-hover/service:opacity-100 group-hover/service:translate-x-0">
                <p className="text-xl">More Info</p>
              </div>
              <div className="hidden w-[10%] md:flex items-center justify-center">
                <ArrowIcon className="size-7 font-bold text-zinc-800 transform duration-300 ease-in-out group-hover/service:-rotate-45" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceSection;
