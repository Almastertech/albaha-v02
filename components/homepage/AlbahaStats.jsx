"use client";

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import LineTitle from "@/UI/LineTitle";
import Image from "next/image";
import "./clouds_animation.css";
import Button from "@/UI/Button";
import { StateInfo } from "./StateInfo";
import { StatsBackgroundVideo } from "./StatsBackgroundVideo";
import { CloudsLayer } from "./CloudsLayer";
import { Mapping } from "./Mapping";
import { albaha_states_data, default_states_data } from "./albaha_states_data";

export default function AlbahaStats() {
  const [showContent, setShowContent] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentArea, setCurrentArea] = useState("");
  const [currentAreaInfo, setCurrentAreaInfo] = useState(null);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  if (inView && videoRef.current) {
    videoRef.current.play().catch((e) => console.warn("Autoplay failed", e));
  }

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 4.5 && !fadeOut) {
      setFadeOut(true);
      setShowContent(true);
    }
  };

  useEffect(() => {
    const areaItem = albaha_states_data.find(
      (item) => item.state === currentArea
    );
    setCurrentAreaInfo(areaItem || null);
  }, [currentArea]);

  return (
    <section className="w-full h-screen">
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
          <AnimatePresence>
            <motion.div className="absolute inset-0 flex justify-center items-center bg-[#333]">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentArea ? 0 : 1,
                  transition: { duration: 0.5, delay: 0.2 },
                }}
                exit={{ opacity: 1, transition: { duration: 0.5 } }}
                className="absolute inset-0">
                <Image
                  src={`/assets/home/stats/statsbackground.jpeg`}
                  alt="background"
                  fill
                  priority
                  objectFit="cover"
                  quality={100}
                />
              </motion.div>

              {albaha_states_data.map((state) => (
                <motion.div
                  key={state.state}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: state.state === currentArea ? 1 : 0,
                    transition: { duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  }}
                  className="absolute inset-0">
                  <Image
                    src={state.image}
                    alt=""
                    fill
                    priority
                    objectFit="cover"
                    quality={100}
                  />
                </motion.div>
              ))}

              <CloudsLayer />
            </motion.div>
          </AnimatePresence>
        )}
        <ContentOverlay
          setCurrentArea={setCurrentArea}
          currentAreaInfo={currentAreaInfo}
          showContent={showContent}
        />
      </div>
    </section>
  );
}

const ContentOverlay = ({ setCurrentArea, currentAreaInfo, showContent }) => {
  return (
    <div className="w-full h-full  absolute text-white /20 pt-26 p-10 flex flex-col z-[9]">
      <div className="w-full h-full flex flex-col gap-8 px-10 relative">
        <LineTitle className={`mx-30 `}>بيانات منطقة الباحة</LineTitle>
        <Mapping showContent={showContent} setCurrentArea={setCurrentArea} />
        {currentAreaInfo ? (
          <motion.div
            className="flex items-center justify-between w-full h-fit mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}>
            <div className="w-full flex flex-col items-start gap-6 justify-center">
              {currentAreaInfo.state_info
                .slice(0, Math.ceil(currentAreaInfo.state_info.length / 2))
                .map((item, index) => (
                  <StateInfo key={index} index={index} data={item} />
                ))}
            </div>
            <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
              {currentAreaInfo.state_info
                .slice(Math.ceil(currentAreaInfo.state_info.length / 2))
                .map((item, index) => (
                  <StateInfo index={index} key={index} data={item} />
                ))}
            </div>
          </motion.div>
        ) : (
          showContent && (
            <motion.div
              className="flex items-center justify-between w-full h-fit mt-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}>
              <div className="w-full flex flex-col items-start gap-6 justify-center">
                {default_states_data
                  .slice(0, Math.ceil(default_states_data.length / 2))
                  .map((item, index) => (
                    <StateInfo index={index} key={index} data={item} />
                  ))}
              </div>
              <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
                {default_states_data
                  .slice(Math.ceil(default_states_data.length / 2))
                  .map((item, index) => (
                    <StateInfo index={index} key={index} data={item} />
                  ))}
              </div>
            </motion.div>
          )
        )}

        {showContent && <Button>مشاهدة المزيد</Button>}
      </div>
    </div>
  );
};
