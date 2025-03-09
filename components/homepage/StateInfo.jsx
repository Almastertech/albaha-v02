"use client";
import CountUp from "react-countup";
import Image from "next/image";

export const StateInfo = ({ data, index }) => {
  return (
    <div className="flexify gap-2">
      <div>
        <Image src={data.icon} alt={data.info} width={30} height={30} />
      </div>
      <div className="flex flex-col items-start border-t-2 w-fit min-w-[120px] border-[#DED3B3] gap-0 p-3">
        <span className="text-white">{data.info}</span>
        <div className="flexify gap-2 text-[#DED3B3]">
          <span className="w-[60px] text-right">
            <CountUp end={data.number} />
          </span>
          <span className="font-bold">{data.unit}</span>
        </div>
      </div>
    </div>
  );
};
