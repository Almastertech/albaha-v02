"use client";

import { useLanguage } from "@/context/languageContext";
import { Link } from "@/i18n/navigation";
import Button from "@/UI/Button";

const HeroOverlay = ({ data }) => {
  const { isEnglish } = useLanguage();
  return (
    <div className="p-res w-full h-full bg-black/50 absolute left-0 top-0 z-40">
      <div className="flex flex-col justify-end gap-10 h-[80%]">
        <h1 className="text-white font-bold text-5xl">
          {data.find((item) => item.id === "Video-Title")?.content}
        </h1>
        <Link href={`http://34.166.121.10:7009/`} target="blank">
          <Button>
            {isEnglish
              ? "Urban Information Platform"
              : "منصة المعلومات الحضرية"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroOverlay;
