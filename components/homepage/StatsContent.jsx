"use client";

const { StateInfo } = require("./StateInfo");
import { useLanguage } from "@/context/languageContext";
import { motion, AnimatePresence } from "framer-motion";

const StatsContent = ({ currentAreaInfo, showContent }) => {
  const { isEnglish } = useLanguage();
  const default_states_data = [
    {
      name: isEnglish ? "Number of Commercial Records" : "عدد السجلات التجارية",
      icon: "/assets/home/stats/archive-02.svg",
      value: 153341,
      unit: isEnglish ? "Record" : "سجل",
    },
    {
      name: isEnglish
        ? "Road Infrastructure Development Spending"
        : "حجم الإنفاق على تطوير البنية التحتية للطرق",
      icon: "/assets/home/stats/road-01.svg",
      value: 87,
      unit: isEnglish ? "Million SAR" : "مليون ريال سعودي",
    },
    {
      name: isEnglish
        ? "Number of Investment Opportunities"
        : "عدد الفرص الاستثمارية",
      icon: "/assets/home/stats/chart-average.svg",
      value: 441,
      unit: isEnglish ? "Opportunity" : "فرصة",
    },
    {
      name: isEnglish
        ? "Point of Sale Transaction Volume"
        : "حجم صفقات نقاط البيع",
      icon: "/assets/home/stats/pie-chart.svg",
      value: 2.8,
      unit: isEnglish ? "Billion SAR" : "مليار ريال سعودي",
    },
    {
      name: isEnglish ? "Honey Production Volume" : "حجم إنتاج العسل",
      icon: "/assets/home/stats/spaghetti.svg",
      value: 1000,
      unit: isEnglish ? "Approx. Ton" : "طن تقريبا",
    },
    {
      name: isEnglish ? "Pomegranate Production Volume" : "حجم إنتاج الرمان",
      icon: "/assets/home/stats/spaghetti.svg",
      value: 30,
      unit: isEnglish ? "Ton" : "طن",
    },
    {
      name: isEnglish ? "Number of Heritage Sites" : "عدد المواقع التراثية",
      icon: "/assets/home/stats/maping.svg",
      value: 129,
      unit: isEnglish ? "Site" : "موقع",
    },
  ];

  return currentAreaInfo ? (
    <motion.div
      dir="rtl"
      className="flex items-center justify-between w-full h-fit mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div
        className="w-full flex flex-col items-start gap-6 justify-center"
        dir="rtl">
        {currentAreaInfo.sectorIndicators
          .slice(0, Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo key={index} index={index} data={item} />
          ))}
      </div>
      <div
        dir="rtl"
        className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
        {currentAreaInfo.sectorIndicators
          .slice(Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo index={index} key={index} data={item} />
          ))}
      </div>
    </motion.div>
  ) : (
    showContent && (
      <motion.div
        dir="rtl"
        className="flex items-center justify-between w-full h-fit mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div
          dir="rtl"
          className="w-full flex flex-col items-start gap-6 justify-center">
          {default_states_data
            .slice(0, Math.ceil(default_states_data.length / 2))
            .map((item, index) => (
              <StateInfo index={index} key={index} data={item} />
            ))}
        </div>
        <div
          dir="rtl"
          className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
          {default_states_data
            .slice(Math.ceil(default_states_data.length / 2))
            .map((item, index) => (
              <StateInfo index={index} key={index} data={item} />
            ))}
        </div>
      </motion.div>
    )
  );
};

export default StatsContent;
