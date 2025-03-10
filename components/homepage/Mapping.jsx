"use client";
import { useState } from "react";

export const Mapping = ({
  setCurrentArea,
  showContent,
  setClickedArea,
  currentArea,
}) => {
  const [temp, setTemp] = useState(null);
  return (
    <div className="w-[550px] h-full absolute left-1/2  transform -translate-x-1/2 -top-6 ">
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
            className="absolute hogra left-7 top-60 w-[100px] h-[100px] cursor-pointer"></div>

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
            className="absolute mandak left-40 top-[210px] w-[50px] h-[100px] cursor-pointer"></div>

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
            className="absolute kora left-40 top-[100px] w-[100px] h-[150px] cursor-pointer"></div>

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
            className="absolute akik left-60 top-[130px] w-[150px] h-[150px] cursor-pointer"></div>

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
            className="absolute banyhasan left-50 top-[250px] w-[50px] h-[100px] cursor-pointer"></div>

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
            className="absolute kalwa left-20 top-80 w-[100px] h-[100px] cursor-pointer"></div>

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
            className="absolute makhwa left-44 top-100 w-[100px] h-[100px] cursor-pointer"></div>

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
            className="absolute ghamed left-60 top-120 w-[100px] h-[100px] cursor-pointer"></div>

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
            className="absolute balghrshy left-80 top-90 w-[100px] h-[100px] cursor-pointer"></div>

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
            className="absolute baha left-64 top-80 w-[50px] h-[100px] cursor-pointer"></div>
        </div>
      )}
    </div>
  );
};
