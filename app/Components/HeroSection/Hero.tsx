"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import HeroImage from "@/public/images/hero_section/heroImage.jpg";
import { useScroll, useTransform, motion, easeInOut } from "framer-motion";
import ArrowIcon from "../Icons/ArrowIcon";
import Link from "next/link";
import useDimension from "@/app/hooks/useDimension";
import { editorial } from "@/app/libs/fonts/localFonts";

type Props = {};

function Hero({}: Props) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const { isSmallScreen } = useDimension();

  // let width = isSmallScreen
  //   ? useTransform(scrollYProgress, [0, 0.7], ["65%", "100%"], {
  //       ease: easeInOut,
  //     })
  //   : useTransform(scrollYProgress, [0, 0.7], ["30%", "100%"], {
  //       ease: easeInOut,
  //     });

  let widthArr = isSmallScreen ? ["65%", "100%"] : ["30%", "100%"];
  let width = useTransform(scrollYProgress, [0, 0.7], widthArr, {
    ease: easeInOut,
  });

  const height = useTransform(scrollYProgress, [0, 0.7], ["100%", "300%"], {
    ease: easeInOut,
  });

  useEffect(() => {}, []);

  return (
    <div className="w-full min-h-svh lg:min-h-screen">
      <div className="w-full min-h-[150vh] overflow-clip" ref={containerRef}>
        <div className="w-full h-screen sticky top-0 flex flex-col justify-end ">
          {/* Bottom Half */}
          <div className="min-h-[50vh] w-full flex justify-center items-center relative">
            {/* Text Block */}
            <div
              className={`${editorial.className} z-20 w-10/12 h-fit p-2 absolute -top-[45%] flex flex-col items-center justify-start`}
            >
              <h1 className="text-5xl md:text-8xl lg:text-8xl 2xl:text-9xl text-zinc-900 font-thin tracking-wide">
                HELIOS
              </h1>
              <h1 className="text-5xl md:text-8xl 2xl:text-9xl text-zinc-900 font-thin tracking-wide">
                DERMATOLOGY
              </h1>
            </div>

            {/* Image */}
            <motion.div
              style={{ width, height }}
              className="h-[300%] w-8/12 xl:w-4/12 relative"
            >
              <Image
                src={HeroImage}
                alt="Image of a Woman with clear skin"
                fill
                priority
                sizes="90vw"
                className="object-cover -z-10"
                placeholder="blur"
              />
            </motion.div>

            {/* TODO: book now */}
            <Link href="" className="group">
              <div className="hidden lg:flex w-2/12 h-1/4  absolute right-10 items-center justify-center z-10">
                <div className="absolute left-0 bg-emerald-200 rounded-full w-28 h-28 group-hover:w-full transform duration-300 z-10 group-hover:cursor-pointer"></div>
                <p
                  className={`${editorial.className} text-3xl flex justify-center space-x-2 z-20`}
                >
                  <span className="group-hover:cursor-pointer">
                    Book a Session
                  </span>
                  <span className="flex items-center justify-center">
                    <ArrowIcon className="size-7 text-zinc-800 group-hover:cursor-pointer" />
                  </span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
