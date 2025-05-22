"use client";
import { AlbahaReports } from "./AlbahaReports";
import { AlbahaGallery } from "./AlbahaGallery";
import { AlbahaNews } from "./AlbahaNews";
import { useLanguage } from "@/context/languageContext";

function Library({ data, media }) {
  const { isEnglish } = useLanguage();
  return (
    <section className="snap-start py-8 text-white flex flex-col items-center justify-end gap-2 bg-[url('/assets/home/library/librarybackground.jpeg')] bg-center bg-cover bg-no-repeat h-screen">
      <h2 className="text-4xl mt-10 font-bold">
        {isEnglish ? "Observatory Library" : "مكتبة المرصد"}
      </h2>

      <AlbahaNews isEnglish={isEnglish} data={data} />
      <AlbahaGallery isEnglish={isEnglish} />
      <AlbahaReports isEnglish={isEnglish} data={media} />
    </section>
  );
}

export default Library;
