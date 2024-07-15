"use client";
import useDimension from "@/app/hooks/useDimension";
import SmallScreenTestimonial from "./SmallScreenTestimonial";
import LargeScreenTestimonial from "./LargeScreenTestimonial";

type Props = {};

export default function TestimonialSection({}: Props) {
  const { isMobile, isSmallScreen } = useDimension();

  return (
    <>
      {isSmallScreen ? <SmallScreenTestimonial /> : <LargeScreenTestimonial />}
    </>
  );
}
