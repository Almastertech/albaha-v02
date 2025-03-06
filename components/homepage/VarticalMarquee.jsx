"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const VerticalMarquee = ({ speed = 8, data }) => {
  const duplicatedItems = [...data, ...data];

  return (
    <div className="overflow-hidden w-full h-70 relative flex flex-col items-center">
      <motion.div
        className="flex flex-col "
        initial={{ y: 0 }}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}>
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className=" flex items-center justify-between w-full gap-30 my-3">
            {item.map((subitem, index) => (
              <div
                key={index}
                className=" flex items-center justify-between w-full">
                <Image src={subitem} alt="" width={200} height={100} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalMarquee;
