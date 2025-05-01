import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CloudsLayer } from "./CloudsLayer";
import { usePathname } from "next/navigation";

const StatsImages = ({ currentArea, clickedArea }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;
  const path = usePathname();
  const isEnglish = path.includes("en");

  const images = isEnglish
    ? [
        {
          image: "/assets/location/AreaEn/Al-Eaqiq.png",
          name: "Al Aqiq",
          state: "akik",
        },
        {
          image: "/assets/location/AreaEn/Al-Hujra_.png",
          name: "Al Hujrah",
          state: "hogra",
        },
        {
          image: "/assets/location/AreaEn/Al-Qury.png",
          name: "Al Qura",
          state: "kora",
        },
        {
          image: "/assets/location/AreaEn/Al-Makhawaa.png",
          name: "Al Makhwah",
          state: "makhwa",
        },
        {
          image: "/assets/location/AreaEn/Al- Mandaq_.png",
          name: "Al Mandaq",
          state: "mandak",
        },
        {
          image: "/assets/location/AreaEn/Beljurashi.png",
          name: "Baljurashi",
          state: "balghrshy",
        },
        {
          image: "/assets/location/AreaEn/Beni  Hassan_.png",
          name: "Bani Hasan",
          state: "banyhasan",
        },
        {
          image: "/assets/location/AreaEn/Ghamid  Al-Zanad.png",
          name: "Ghamid Al-Zinad",
          state: "ghamed",
        },
        {
          image: "/assets/location/AreaEn/Qalwa.png",
          name: "Qilwah",
          state: "kalwa",
        },
        {
          image: "/assets/location/AreaEn/Al-Baha_.png",
          name: "Al Baha",
          state: "baha",
        },
      ]
    : [
        {
          image: "/assets/location/Area/العقيق.png",
          name: "العقيق",
          state: "akik",
        },
        {
          image: "/assets/location/Area/الحجرة.png",
          name: "محافظة الحجرة",
          state: "hogra",
        },
        {
          image: "/assets/location/Area/القري.png",
          name: "محافظة القرى",
          state: "kora",
        },
        {
          image: "/assets/location/Area/المخواة.png",
          name: "محافظة المخواة",
          state: "makhwa",
        },
        {
          image: "/assets/location/Area/المندق.png",
          name: "محافظة المندق",
          state: "mandak",
        },
        {
          image: "/assets/location/Area/بلجراشي.png",
          name: "محافظة بلجرشي",
          state: "balghrshy",
        },
        {
          image: "/assets/location/Area/بنى  حسن.png",
          name: "محافظة بنى حسن",
          state: "banyhasan",
        },
        {
          image: "/assets/location/Area/غامد الزناد.png",
          name: "محافظة غامد الزناد",
          state: "ghamed",
        },
        {
          image: "/assets/location/Area/قلوة.png",
          name: "محافظة قلوة",
          state: "kalwa",
        },
        {
          image: "/assets/location/Area/الباحة.png",
          name: "الباحة (مقر الإمارة)",
          state: "baha",
        },
      ];

  return (
    <AnimatePresence>
      <motion.div className="absolute inset-0 flex justify-center items-center bg-[#333]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentArea ? 0 : 1,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          exit={{ opacity: 1, transition: { duration: 0.5 } }}
          className="absolute inset-0">
          <Image
            src={`/assets/home/stats/albaha_states/background.png`}
            alt="background"
            fill
            priority
            className="object-cover object-center"
            quality={100}
            unoptimized
          />
        </motion.div>

        {images.map((state) => (
          <motion.div
            key={state.name}
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                state.state === currentArea || state.state === clickedArea
                  ? 1
                  : 0,
              transition: { duration: 0.5 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            className="absolute inset-0">
            <Image
              src={state.image}
              alt={state.name}
              fill
              priority
              className="object-cover object-center"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}

        <CloudsLayer />
      </motion.div>
    </AnimatePresence>
  );
};

export default StatsImages;
