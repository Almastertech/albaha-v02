"use client";
import { Hero } from "@/components/location/Hero";
import { useLanguage } from "@/context/languageContext";
import getData from "@/lib/api";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

function LocationPage() {
  const { isEnglish } = useLanguage();
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(`govs`, isEnglish ? "en" : "ar");
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

  const currState = data?.find((state) => state.state === id);

  return (
    <>
      <Hero states_data={data} data={currState} />
    </>
  );
}

export default LocationPage;
