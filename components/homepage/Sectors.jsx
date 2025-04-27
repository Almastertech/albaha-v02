"use client";

import LineTitle from "@/UI/LineTitle";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Button from "@/UI/Button";
import { StateInfo } from "./StateInfo";

const sameInfo = [
  {
    info: "النمو السنوي في المساحة",
    icon: "/assets/home/sectors/elements.svg",
    number: 1,
    unit: "%",
  },
  {
    info: "فرز النفايات",
    icon: "/assets/home/sectors/elements.svg",
    number: 1,
    unit: "%",
  },
  {
    info: "مستوى تركيز الأوزون",
    icon: "/assets/home/sectors/elements.svg",
    number: 1,
    unit: "جم/م²",
  },
  {
    info: "التغيير في غطاء التشجير",
    icon: "/assets/home/sectors/elements.svg",
    number: 1,
    unit: "%",
  },
  {
    info: "التلوث الهوائي",
    icon: "/assets/home/sectors/elements.svg",
    number: 117,
    unit: "ديسيبل",
  },
  {
    info: "التلوث الضوضائي",
    icon: "/assets/home/sectors/elements.svg",
    number: 51,
    unit: "ديسيبل",
  },
  {
    info: "مستوى تركيز الجسيمات",
    icon: "/assets/home/sectors/elements.svg",
    number: 48,
    unit: "ميكروغرام/م³",
  },
];
const diamonds_data = [
  {
    title: "البيئة",
    description:
      "تتعلق بحماية الموارد الطبيعية ، معالجة التلوث والحفاظ علي التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/water.jpeg",
    info: [
      {
        info: "النمو السنوي في المساحة",
        icon: "/assets/home/sectors/elements.svg",
        number: 31,
        unit: "%",
      },
      {
        info: "فرز النفايات",
        icon: "/assets/home/sectors/elements.svg",
        number: 15,
        unit: "%",
      },
      {
        info: "مستوى تركيز الأوزون",
        icon: "/assets/home/sectors/elements.svg",
        number: 61,
        unit: "جم/م²",
      },
      {
        info: "التغيير في غطاء التشجير",
        icon: "/assets/home/sectors/elements.svg",
        number: 12,
        unit: "%",
      },
      {
        info: "التلوث الهوائي",
        icon: "/assets/home/sectors/elements.svg",
        number: 17,
        unit: "ديسيبل",
      },
      {
        info: "التلوث الضوضائي",
        icon: "/assets/home/sectors/elements.svg",
        number: 23,
        unit: "ديسيبل",
      },
      {
        info: "مستوى تركيز الجسيمات",
        icon: "/assets/home/sectors/elements.svg",
        number: 56,
        unit: "ميكروغرام/م³",
      },
    ],
  },
  {
    title: "الثقافة والتراث",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الابتكار",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "التعليم",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "البنية التحتية",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الرعاية الصحية",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الأمن والسلامة",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "النقل والخدمات اللوجستية",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "استعمالات الأراضي",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "top",
    image: "/assets/home/sectors/water.jpeg",
    info: [...sameInfo],
  },
  {
    title: "الاستثمار",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الخصائص الاقتصادية",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الخصائص السكانية والإسكان",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },

  {
    title: "الشفافية",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الطاقة",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الاتصالات وتقنية المعلومات",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "الترفيه",
    description:
      "تتعلق بحماية الموارد الطبيعية، معالجة التلوث والحفاظ على التنوع البيولوجي لتحقيق تنمية مستدامة",
    position: "bottom",
    image: "/assets/home/sectors/Background.png",
    info: [...sameInfo],
  },
  {
    title: "السياحة",
    description:
      "تشير إلى تطوير قطاع السياحة من خلال تعزيز البنية التحتية السياحية والتسويق للوجهات",
    position: "bottom",
    image: "/assets/home/sectors/mountain.jpeg",
    info: [
      {
        info: "النمو السنوي في المساحة",
        icon: "/assets/home/sectors/elements.svg",
        number: 20,
        unit: "%",
      },
      {
        info: "فرز النفايات",
        icon: "/assets/home/sectors/elements.svg",
        number: 3,
        unit: "%",
      },
      {
        info: "مستوى تركيز الأوزون",
        icon: "/assets/home/sectors/elements.svg",
        number: 67,
        unit: "جم/م²",
      },
      {
        info: "التغيير في غطاء التشجير",
        icon: "/assets/home/sectors/elements.svg",
        number: 34,
        unit: "%",
      },
      {
        info: "التلوث الهوائي",
        icon: "/assets/home/sectors/elements.svg",
        number: 117,
        unit: "ديسيبل",
      },
      {
        info: "التلوث الضوضائي",
        icon: "/assets/home/sectors/elements.svg",
        number: 51,
        unit: "ديسيبل",
      },
      {
        info: "مستوى تركيز الجسيمات",
        icon: "/assets/home/sectors/elements.svg",
        number: 48,
        unit: "ميكروغرام/م³",
      },
    ],
  },
];

const FILES_PATH = process.env.NEXT_PUBLIC_FILES_PATH;

