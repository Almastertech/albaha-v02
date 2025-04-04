import Image from "next/image";

export function CardsContainer() {
  const ourReports = [
    {
      id: 1,
      h4: "تقرير ازدهار المدن",
      p: "تقرير ازدهار المدن يقيس التنمية الحضرية  والاستدامة لتعزيز النمو وجودة الحياة.",
      button: "تحميل",
      history: "2025-01-14",
    },
    {
      id: 2,
      h4: "المرصد الحضري لمدن استراليا",
      p: "تقرير يعرض مؤشرات التحضر وجودة الحياة في مدن أستراليا.",
      button: "تحميل",
      history: "2025-01-14",
    },
    {
      id: 3,
      h4: "المرصد الحضري لمدن استراليا",
      p: "تقرير يعرض مؤشرات التحضر وجودة الحياة في مدن أستراليا.",
      button: "تحميل",
      history: "2025-01-14",
    },
  ];
  const externalReports = [
    {
      id: 1,
      h4: "مدخل في ادارة المشروعات الاصدار3",
      p: "هذا التقرير يقدم نظرة شاملة على أساسيات إدارة المشروعات وفقًا لأحدث الممارسات والمعايير في إصداره الثالث.",
      button: "تحميل",
      history: "2025-01-14",
    },
  ];
  const participants = [
    {
      id: 1,
      h4: "تقرير الاعمال",
      p: "يقدم تقرير الأعمال نظرة شاملة على أحدث مشاريع مرصد الباحة، متضمنًا الإنجازات والتطورات المستقبلية.",
      button: "تحميل",
      history: "2025-01-14",
    },
    {
      id: 2,
      h4: "تقرير اختباري للمشاركة",
      p: "تقرير اختباري للمشاركة تقرير اختباري للمشاركة تقرير اختباري للمشاركة",
      button: "تحميل",
      history: "2025-01-14",
    },
  ];
  return (
    <div className="bg-[#343537] rounded-2xl w-full text-white flex flex-col gap-2 pb-10">
      <div className="p-10 rounded-2xl w-full text-white flex flex-col gap-6">
        <h2 className="text-[30px] font-bold">تقاريرنا</h2>
        <Cards reports={ourReports} />

        <h2 className="text-[30px] font-bold">تقارير ودراسات خارجية </h2>
        <Cards reports={externalReports} />

        <h2 className="text-[30px] font-bold">مساهمات المشاركين </h2>
        <Cards reports={participants} />
      </div>

      <PaginationButton />
    </div>
  );
}

const Cards = ({ reports }) => {
  return (
    <div className="w-full flex gap-6">
      {reports.map((report) => (
        <div
          key={report.id}
          className="bg-[#303031] rounded-lg p-5 flex flex-col justify-between gap-3 w-[450px] h-[210px]">
          <div className="flex">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#11504D] to-[#06A69C]"></div>
            <h4 className="-ms-3 text-[24px]">{report.h4}</h4>
          </div>
          <p className="text-[16px]">{report.p}</p>
          <div className="w-full flex justify-between items-center">
            <button className="bg-[#fff] px-5 py-2 rounded-lg text-black flex items-center gap-5 cursor-pointer">
              <span className="text-[14px] font-bold">{report.button}</span>
              <Image
                src="/assets/reports/DownloadArrow.svg"
                alt="arrow download"
                width={25}
                height={25}
              />
            </button>
            <span className="text-[14px]">{report.history}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export const PaginationButton = () => {
  return (
    <div className="w-full flex justify-between mt-5 px-10">
      <div className="flex items-center gap-3 text-white">
        <Image
          src="/assets/reports/NextIcon.svg"
          alt="Next Arrow"
          width={10}
          height={10}
        />
        <p className="text-[18px]">Next</p>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex space-x-2 text-base h-10">
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            40
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            ...
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            05
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            04
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            03
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-gray-500 bg-white border border-gray-300">
            02
          </li>
          <li className="flex items-center justify-center px-2 h-9 rounded-lg leading-tight text-white bg-[#11504D80] border border-black ">
            01
          </li>
        </ul>
      </nav>

      <div>
        <div className="flex items-center gap-3 text-white">
          <p className="text-[18px]">Previous</p>
          <Image
            src="/assets/reports/PervIcon.svg"
            alt="Next Arrow"
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
};
