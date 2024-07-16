import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  nav_links: {
    link_name: string;
    href: string;
  }[];
};

export default function HamburgerButton({ nav_links }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="w-full h-full flex flex-col justify-center items-center"
      >
        <span
          className={`bg-zinc-950 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-zinc-950 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-zinc-950 block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>

      {/* Navbar Mobile */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            exit={{ x: 1000 }}
            className="fixed top-16 inset-0 z-50 bg-[#131313] overflow-y-hidden"
          >
            <ul className="w-full h-full flex flex-col justify-start items-center space-y-10 py-10 text-zinc-50">
              {nav_links.map((nav_link) => {
                return (
                  <li key={nav_link.href} className="group">
                    <Link
                      href={nav_link.href}
                      className="font-medium text-xl uppercase cursor-pointer relative"
                      onClick={handleClick}
                    >
                      {nav_link.link_name}
                      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-zinc-300 duration-300 group-hover:w-3/6"></span>
                      <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-zinc-300 duration-300 group-hover:w-3/6"></span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
