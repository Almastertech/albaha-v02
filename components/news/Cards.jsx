import Image from "next/image";

export const Cards = ({ data }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;

  const newsData = data;
  return (
    <div className="flex flex-wrap gap-10">
      {newsData.map((card) => (
        <div
          key={card.id}
          className=" basis-[200px] grow bg-[#303031] text-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src={`${files_path}${card.pic}`}
              alt={card.name}
              fill
              className="object-cover"
            />
            <h3 className="bg-[#03242266] text-[17px] absolute bottom-0 w-full bg-opacity-50 text-white text-center px-6 py-2">
              {card.name}
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-300 text-sm mt-2">{card.content}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-white text-black py-2 px-4 rounded flex items-center justify-center gap-3">
                <span className="text-sm">اقرأ المزيد</span>
                <Image
                  src="/assets/news/ReadMoreArrow.svg"
                  alt="Read More Arrow"
                  width={15}
                  height={15}
                />
              </button>
              <span className="text-white text-sm">{card.start}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
