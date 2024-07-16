"use client";
import { easeIn, motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  heading: string;
  para: string;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
const defaultAnimations2 = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
      delay: 0,
    },
  },
};

function AboutUsText({ heading, para }: Props) {
  return (
    <div className="w-full min-h-[16rem] mb-5 lg:min-h-[20rem]">
      <div className="w-full h-2/4 flex justify-center lg:justify-normal items-end lg:items-start overflow-hidden ">
        <p className="text-7xl md:text-8xl lg:text-[8rem] font-semibold text-zinc-900 ">
          <span className="sr-only">{heading}</span>
          <motion.span
            aria-hidden
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-200px", once: true }}
            transition={{ staggerChildren: 0.07 }}
          >
            {heading.split("").map((char, i) => (
              <motion.span
                className="inline-block"
                variants={defaultAnimations}
                key={i}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </p>
      </div>
      <div className="w-full h-2/4 flex justify-center lg:block">
        <motion.p
          variants={defaultAnimations2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-[2.75rem] lg:text-5xl font-light text-zinc-700"
        >
          {para}
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUsText;
