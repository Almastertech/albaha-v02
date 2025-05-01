import { motion, AnimatePresence } from "framer-motion";

const Diamond = ({
  data,
  activateAnimation,
  selectedDiamond,
  setSelectedDiamond,
  isActive,
}) => (
  <motion.div
    key={selectedDiamond ? selectedDiamond.name.arabic : "default"}
    onClick={() => {
      setSelectedDiamond(data);
    }}
    initial={!selectedDiamond ? { y: data.order <= 9 ? -100 : 100 } : false}
    animate={activateAnimation && { y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className={`relative cursor-pointer xl:w-[120px] xl:h-[120px] lg:w-[80px] lg:h-[80px] md:w-[70px] md:h-[70px] mx-2 2xl:mx-6 transform transition-all duration-[0.5s] ease-out ${
      data.order > 9 ? "-my-12 hover:translate-y-3" : "hover:-translate-y-3"
    }`}>
    <div
      className={`absolute transition-all duration-300 inset-0 rotate-45 border-4 border-[#DED3B3] scale-75 ${
        selectedDiamond ? (isActive ? "bg-black" : "opacity-30") : "opacity-100"
      }`}></div>

    <div
      className={`absolute inset-0 ${
        selectedDiamond
          ? isActive
            ? "opacity-100"
            : "opacity-50"
          : "opacity-100"
      } flex items-center justify-center  text-center `}>
      <p className="text-white text-xs lg:text-sm p-4">{data.name.arabic}</p>
    </div>
  </motion.div>
);

export default Diamond;
