"use client";
import Image from "next/image";
import { useState } from "react";

export const VisionsAndGoalsBlock = ({ data }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="flexify-col text-center hover:bg-black/80 transition-colors gap-4 border-2 border-white/10 p-10 bg-white/[0.01] h-[350px] w-[80%]">
      {isActive ? (
        <Image
          src={data.gold_icon}
          alt={data.title}
          height={40}
          width={40}
          priority
        />
      ) : (
        <Image src={data.icon} alt={data.title} height={40} width={40} />
      )}

      <h3 className="text-2xl font-bold">{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
