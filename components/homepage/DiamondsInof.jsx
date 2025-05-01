import Button from "@/UI/Button";
import { motion, AnimatePresence } from "framer-motion";
import { StateInfo } from "./StateInfo";

const DiamondInfo = ({ activateAnimation, selectedDiamond }) => {
  if (selectedDiamond)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`w-full h-fit p-20 py-0 flex flex-col gap-0  transform transition-all duration-[0.7s] absolute ${
          activateAnimation
            ? selectedDiamond?.order <= 9
              ? "translate-y-20"
              : selectedDiamond?.order > 9
              ? "translate-y-80"
              : "hidden"
            : "hidden"
        }  transition-all duration-300`}>
        <div className="flexify self-start gap-4 mb-4">
          <span className="text-[#DED3B3] font-bold">
            {selectedDiamond.name.arabic}
          </span>
          <p className="">{selectedDiamond.description1}</p>
        </div>
        {selectedDiamond.sectorIndicators.length > 0 && (
          <div className="flex items-start h-fit  flex-wrap">
            {selectedDiamond?.sectorIndicators.map((item, index) => (
              <StateInfo key={index} data={item} />
            ))}
          </div>
        )}

        <Button className={`mt-3`}>مشاهدة المزيد</Button>
      </motion.div>
    );
  else return;
};

export default DiamondInfo;
