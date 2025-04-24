"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
import { usePathname } from "next/navigation";

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
    if (videoRef.current.currentTime >= 13 && !fadeOut) {
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
        <ContentOverlay
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

const StatsImages = ({ currentArea, clickedArea }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;
  const path = usePathname();
  const isEnglish = path.includes("en");

  const images = isEnglish
    ? [
        {
          image: "/assets/location/AreaEn/Al-Eaqiq.png",
          name: "Al Aqiq",
          state: "akik",
        },
        {
          image: "/assets/location/AreaEn/Al-Hujra_.png",
          name: "Al Hujrah",
          state: "hogra",
        },
        {
          image: "/assets/location/AreaEn/Al-Qury.png",
          name: "Al Qura",
          state: "kora",
        },
        {
          image: "/assets/location/AreaEn/Al-Makhawaa.png",
          name: "Al Makhwah",
          state: "makhwa",
        },
        {
          image: "/assets/location/AreaEn/Al- Mandaq_.png",
          name: "Al Mandaq",
          state: "mandak",
        },
        {
          image: "/assets/location/AreaEn/Beljurashi.png",
          name: "Baljurashi",
          state: "balghrshy",
        },
        {
          image: "/assets/location/AreaEn/Beni  Hassan_.png",
          name: "Bani Hasan",
          state: "banyhasan",
        },
        {
          image: "/assets/location/AreaEn/Ghamid  Al-Zanad.png",
          name: "Ghamid Al-Zinad",
          state: "ghamed",
        },
        {
          image: "/assets/location/AreaEn/Qalwa.png",
          name: "Qilwah",
          state: "kalwa",
        },
        {
          image: "/assets/location/AreaEn/Al-Baha_.png",
          name: "Al Baha",
          state: "baha",
        },
      ]
    : [
        {
          image: "/assets/location/Area/العقيق.png",
          name: "العقيق",
          state: "akik",
        },
        {
          image: "/assets/location/Area/الحجرة.png",
          name: "محافظة الحجرة",
          state: "hogra",
        },
        {
          image: "/assets/location/Area/القري.png",
          name: "محافظة القرى",
          state: "kora",
        },
        {
          image: "/assets/location/Area/المخواة.png",
          name: "محافظة المخواة",
          state: "makhwa",
        },
        {
          image: "/assets/location/Area/المندق.png",
          name: "محافظة المندق",
          state: "mandak",
        },
        {
          image: "/assets/location/Area/بلجراشي.png",
          name: "محافظة بلجرشي",
          state: "balghrshy",
        },
        {
          image: "/assets/location/Area/بنى  حسن.png",
          name: "محافظة بنى حسن",
          state: "banyhasan",
        },
        {
          image: "/assets/location/Area/غامد الزناد.png",
          name: "محافظة غامد الزناد",
          state: "ghamed",
        },
        {
          image: "/assets/location/Area/قلوة.png",
          name: "محافظة قلوة",
          state: "kalwa",
        },
        {
          image: "/assets/location/Area/الباحة.png",
          name: "الباحة (مقر الإمارة)",
          state: "baha",
        },
      ];

  return (
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
            src={`/assets/home/stats/albaha_states/background.png`}
            alt="background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            unoptimized
          />
        </motion.div>

        {images.map((state) => (
          <motion.div
            key={state.name}
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                state.state === currentArea || state.state === clickedArea
                  ? 1
                  : 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="absolute inset-0">
            <Image
              src={state.image}
              alt={state.name}
              fill
              priority
              className="object-cover object-center"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}

        <CloudsLayer />
      </motion.div>
    </AnimatePresence>
  );
};

const ContentOverlay = ({
  setCurrentArea,
  currentAreaInfo,
  currentArea,
  showContent,
  setClickedArea,
  data,
}) => {
  const containerRef = useRef(null);

  const handleClick = useCallback(
    (event) => {
      if (
        containerRef.current &&
        containerRef.current.contains(event.target) &&
        !event.target.closest("[data-ignore-click]")
      ) {
        setClickedArea(null);
      }
    },
    [setClickedArea]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);
  return (
    <div
      ref={containerRef}
      className="w-full h-full   absolute text-white /20 pt-18 p-10 flex flex-col z-[9]">
      <div className="w-full h-full flex flex-col gap-8 px-10 relative">
        <LineTitle className={`mx-30  mt-10 `}>بيانات منطقة الباحة</LineTitle>
        <Mapping
          data={data}
          currentArea={currentArea}
          setClickedArea={setClickedArea}
          showContent={showContent}
          setCurrentArea={setCurrentArea}
        />
        <Content currentAreaInfo={currentAreaInfo} showContent={showContent} />
        <div data-ignore-click>
          {showContent && <Button>مشاهدة المزيد</Button>}
        </div>
      </div>
    </div>
  );
};

const Content = ({ currentAreaInfo, showContent }) => {
  return currentAreaInfo ? (
    <motion.div
      className="flex items-center justify-between w-full h-fit mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="w-full flex flex-col items-start gap-6 justify-center">
        {currentAreaInfo.sectorIndicators
          .slice(0, Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo key={index} index={index} data={item} />
          ))}
      </div>
      <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
        {currentAreaInfo.sectorIndicators
          .slice(Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
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
  );
};
