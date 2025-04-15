"use client";
import Image from "next/image";
import GoToIcon from "../../public/assets/home/library/go_to.svg";

export const GallerySlide = ({ data, index, setActiveSlide, Isactive }) => {
  return (
    <div
      className="relative w-full cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => setActiveSlide(index)}>
      <div
        className={`overflow-hidden ${
          Isactive ? "w-[500px]" : "w-[200px]"
        } h-[250px] transition-all ease-in-out duration-[0.35s]`}>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className={`object-cover`}
        />
      </div>

      <div className="absolute flex flex-col justify-between left-0 top-0 w-full h-full p-6 bg-black/40">
        <span className="bg-black/50 w-fit text-[10px] px-4 py-1">
          {data.type}
        </span>
        <div className="flex flex-col gap-2">
          <h4
            className={`transition-all flex items-center justify-between gap-4 overflow-hidden duration-300 ${
              Isactive ? "text-xl font-bold" : ""
            }`}>
            <span>{data.title}</span>
            {/* {Isactive && <GoToIcon />} */}
          </h4>
          {Isactive && <span className="text-[10px]">{data.date}</span>}
        </div>
      </div>
    </div>
  );
};
