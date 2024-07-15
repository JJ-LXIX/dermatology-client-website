import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function useMousePosition() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };
  const mouse2 = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const cursorSize = 56;
  const cursorSize2 = 16;

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
    mouse2.x.set(clientX - cursorSize2 / 2);
    mouse2.y.set(clientY - cursorSize2 / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  });

  return [mouse2, smoothMouse];
}
