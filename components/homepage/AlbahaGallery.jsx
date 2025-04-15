"use client";
import Button from "@/UI/Button";
import { useState } from "react";
import NextIcon from "../../public/assets/home/library/right_arrow.svg";
import PrevIcon from "../../public/assets/home/library/left_arrow.svg";
import { GallerySlide } from "./GallerySlide";
import { Link } from "@/i18n/navigation";

export const AlbahaGallery = () => {
  const gallery_slides_data = [
    {
      title: "الباحة في صور: جمال لا يُصدق بالتقاط العدسة",
      date: "15/2/2025",
      image: "/assets/home/library/photo-1.png",
      type: "صور",
    },
    {
      title: "الباحة في صور: جمال لا يُصدق بالتقاط العدسة",
      date: "15/2/2025",
      image: "/assets/home/library/photo-2.png",
      type: "فيديو",
    },
    {
      title: "الباحة في صور: جمال لا يُصدق بالتقاط العدسة",
      date: "15/2/2025",
      image: "/assets/home/library/photo-3.png",
      type: "صور",
    },
    {
      title: "الباحة في صور: جمال لا يُصدق بالتقاط العدسة",
      date: "15/2/2025",
      image: "/assets/home/library/photo-4.png",
      type: "فيديو",
    },
    {
      title: "الباحة في صور: جمال لا يُصدق بالتقاط العدسة",
      date: "15/2/2025",
      image: "/assets/home/library/photo.png",
      type: "صور",
    },
  ];

  return (
    <div className="w-full px-12 flex flex-col gap-2">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl font-bold mb-4">صور وفيدوهات المرصد</h3>
        <Button>
          {" "}
          <Link href={"/images"}>مشاهدة المزيد</Link>
        </Button>
      </div>
      <GalleryComp gallery={gallery_slides_data} />
    </div>
  );
};

export const GalleryComp = ({ gallery }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  function handleNext() {
    setActiveSlide((prev) => (prev < gallery.length - 1 ? prev + 1 : 0));
  }

  function handlePrevious() {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : gallery.length - 1));
  }
  return (
    <div className="relative">
      <div className="flexify gap-3 relative z-0">
        {gallery.map((item, index) => (
          <GallerySlide
            key={index}
            data={item}
            activeSlide={activeSlide}
            Isactive={activeSlide === index}
            setActiveSlide={setActiveSlide}
            index={index}
          />
        ))}
      </div>
      <button
        onClick={handleNext}
        className="absolute cursor-pointer right-0 top-0 z-[9]">
        <NextIcon />
      </button>
      <button
        onClick={handlePrevious}
        className="absolute cursor-pointer  left-0 top-0 z-[9]">
        <PrevIcon />
      </button>
    </div>
  );
};
