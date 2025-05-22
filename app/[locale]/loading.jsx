"use client";

import { useLanguage } from "@/context/languageContext";

function loading() {
  const { isEnglish } = useLanguage();
  return (
    <div className="h-screen bg-black text-white text-4xl font-bold flexify">
      {isEnglish ? "Loading..." : "جارٍ التحميل..."}
    </div>
  );
}

export default loading;
