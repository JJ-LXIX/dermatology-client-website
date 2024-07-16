"use client";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import { Montserrat } from "next/font/google";

type Props = {};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const nav_links = [
  { link_name: "our work", href: "/pages/work" },
  { link_name: "locations", href: "/pages/locations" },
  { link_name: "about", href: "/pages/about" },
  { link_name: "contact", href: "/#contact" },
];

const navVariants = {
  hidden: {
    y: "-100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.6,
      ease: "circOut",
    },
  },
};

export default function Navbar({}: Props) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious();
    latest > prev! && latest > 750 ? setHidden(true) : setHidden(false);
  });

  return (
    <AnimatePresence>
      <motion.nav
        variants={navVariants}
        animate={hidden ? "hidden" : "visible"}
        className={`fixed top-0 w-full z-30 bg-[#f8f3ef] ${montserrat.className}`}
      >
        <div
          className={`h-16 xl:h-20 px-10 xl:px-0 border-b border-black w-full flex justify-between items-center xl:justify-normal xl:items-center`}
        >
          {/* Logo */}
          <div className="w-1/12 h-full flex justify-center items-center">
            <Link
              href="/"
              className="text-xl 2xl:text-4xl font-medium cursor-pointer"
            >
              LOGO
            </Link>
          </div>

          {/* Links Mobile/Tab */}
          {/* TODO: finish mobile nav */}
          <div className="lg:hidden w-7 h-7">
            <HamburgerButton nav_links={nav_links} />
          </div>

          {/* Links Laptop+ */}
          <div className="w-11/12 h-full  justify-end hidden lg:flex">
            <div className="w-6/12 h-full">
              <ul className="w-full h-full flex  justify-around items-center">
                {nav_links.map((nav_link) => {
                  return (
                    <li key={nav_link.href} className="group">
                      <Link
                        href={nav_link.href}
                        className="font-medium text-lg xl:text-xl uppercase cursor-pointer relative"
                      >
                        {nav_link.link_name}
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-800 duration-300 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-800 duration-300 group-hover:w-3/6"></span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
