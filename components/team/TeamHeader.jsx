"use client";
import Image from "next/image";
import { useLanguage } from "@/context/languageContext";

const TeamsHeader = () => {
  const { isEnglish } = useLanguage();

  return (
    <>
      <div className="flex items-center px-24">
        <Image
          src="/assets/ourteam/Square.svg"
          alt="square icon"
          width={140}
          height={140}
          className={`${isEnglish && "rotate-180"}`}
        />
        <h3 className="text-2xl text-white -ms-10">
          {isEnglish ? "Meet Our Outstanding Team" : "تعرف على فريقنا المتميز"}
        </h3>
      </div>
      <div className="ms-10 px-24 mt-16">
        <p className="text-lg text-white mb-4">
          {isEnglish
            ? "We take pride in our elite team of experts and specialists who work together to achieve excellence and innovation."
            : "نحن نفخر بوجود نخبة من الخبراء والمتخصصين الذين يعملون معًا لتحقيق"}
        </p>
        <p className="text-lg text-white">
          {isEnglish
            ? "Discover more about our team and their role in fulfilling our vision!"
            : "التميز والابتكار. اكتشف المزيد عن فريقنا ودوره في تحقيق رؤيتنا!"}
        </p>
      </div>
    </>
  );
};

export default TeamsHeader;
