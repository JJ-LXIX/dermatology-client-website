"use client";
import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

export default function useDimension() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  const updateDimensionInitial = () => {
    const { innerWidth, innerHeight } = window;
    if (innerWidth >= 768) {
      setIsMobile(false);
    }
    if (innerWidth >= 1024) {
      setIsSmallScreen(false);
    } else setIsSmallScreen(true);
    setDimension({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensionInitial();
  }, []);

  useEffect(() => {
    const updateDimension = () => {
      const { innerWidth, innerHeight } = window;
      if (innerWidth >= 768) {
        setIsMobile(false);
      }
      if (innerWidth >= 1024) {
        setIsSmallScreen(false);
      } else setIsSmallScreen(true);
      setDimension({ width: innerWidth, height: innerHeight });
    };

    const throttledUpdateDimension = throttle(updateDimension, 300);
    window.addEventListener("resize", throttledUpdateDimension);
    return () => {
      window.removeEventListener("resize", throttledUpdateDimension);
    };
  }, []);
  return { dimension, isMobile, isSmallScreen };
}
