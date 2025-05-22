"use client";
import { LastNews } from "@/components/news/LastNews";
import { News } from "@/components/news/News";
import { useLanguage } from "@/context/languageContext";
import getData from "@/lib/api";
import { Header } from "@/UI/Header";
import { useEffect, useState } from "react";

function NewsPage() {
  const { isEnglish } = useLanguage();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("news", isEnglish ? "en" : "ar");
      setData(result);
    };

    fetchData();
  }, [isEnglish]);

  if (!data)
    return (
      <div className="h-screen bg-black text-white text-4xl font-bold flexify">
        {isEnglish ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  const { latestNews, allNews } = data;

  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-32 flex flex-col justify-center items-center gap-16">
      <Header keyword="news" />
      <LastNews isEnglish={isEnglish} data={latestNews} />
      <News isEnglish={isEnglish} data={allNews} />
    </section>
  );
}

export default NewsPage;
