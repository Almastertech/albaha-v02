"use client";
import Image from "next/image";
import { useState } from "react";

export const Cards = ({ data }) => {
  const newsData = data;
  return (
    <div className="flex flex-wrap gap-10">
      {newsData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

const Card = ({ card }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;
  const [showContent, setShowContent] = useState(false);

  return (
    <div
      key={card.id}
      className="basis-[200px] h-fit grow bg-[#303031] text-white rounded-xl shadow-lg overflow-hidden">
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
        {showContent && (
          <div
            className="text-gray-300 text-sm mt-2"
            dangerouslySetInnerHTML={{ __html: card.content }}
          />
          /* <p className="text-gray-300 text-sm mt-2">{card.content}</p> */
        )}
        <div className="w-full flex mt-4">
          {card.content && (
            <div
              onClick={() => {
                console.log(showContent);
                setShowContent(!showContent);
              }}
              className="bg-white text-black py-2 px-4 rounded flex items-center justify-center gap-3 cursor-pointer">
              <span className="text-sm text-nowrap">
                {showContent ? "إخفاء" : "اقرأ المزيد"}
              </span>
              <Image
                src="/assets/news/ReadMoreArrow.svg"
                alt="Read More Arrow"
                width={15}
                height={15}
              />
            </div>
          )}
          <span
            className={`text-white text-sm w-full flex items-center justify-end ${
              card.content ? "" : "my-2"
            }`}>
            {card.start}
          </span>
        </div>
      </div>
    </div>
  );
};
