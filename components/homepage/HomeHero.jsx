import Button from "@/UI/Button";
import HeroVideo from "./HomeVideo";
import Link from "next/link";

function HomeHero({ data }) {
  return (
    <section className="snap-start relative h-screen overflow-hidden w-full flexify z-10">
      <HeroVideo
        videoSrc="/assets/home/hero/MainBannerVideo.mp4"
        fallbackImage="/assets/home/hero/hero.webp"
      />
      <Overlay data={data} />
    </section>
  );
}

const Overlay = ({ data }) => {
  return (
    <div className="p-res w-full h-full bg-black/50 absolute left-0 top-0 z-40">
      <div className="flex flex-col justify-end gap-10 h-[80%]">
        <h1 className="text-white font-bold text-5xl">
          {data.find((item) => item.id === "Video-Title")?.content1}
        </h1>
        <Link href={`http://34.166.121.10:7009/`} target="blank">
          <Button>منصة المعلومات الحضرية</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