function Sectors({ data }) {
  const [activateAnimation, setActivateAnimation] = useState(false);
  const [selectedDiamond, setSelectedDiamond] = useState(null);

  const handleReset = () => {
    setSelectedDiamond(null);
  };

  return (
    <section className="snap-start  text-white relative flex flex-col gap-0 h-screen s-10">
      <div className="relative w-full h-full z-30 bg-black/50">
        <LineTitle className={`m-24 mt-30 mx-50 mb-0 z-30`}>
          القطاعات التنموية
        </LineTitle>
        {selectedDiamond && (
          <div
            onClick={handleReset}
            className="absolute left-30 top-30 cursor-pointer z-10">
            عودة
          </div>
        )}

        <Diamonds
          data={data}
          activateAnimation={activateAnimation}
          selectedDiamond={selectedDiamond}
          setSelectedDiamond={setSelectedDiamond}
          setActivateAnimation={setActivateAnimation}
        />
        <DiamondInfo
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

const SectoresBackground = ({ selectedDiamond, activateAnimation, data }) => {
  return (
    <AnimatePresence>
      <motion.div className="absolute inset-0 flex justify-center items-center bg-[#333]">
        {!selectedDiamond && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-0">
            <Image
              src={`/assets/home/sectors/darkbackground.png`}
              alt="background"
              fill
              priority
              quality={100}
              className="object-cover"
              unoptimized
            />
          </motion.div>
        )}

        {data.map((diamond) => (
          <motion.div
            key={diamond.name.arabic}
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                diamond.name.arabic === selectedDiamond?.name.arabic ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
            className="absolute inset-0 z-10">
            <Image
              src={`${FILES_PATH}${diamond.picUrl}`}
              alt={diamond.name.arabic}
              fill
              priority
              className="object-cover"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Diamonds = ({
  selectedDiamond,
  setSelectedDiamond,
  activateAnimation,
  setActivateAnimation,
  data,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      setActivateAnimation(true);
    }
  }, [inView]);

  return (
    <div
      className={`w-full h-full pb-20 transform transition-all duration-[0.7s] absolute flexify  ${
        activateAnimation
          ? selectedDiamond?.order <= 9
            ? "translate-y-15"
            : selectedDiamond?.order > 9
            ? "-translate-y-50"
            : "-translate-y-26"
          : "-translate-y-14"
      }  justify-center transition-all duration-300`}
      ref={ref}>
      <div
        className={`absolute transition-all w-full duration-300 left-0 transform flexify`}>
        {data.slice(0, 9).map((item, index) => (
          <Diamond
            setSelectedDiamond={setSelectedDiamond}
            key={index}
            data={item}
            activateAnimation={activateAnimation}
            selectedDiamond={selectedDiamond}
            isActive={item?.name.arabic === selectedDiamond?.name.arabic}
          />
        ))}
      </div>
      <div
        className={`absolute transition-all w-full  ml-0 mt-40 duration-300 left-0 transform flexify`}>
        {data.slice(9).map((item, index) => (
          <Diamond
            setSelectedDiamond={setSelectedDiamond}
            key={index}
            data={item}
            activateAnimation={activateAnimation}
            selectedDiamond={selectedDiamond}
            isActive={item?.name.arabic === selectedDiamond?.name.arabic}
          />
        ))}
      </div>
    </div>
  );
};

const Diamond = ({
  data,
  activateAnimation,
  selectedDiamond,
  setSelectedDiamond,
  isActive,
}) => (
  <motion.div
    key={selectedDiamond ? selectedDiamond.name.arabic : "default"}
    onClick={() => {
      setSelectedDiamond(data);
    }}
    initial={!selectedDiamond ? { y: data.order <= 9 ? -100 : 100 } : false}
    animate={activateAnimation && { y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className={`relative cursor-pointer xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] mx-2 2xl:mx-6 transform transition-all duration-[0.5s] ease-out ${
      data.order > 9 ? "-my-12 hover:translate-y-3" : "hover:-translate-y-3"
    }`}>
    <div
      className={`absolute transition-all duration-300 inset-0 rotate-45 border-4 border-[#DED3B3] scale-75 ${
        selectedDiamond ? (isActive ? "bg-black" : "opacity-30") : "opacity-100"
      }`}></div>

    <div
      className={`absolute inset-0 ${
        selectedDiamond
          ? isActive
            ? "opacity-100"
            : "opacity-50"
          : "opacity-100"
      } flex items-center justify-center  text-center `}>
      <p className="text-white text-xs lg:text-sm p-4">{data.name.arabic}</p>
    </div>
  </motion.div>
);

const DiamondInfo = ({ activateAnimation, selectedDiamond }) => {
  if (selectedDiamond)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-full h-fit p-20 py-0 flex flex-col gap-0  transform transition-all duration-[0.7s] absolute ${
          activateAnimation
            ? selectedDiamond?.order <= 9
              ? "translate-y-20"
              : selectedDiamond?.order > 9
              ? "translate-y-80"
              : "hidden"
            : "hidden"
        }  transition-all duration-300`}>
        <div className="flexify self-start gap-4 mb-4">
          <span className="text-[#DED3B3] font-bold">
            {selectedDiamond.name.arabic}
          </span>
          <p className="">{selectedDiamond.description1}</p>
        </div>
        {selectedDiamond.sectorIndicators.length > 0 && (
          <div className="flex items-start h-fit  flex-wrap">
            {selectedDiamond?.sectorIndicators.map((item, index) => (
              <StateInfo key={index} data={item} />
            ))}
          </div>
        )}

        <Button className={`mt-3`}>مشاهدة المزيد</Button>
      </motion.div>
    );
  else return;
};

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
