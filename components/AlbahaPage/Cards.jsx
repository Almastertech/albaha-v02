import Image from "next/image";

export const Cards = () => {
  const cards = [
    {
      id: 1,
      img: "/assets/albahaPage/innovation-icon.svg",
      img_hover: "/assets/albahaPage/innovation-icon_hover.svg",
      alt: "innovation-icon",
      title: "التخطيط والتطوير",
      list: [
        "رسم السياسات العامة لتطوير المنطقة وتنميتها.",
        "إعداد الخطط والدراسات والمخططات الاستراتيجية الشاملة للمنطقة وبرامجها التنفيذية.",
        "مراجعة خطط التنمية والبرامج والمشروعات التي تعدها الأجهزة الحكومية، لضمان تحقيق التنمية المتوازنة.",
      ],
    },
    {
      id: 2,
      img: "/assets/albahaPage/evaluation.svg",
      img_hover: "/assets/albahaPage/evaluation_hover.svg",
      alt: "evaluation",
      title: "الإشراف والتنفيذ",
      list: [
        "الإشراف المباشر على تخطيط البرامج والمشروعات الاستراتيجية وتصميمها وتنفيذها.",
        "متابعة تنفيذ البرامج والمشروعات في المنطقة، وضمان تطبيق مؤشرات تحسين الأداء الحضري.",
        "متابعة تخطيط مشروعات البنية الأساسية بالتنسيق مع الأجهزة المعنية.",
        "ترتيب أولويات تنفيذ البرامج والمشروعات بما يتفق مع خطط التنمية.",
      ],
    },
    {
      id: 3,
      img: "/assets/albahaPage/hand-shake-icon.svg",
      img_hover: "/assets/albahaPage/hand-shake-icon_hover.svg",
      alt: "hand-shake-icon",
      title: "التنظيم والتنسيق",
      list: [
        "تنسيق وتنظيم الجهود بين الأجهزة ذات الصلة بتطوير المنطقة وتنميتها.",
        "اقتراح نزع ملكية بعض العقارات لتطوير المنطقة، بالتنسيق مع الجهات المختصة.",
        "الإشراف على تأهيل الأحياء العمرانية وتحسينها، ومعالجة الأحياء العشوائية وتطويرها.",
        "مراجعة مخططات تقسيمات الأراضي.",
      ],
    },
    {
      id: 4,
      img: "/assets/albahaPage/global-economy.svg",
      img_hover: "/assets/albahaPage/global-economy_hover.svg",
      alt: "global-economy",
      title: "دعم الاستثمار والمعلومات",
      list: [
        "وضع البرامج والإجراءات لتحفيز مشاركة القطاع الخاص في التنمية وتنفيذ المشروعات.",
        "إعداد ضوابط البناء واستعمالات الأراضي لدعم مخططات تطوير المنطقة.",
        "إنشاء قاعدة بيانات ونظم معلومات حضرية وإدارتها كمنصة مرجعية للمعلومات التنموية.",
      ],
    },
  ];

  return (
    <div className="pt-48 pb-32 px-10">
      <h2 className="text-3xl font-bold text-center text-white max-w-lg mx-auto -mb-20">
        المهام والمسؤوليات للمكتب الاستراتيجي لتطوير منطقة الباحة:
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group bg-[#1E2123] transition-colors duration-300 hover:bg-neutral-900 hover:cursor-grab p-4 rounded-xl shadow-md text-white h-fit ${
              index === 1 || index === 2 ? "md:mt-32" : ""
            }`}>
            <div className="w-full flex items-center justify-center mb-4 relative">
              <Image
                src={card.img}
                alt={card.alt}
                width={75}
                height={75}
                className="transition-opacity duration-300 group-hover:opacity-0"
              />
              <Image
                src={card.img_hover}
                alt={card.alt}
                width={75}
                height={75}
                className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <ul className="list-disc ps-5 flex flex-col justify-between gap-2">
              {card.list.map((item, idx) => (
                <li key={idx} className="text-lg leading-10">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
