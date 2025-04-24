"use client";
import { useState } from "react";
export const Mapping = ({
  setCurrentArea,
  showContent,
  setClickedArea,
  currentArea,
  data,
}) => {
  const [temp, setTemp] = useState(null);
  return (
    <div className="w-[550px]  h-full absolute left-[50%]  transform -translate-x-1/2 -top-0  text-sm font-obld">
      {showContent && (
        <div className="relative">
          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("hogra");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  hogra left-7 top-60 w-[100px] h-[100px] cursor-pointer ">
            {/* {data.find((item) => item.state === "hogra").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("mandak");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  mandak left-40 top-[210px] w-[50px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "mandak").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("kora");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  kora left-40 top-[100px] w-[100px] h-[150px] cursor-pointer">
            {/* {data.find((item) => item.state === "kora").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("akik");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  akik left-60 top-[130px] w-[150px] h-[150px] cursor-pointer">
            {/* {data.find((item) => item.state === "akik").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("banyhasan");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  banyhasan left-[190px] top-[270px] w-[50px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "banyhasan").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("kalwa");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  kalwa left-20 top-80 w-[100px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "kalwa").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("makhwa");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  makhwa left-44 top-100 w-[100px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "makhwa").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("ghamed");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  ghamed left-60 top-120 w-[100px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "ghamed").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("balghrshy");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  balghrshy left-80 top-90 w-[100px] h-[100px] cursor-pointer">
            {" "}
            {/* {data.find((item) => item.state === "balghrshy").name.arabic} */}
          </div>

          <div
            onClick={() => {
              setTemp(null);
              setClickedArea(currentArea);
              setTemp(currentArea);
            }}
            onMouseEnter={() => {
              setCurrentArea("baha");
              setClickedArea(null);
            }}
            onMouseLeave={() => {
              setCurrentArea(null);
              setClickedArea(temp);
            }}
            className="absolute flexify  baha left-64 top-80 w-[50px] h-[100px] cursor-pointer">
            {/* {data.find((item) => item.state === "baha").name.arabic} */}
          </div>
        </div>
      )}
    </div>
  );
};
