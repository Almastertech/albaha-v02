import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SectoresBackground = ({ selectedDiamond, activateAnimation, data }) => {
  const FILES_PATH = process.env.NEXT_PUBLIC_FILES_PATH;
  return (
    <AnimatePresence>
      <motion.div className="absolute inset-0 flex justify-center items-center bg-[#333]">
        {!selectedDiamond && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-0">
            <Image
              src={`/assets/home/sectors/darkbackground.png`}
              alt="background"
              fill
              priority
              quality={100}
              className="object-cover"
              unoptimized
            />
          </motion.div>
        )}

        {data.map((diamond) => (
          <motion.div
            key={diamond.name.arabic}
            initial={{ opacity: 0 }}
            animate={{
              opacity:
                diamond.name.arabic === selectedDiamond?.name.arabic ? 1 : 0,
              transition: { duration: 0.5 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
            className="absolute inset-0 z-10">
            <Image
              src={`${FILES_PATH}${diamond.picUrl}`}
              alt={diamond.name.arabic}
              fill
              priority
              className="object-cover"
              quality={100}
              unoptimized
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SectoresBackground;
