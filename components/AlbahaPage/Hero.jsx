"use client";
import { useEffect, useState } from "react";

export const HeroSlide = () => {
  const images = [
    "/assets/location/AlbahaLocation.jpeg",
    "/assets/location/AlbahaFagr.jpg",
    "/assets/location/DJI_0205.jpg",
    "/assets/location/DJI_0788.jpg",
  ];
  const Info = [
    { id: 1, h: "التنمية", p: "تحقيق تنمية متوازنة ومستدامة في منطقة الباحة" },
    { id: 2, h: "التطوير", p: "تنفيذ الاستراتيجية الشاملة لتطوير المنطقة" },
    { id: 3, h: "الأستثمار", p: "تحفيز مشاركة القطاع الخاص في تطوير المنطقة" },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-[95vh] overflow-hidden bg-[#232629]">
      {/* Slides */}
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          } `}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Dots */}
      <div
        className="absolute z-[999] -bottom-1 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 w-1/2 h-16 bg-[#232629]"
        style={{
          clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
        }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 transition-all duration-300 cursor-pointer ${
              currentSlide === index
                ? "bg-white w-8 rounded-lg"
                : "bg-white/50 w-3 rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute z-20 inset-0 flex items-center bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))] bg-opacity-50 text-white">
        <div className="flex flex-col justify-center items-start gap-10 ms-20 w-[70%]">
          <div className="flex flex-col gap-3 text-white w-[70%]">
            <h2 className="text-3xl">المكتب الاستراتيجي لتطوير منطقة الباحة</h2>
            <p className="text-lg">
              انطلاقًا من اهتمام القيادة بتنمية جميع مناطق المملكة واستغلال
              مواردها وتعزيز ميزاتها التنافسية، صدر الأمر السامي الكريم رقم
              (61856) بتاريخ 1443/10/02 هـ بتأسيس المكتب الاستراتيجي لتطوير
              منطقة الباحة. يعمل المكتب على تنفيذ الاستراتيجية الشاملة للتنمية
              وفق رؤية طموحة.
            </p>
          </div>
          <div className="flex items-center justify-center gap-12 text-white">
            {Info.map((info) => (
              <div key={info.id}>
                <div className="flex items-center gap-3">
                  <p className="text-2xl">{info.h}</p>
                  <div className="w-5 h-[2px] bg-white rounded-xl"></div>
                </div>
                <p className="text-lg">{info.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
