import Image from "next/image";
export function LastNews({ data }) {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;

  return (
    <div className="bg-[#363B3E] w-full rounded-2xl p-12">
      <div className="w-full flex justify-center items-center gap-5">
        <div className="w-full h-1 bg-white rounded-2xl"></div>
        <h3 className="text-[27px] text-white text-nowrap">آخر الأخبار</h3>
        <div className="w-full h-1 bg-white rounded-2xl"></div>
      </div>
      <div className="w-full bg-[#232629] rounded-lg overflow-hidden shadow-lg mt-5">
        <div className="relative h-48">
          <Image
            src={`${files_path}${data.pic}`}
            alt="Event Image"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="bg-[#03242266] text-[25px] absolute bottom-0 w-full bg-opacity-50 text-white text-center py-2">
            {data.name}
          </div>
        </div>
        <div className="p-6 text-white">
          <p className="text-sm">{data.start}</p>
          <p className="mt-2 text-lg">{data.content}</p>
          <button className="mt-4 bg-white text-black py-2 px-4 rounded flex gap-3">
            <span className="text-lg">اقرأ المزيد</span>
            <Image
              src="/assets/news/ReadMoreArrow.svg"
              alt="Read More Arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
