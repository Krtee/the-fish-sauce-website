"use client";

import { useEffect, useRef } from "react";
import { useDimensions } from "./useDimensions";

export interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  const videoWrapperRef = useRef(null);
  const { width: videoWrapperWidth } = useDimensions(videoWrapperRef);

  useEffect(() => {
    console.log(videoWrapperWidth);
  }, [videoWrapperWidth]);

  return (
    <div className=" relative w-full   h-screen">
      <div className="relative h-full">
        <video
          autoPlay={true}
          muted
          loop
          playsInline
          className="object-cover w-full h-full"
          poster="/images/banner_animation_mobile.mp4"
        >
          <source src="/images/banner_animation_mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
