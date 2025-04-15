"use client";

import Button from "@/UI/Button";

import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

import "./library.css";
import { Link } from "@/i18n/navigation";

const FILES_PATH = process.env.NEXT_PUBLIC_FILES_PATH;

export const AlbahaReports = ({ data }) => {
  const flickityOptions = {
    initialIndex: 4,
    wrapAround: true,
    autoPlay: 2000,
    freeScroll: false,
    pauseAutoPlayOnHover: true,
    pageDots: false,
    prevNextButtons: true,
    contain: false,
  };

  let dup_reports = [];
  for (let i = 0; i <= 2; i++) {
    dup_reports = [...dup_reports, ...data];
  }

  return (
    <div className="w-full px-12   flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl font-bold ">تقارير المرصد </h3>
        <Button>
          <Link href={"/reports"}>مشاهدة المزيد</Link>
        </Button>
      </div>

      <Flickity
        className="carousel px-10 library border-none outline-0 "
        elementType="div"
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate>
        {dup_reports.map((item, index) => (
          <a
            rel="noopener noreferrer"
            href={`${FILES_PATH}${item.file}`}
            key={index}
            target="_blank"
            className="px-5 grow hover:text-blue-600 hover:underline transition-colors duration-300 cursor-pointer text-lg font-bold">
            {item.name1}
          </a>
        ))}
      </Flickity>
    </div>
  );
};
