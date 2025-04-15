import { GalleryComp } from "../homepage/AlbahaGallery";
import { PaginationButton } from "../reports/CardsContainer";

export function Cards() {
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
    <div className="bg-[#232629] py-10 rounded-2xl w-full flex flex-col gap-14 shadow-2xl text-white ">
      <h2 className="text-[30px] text-center font-bold">الصور و الفيديوهات</h2>
      <GalleryComp gallery={gallery_slides_data} />
      {/* <PaginationButton /> */}
    </div>
  );
}
