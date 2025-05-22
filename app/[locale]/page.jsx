"use client";

import HomeHero from "@/components/homepage/HomeHero";
import MailingList from "@/components/homepage/MailingList";
import Partners from "@/components/homepage/Partners";
import Library from "@/components/homepage/Library";
import AlbahaStats from "@/components/homepage/AlbahaStats";
import Sectors from "@/components/homepage/Sectors";

import getData from "@/lib/api";
import { useLanguage } from "@/context/languageContext";
import { useEffect, useState } from "react";

export default function HomePageClient() {
  const { isEnglish } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getData("home", isEnglish ? "en" : "ar");
      setData(result);
    }
    fetchData();
  }, [isEnglish]);

  if (!data)
    return (
      <div className="h-screen bg-black text-white text-4xl font-bold flexify">
        {isEnglish ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  const { fixedData, govs, sectors, partners, mediaFiles, news } = data;

  return (
    <>
      <HomeHero data={fixedData} />
      <AlbahaStats data={govs} />
      <Sectors data={sectors} />
      <Partners data={partners} />
      <Library data={news} media={mediaFiles} />
      <MailingList />
    </>
  );
}
