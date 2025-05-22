"use client";

import { useLanguage } from "@/context/languageContext";
import getData from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const TeamCards = () => {
  const { isEnglish } = useLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("teams", isEnglish ? "en" : "ar");
      setData(result);
    };

    fetchData();
  }, [isEnglish]);

  if (!data)
    return (
      <div className="h-[50vh] bg-[#232629] text-white text-4xl font-bold flexify">
        {isEnglish ? "Loading..." : "جارٍ التحميل..."}
      </div>
    );
  const team_data = data;

  return (
    <div className="flex flex-wrap justify-center gap-24 bg-[#232629] p-24 mt-10">
      {team_data.map((item, index) => (
        <div
          key={index}
          className=" text-white rounded-lg shadow-lg overflow-hidden w-72">
          {item.pic && (
            <div className="relative w-full h-[250px]">
              {/* <Image
                src={item.pic}
                alt={item.title}
                fill
                className={`absolute object-top ${isEnglish && "rotate-180"}`}
              /> */}
            </div>
          )}

          <div className="p-4 text-center text-white relative border-t border-[#232629] bg-[#232629] before:absolute before:-top-10 before:left-0 before:w-full before:h-14 before:bg-[#232629] before:-skew-y-6">
            <h3
              className={`text-xl font-bold pb-4 mb-8 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[30%] before:h-1 before:rounded-lg before:bg-[#11504D] `}>
              {item.title}
            </h3>
            <div className="text-lg">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
