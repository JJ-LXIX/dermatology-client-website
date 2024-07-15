"use client";
import useDimension from "@/app/hooks/useDimension";
import useMouseCursor from "@/app/hooks/useMouseCursor";
import { motion } from "framer-motion";

type Props = {};

function CustomCursor({}: Props) {
  const [mouse, smoothMouse] = useMouseCursor();
  const { x, y } = mouse;
  const { x: smoothX, y: smoothY } = smoothMouse;
  const { isSmallScreen } = useDimension();
  return (
    <>
      {isSmallScreen ? null : (
        <>
          <motion.div
            style={{ left: smoothX, top: smoothY }}
            animate="default"
            className="pointer-events-none fixed top-0 z-50 h-14 w-14 overflow-hidden rounded-full bg-pink-950 mix-blend-difference"
          ></motion.div>
          <motion.div
            style={{ left: x, top: y }}
            animate="default"
            className="pointer-events-none fixed top-0 z-50 h-4 w-4 overflow-hidden rounded-full bg-sky-600"
          ></motion.div>
        </>
      )}
    </>
  );
}

export default CustomCursor;
