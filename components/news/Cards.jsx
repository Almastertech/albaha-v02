import Image from "next/image";

export const Cards = () => {
  const cards = [
    {
      id: 1,
      image: "/assets/home/library/photo-1.png",
      alt: "Albaha 1",
      title: "اللقاء التعريفي للمرصد الحضري لمنطقة الباحة",
      desc: "أُقيمت في منطقة الباحة فعاليات متنوعة ومميزة جذبت الزوار من مختلف المناطق. من أبرز هذه الفعاليات",
      history: "2025-01-14",
    },
    {
      id: 2,
      image: "/assets/home/library/photo-1.png",
      alt: "Albaha 2",
      title: "اللقاء التعريفي للمرصد الحضري لمنطقة الباحة",
      desc: "أُقيمت في منطقة الباحة فعاليات متنوعة ومميزة جذبت الزوار من مختلف المناطق. من أبرز هذه الفعاليات",
      history: "2025-01-14",
    },
    {
      id: 3,
      image: "/assets/home/library/photo-1.png",
      alt: "Albaha 3",
      title: "اللقاء التعريفي للمرصد الحضري لمنطقة الباحة",
      desc: "أُقيمت في منطقة الباحة فعاليات متنوعة ومميزة جذبت الزوار من مختلف المناطق. من أبرز هذه الفعاليات",
      history: "2025-01-14",
    },
    {
      id: 4,
      image: "/assets/home/library/photo-1.png",
      alt: "Albaha 4",
      title: "اللقاء التعريفي للمرصد الحضري لمنطقة الباحة",
      desc: "أُقيمت في منطقة الباحة فعاليات متنوعة ومميزة جذبت الزوار من مختلف المناطق. من أبرز هذه الفعاليات",
      history: "2025-01-14",
    },
  ];
  return (
    <div className="flex gap-10">
      {cards.map((card) => (
        <div
          key={card.id}
          className="max-w-sm bg-[#303031] text-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={card.image}
              alt={card.alt}
              layout="fill"
              objectFit="cover"
            />
            <h3 className="bg-[#03242266] text-[17px] absolute bottom-0 w-full bg-opacity-50 text-white text-center px-6 py-2">
              {card.title}
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-300 text-sm mt-2">{card.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-white text-black py-2 px-4 rounded flex gap-3">
                <span className="text-lg">اقرأ المزيد</span>
                <Image
                  src="/assets/news/ReadMoreArrow.svg"
                  alt="Read More Arrow"
                  width={20}
                  height={20}
                />
              </button>
              <span className="text-white text-sm">{card.history}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
