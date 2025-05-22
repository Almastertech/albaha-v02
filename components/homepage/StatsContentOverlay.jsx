"use client";
import LineTitle from "@/UI/LineTitle";
import StatsContent from "./StatsContent";
import { useCallback, useEffect, useRef } from "react";
import Button from "@/UI/Button";
import { useLanguage } from "@/context/languageContext";

const { Mapping } = require("./Mapping");

const StatsContentOverlay = ({
  setCurrentArea,
  currentAreaInfo,
  currentArea,
  showContent,
  setClickedArea,
  data,
}) => {
  const { isEnglish } = useLanguage();
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
      className="w-full h-full absolute text-white pt-18 p-10 flex flex-col z-[9]">
      <div className="w-full h-full flex flex-col gap-8 px-10 relative">
        <LineTitle className="mx-30 mt-10">
          {isEnglish ? "Al-Baha Region Data" : "بيانات منطقة الباحة"}
        </LineTitle>

        <Mapping
          data={data}
          currentArea={currentArea}
          setClickedArea={setClickedArea}
          showContent={showContent}
          setCurrentArea={setCurrentArea}
        />

        <StatsContent
          currentAreaInfo={currentAreaInfo}
          showContent={showContent}
        />

        <div
          dir={isEnglish ? "ltr" : "rtl"}
          data-ignore-click
          className={isEnglish ? "ml-34" : ""}>
          {showContent && (
            <Button>{isEnglish ? "View More" : "مشاهدة المزيد"}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsContentOverlay;
