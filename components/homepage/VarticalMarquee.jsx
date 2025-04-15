"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FILES_PATH = process.env.NEXT_PUBLIC_FILES_PATH;

const VerticalMarquee = ({ speed = 30, data }) => {
  const duplicatedItems = [...data, ...data, ...data, ...data];
  function chunkIcons(data, chunkSize = 4) {
    const logos = data.map((item) => item.logo1).filter(Boolean); // only non-empty logos
    const chunks = [];

    for (let i = 0; i < logos.length; i += chunkSize) {
      chunks.push(logos.slice(i, i + chunkSize));
    }

    return chunks;
  }
  const modified_data = chunkIcons(duplicatedItems);

  return (
    <div className="h-[40vh] w-full overflow-hidden relative flex flex-col items-center">
      <motion.div
        className="flex flex-col "
        initial={{ y: 0 }}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}>
        {modified_data.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-between h-full w-full gap-30 my-3">
            {item.map((subitem, index) => (
              <div
                key={index}
                className=" flex items-center justify-between h-full w-full">
                <Image
                  src={`${FILES_PATH}${subitem}`}
                  alt=""
                  width={200}
                  height={100}
                  unoptimized
                />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalMarquee;
