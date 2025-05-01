"use client";
import LineTitle from "@/UI/LineTitle";
import StatsContent from "./StatsContent";
import { useCallback, useEffect, useRef } from "react";
import Button from "@/UI/Button";

const { Mapping } = require("./Mapping");

const StatsContentOverlay = ({
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
        <StatsContent
          currentAreaInfo={currentAreaInfo}
          showContent={showContent}
        />
        <div data-ignore-click>
          {showContent && <Button>مشاهدة المزيد</Button>}
        </div>
      </div>
    </div>
  );
};

export default StatsContentOverlay;
