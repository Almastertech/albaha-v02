"use client";

const { StateInfo } = require("./StateInfo");
import { motion, AnimatePresence } from "framer-motion";
import { default_states_data } from "./albaha_states_data";

const StatsContent = ({ currentAreaInfo, showContent }) => {
  return currentAreaInfo ? (
    <motion.div
      className="flex items-center justify-between w-full h-fit mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
      <div className="w-full flex flex-col items-start gap-6 justify-center">
        {currentAreaInfo.sectorIndicators
          .slice(0, Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo key={index} index={index} data={item} />
          ))}
      </div>
      <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
        {currentAreaInfo.sectorIndicators
          .slice(Math.ceil(currentAreaInfo.sectorIndicators.length / 2))
          .map((item, index) => (
            <StateInfo index={index} key={index} data={item} />
          ))}
      </div>
    </motion.div>
  ) : (
    showContent && (
      <motion.div
        className="flex items-center justify-between w-full h-fit mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="w-full flex flex-col items-start gap-6 justify-center">
          {default_states_data
            .slice(0, Math.ceil(default_states_data.length / 2))
            .map((item, index) => (
              <StateInfo index={index} key={index} data={item} />
            ))}
        </div>
        <div className="w-[60%] mr-120 flex flex-col items-start gap-6 justify-start">
          {default_states_data
            .slice(Math.ceil(default_states_data.length / 2))
            .map((item, index) => (
              <StateInfo index={index} key={index} data={item} />
            ))}
        </div>
      </motion.div>
    )
  );
};

export default StatsContent;
