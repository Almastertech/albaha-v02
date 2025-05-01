"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./clouds_animation.css";
import { StatsBackgroundVideo } from "./StatsBackgroundVideo";
import StatsImages from "./StatsImages";
import StatsContentOverlay from "./StatsContentOverlay";

export default function AlbahaStats({ data }) {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [clickedArea, setClickedArea] = useState(null);
  const [currentArea, setCurrentArea] = useState(null);
  const [currentAreaInfo, setCurrentAreaInfo] = useState(null);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  if (inView && videoRef.current) {
    videoRef.current.play().catch((e) => console.warn("Autoplay failed", e));
  }

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 0 && !fadeOut) {
      setFadeOut(true);
      setShowContent(true);
    }
  };

  useEffect(() => {
    const areaItem = data.find((item) =>
      clickedArea ? item.state === clickedArea : item.state === currentArea
    );
    setCurrentAreaInfo(areaItem || null);
  }, [currentArea, clickedArea]);

  return (
    <section className="w-full h-screen snap-start bg-[#333] pt-10">
      <div
        ref={ref}
        className="relative w-full h-screen flex justify-center items-center ">
        <StatsBackgroundVideo
          onVideoEnd={handleTimeUpdate}
          showContent={showContent}
          videoRef={videoRef}
          fadeOut={fadeOut}
        />
        {showContent && (
          <StatsImages currentArea={currentArea} clickedArea={clickedArea} />
        )}
        <StatsContentOverlay
          setClickedArea={setClickedArea}
          setCurrentArea={setCurrentArea}
          currentAreaInfo={currentAreaInfo}
          showContent={showContent}
          currentArea={currentArea}
          data={data}
        />
      </div>
    </section>
  );
}
