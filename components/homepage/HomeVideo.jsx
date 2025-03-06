"use client";

import React from "react";

const HeroVideo = ({ videoSrc, fallbackImage, className = "" }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className={`w-full absolute top-0 overflow-hidden z-10 h-screen object-cover   ${className}`}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      poster={fallbackImage}>
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
