"use client";

import LineTitle from "@/UI/LineTitle";
import Image from "next/image";
import { useState } from "react";
import Diamonds from "./Diamonds";
import DiamondInfo from "./DiamondsInof";
import SectoresBackground from "./SectoresBackground";
import { useLanguage } from "@/context/languageContext";

// const sameInfo = [
//   {
//     info: "النمو السنوي في المساحة",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 1,
//     unit: "%",
//   },
//   {
//     info: "فرز النفايات",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 1,
//     unit: "%",
//   },
//   {
//     info: "مستوى تركيز الأوزون",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 1,
//     unit: "جم/م²",
//   },
//   {
//     info: "التغيير في غطاء التشجير",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 1,
//     unit: "%",
//   },
//   {
//     info: "التلوث الهوائي",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 117,
//     unit: "ديسيبل",
//   },
//   {
//     info: "التلوث الضوضائي",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 51,
//     unit: "ديسيبل",
//   },
//   {
//     info: "مستوى تركيز الجسيمات",
//     icon: "/assets/home/sectors/elements.svg",
//     number: 48,
//     unit: "ميكروغرام/م³",
//   },
// ];
// const diamonds_data = [
//   {
//     title: "البيئة",
//     description:
//       "تتعلق بحماية الموارد الطبيعية ، معالجة التلوث والحفاظ علي التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/water.jpeg",
//     info: [
//       {
//         info: "النمو السنوي في المساحة",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 31,
//         unit: "%",
//       },
//       {
//         info: "فرز النفايات",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 15,
//         unit: "%",
//       },
//       {
//         info: "مستوى تركيز الأوزون",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 61,
//         unit: "جم/م²",
//       },
//       {
//         info: "التغيير في غطاء التشجير",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 12,
//         unit: "%",
//       },
//       {
//         info: "التلوث الهوائي",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 17,
//         unit: "ديسيبل",
//       },
//       {
//         info: "التلوث الضوضائي",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 23,
//         unit: "ديسيبل",
//       },
//       {
//         info: "مستوى تركيز الجسيمات",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 56,
//         unit: "ميكروغرام/م³",
//       },
//     ],
//   },
//   {
//     title: "الثقافة والتراث",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الابتكار",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "التعليم",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "البنية التحتية",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الرعاية الصحية",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الأمن والسلامة",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "النقل والخدمات اللوجستية",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "استعمالات الأراضي",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "top",
//     image: "/assets/home/sectors/water.jpeg",
//     info: [...sameInfo],
//   },
//   {
//     title: "الاستثمار",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الخصائص الاقتصادية",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الخصائص السكانية والإسكان",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },

//   {
//     title: "الشفافية",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الطاقة",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الاتصالات وتقنية المعلومات",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "الترفيه",
//     description:
//       "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
//     position: "bottom",
//     image: "/assets/home/sectors/Background.png",
//     info: [...sameInfo],
//   },
//   {
//     title: "السياحة",
//     description:
//       "تشير إلى تطوير قطاع السياحة من خلال تعزيز البنية التحتية السياحية والتسويق للوجهات",
//     position: "bottom",
//     image: "/assets/home/sectors/mountain.jpeg",
//     info: [
//       {
//         info: "النمو السنوي في المساحة",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 20,
//         unit: "%",
//       },
//       {
//         info: "فرز النفايات",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 3,
//         unit: "%",
//       },
//       {
//         info: "مستوى تركيز الأوزون",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 67,
//         unit: "جم/م²",
//       },
//       {
//         info: "التغيير في غطاء التشجير",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 34,
//         unit: "%",
//       },
//       {
//         info: "التلوث الهوائي",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 117,
//         unit: "ديسيبل",
//       },
//       {
//         info: "التلوث الضوضائي",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 51,
//         unit: "ديسيبل",
//       },
//       {
//         info: "مستوى تركيز الجسيمات",
//         icon: "/assets/home/sectors/elements.svg",
//         number: 48,
//         unit: "ميكروغرام/م³",
//       },
//     ],
//   },
// ];

const FILES_PATH = process.env.NEXT_PUBLIC_FILES_PATH;

function Sectors({ data }) {
  const [activateAnimation, setActivateAnimation] = useState(false);
  const [selectedDiamond, setSelectedDiamond] = useState(null);

  const { isEnglish } = useLanguage();
  const handleReset = () => {
    setSelectedDiamond(null);
  };

  return (
    <section className="snap-start  text-white relative flex flex-col gap-0 h-screen s-10">
      <div className="relative w-full h-full z-30 bg-black/50">
        <div dir="rtl">
          <LineTitle className="m-24 mt-30 mx-50 mb-0 z-30">
            {isEnglish ? "Development Sectors" : "القطاعات التنموية"}
          </LineTitle>

          {selectedDiamond && (
            <div
              onClick={handleReset}
              className="absolute left-30 top-30 cursor-pointer z-10">
              {isEnglish ? "Back" : "عودة"}
            </div>
          )}
        </div>

        <Diamonds
          data={data}
          activateAnimation={activateAnimation}
          selectedDiamond={selectedDiamond}
          setSelectedDiamond={setSelectedDiamond}
          setActivateAnimation={setActivateAnimation}
        />
        <DiamondInfo
          isEnglish={isEnglish}
          activateAnimation={activateAnimation}
          selectedDiamond={selectedDiamond}
        />
      </div>
      <SectoresBackground
        data={data}
        selectedDiamond={selectedDiamond}
        activateAnimation={activateAnimation}
      />
    </section>
  );
}

const ZigZag = () => {
  return (
    <div className="absolute w-full">
      <Image
        src={`/assets/home/sectors/zigzag.svg`}
        alt="zig zag"
        width={180}
        height={100}
        className="w-full bg-repeat scale-90"
      />
    </div>
  );
};

export default Sectors;
