import Button from "@/UI/Button";
import HeroVideo from "./HomeVideo";
import Link from "next/link";
import { useLanguage } from "@/context/languageContext";
import HeroOverlay from "./HeroOverlay";

function HomeHero({ data }) {
  return (
    <section className="snap-start relative h-screen overflow-hidden w-full flexify z-10">
      <HeroVideo
        videoSrc="/assets/home/hero/MainBannerVideo.mp4"
        fallbackImage="/assets/home/hero/hero.webp"
      />
      <HeroOverlay data={data} />
    </section>
  );
}

export default HomeHero;
