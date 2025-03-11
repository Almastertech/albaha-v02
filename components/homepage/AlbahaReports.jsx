"use client";

import Button from "@/UI/Button";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import "./library.css";
import Link from "next/link";

export const AlbahaReports = () => {
  const flickityOptions = {
    initialIndex: 4,
    wrapAround: true,
    autoPlay: 3000,
    freeScroll: false,
    pauseAutoPlayOnHover: true,
    pageDots: false,
    prevNextButtons: true,
    contain: false,
  };

  return (
    <div className="w-full px-12   flex flex-col gap-10">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl font-bold mb-4">تقارير المرصد </h3>
        <Button>مشاهدة المزيد</Button>
      </div>

      <Flickity
        className="carousel px-10 library border-none outline-0 "
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate>
        {[...Array(15)].map((_, index) => (
          <Link
            href={`#`}
            key={index}
            className="px-5 hover:text-blue-600 hover:underline transition-colors duration-300 cursor-pointer text-lg font-bold">
            {" "}
            تقارير اقتصادية عن <br />
            منطقة الباحة 2025
          </Link>
        ))}
      </Flickity>
    </div>
  );
};
