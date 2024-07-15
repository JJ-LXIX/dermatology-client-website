import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function useMouse() {
  const mouse = {
    x: useMotionValue(300),
    y: useMotionValue(0),
  };

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX + 150);
    mouse.y.set(clientY - 240);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  });
  return mouse;
}
