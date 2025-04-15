"use client";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";

export const AlbahaNews = ({ data }) => {
  let dup_news = [];
  for (let i = 0; i <= 10; i++) {
    dup_news = [...dup_news, ...data];
  }

  return (
    <section className="w-full px-12  text-white p-6 border-b-2 border-[#DED3B3] overflow-hidden">
      <h3 className="text-2xl font-bold mb-2">أخبار المرصد</h3>
      <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{
            translateX: "-60%",
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flexify w-[180%]  gap-5">
          {dup_news.map((item, index) => (
            <Link
              href={`/news`}
              className="w-max transition-colors hover:text-blue-600 curosr-pointer hover:underline duration-300 whitespace-nowrap"
              key={index}>
              {item.name}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
