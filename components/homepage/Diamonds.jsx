import { useInView } from "react-intersection-observer";
import Diamond from "./Diamond";
import { useEffect } from "react";

const Diamonds = ({
  selectedDiamond,
  setSelectedDiamond,
  activateAnimation,
  setActivateAnimation,
  data,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      setActivateAnimation(true);
    }
  }, [inView]);

  return (
    <div
      className={`w-full h-full pb-20 transform transition-all duration-[0.7s] absolute flexify  ${
        activateAnimation
          ? selectedDiamond?.order <= 9
            ? "translate-y-15"
            : selectedDiamond?.order > 9
            ? "-translate-y-50"
            : "-translate-y-26"
          : "-translate-y-14"
      }  justify-center transition-all duration-300`}
      ref={ref}>
      <div
        className={`absolute transition-all w-full duration-300 left-0 transform flexify`}>
        {data.slice(0, 9).map((item, index) => (
          <Diamond
            setSelectedDiamond={setSelectedDiamond}
            key={index}
            data={item}
            activateAnimation={activateAnimation}
            selectedDiamond={selectedDiamond}
            isActive={item?.name.arabic === selectedDiamond?.name.arabic}
          />
        ))}
      </div>
      <div
        className={`absolute transition-all w-full  ml-0 mt-40 duration-300 left-0 transform flexify`}>
        {data.slice(9).map((item, index) => (
          <Diamond
            setSelectedDiamond={setSelectedDiamond}
            key={index}
            data={item}
            activateAnimation={activateAnimation}
            selectedDiamond={selectedDiamond}
            isActive={item?.name.arabic === selectedDiamond?.name.arabic}
          />
        ))}
      </div>
    </div>
  );
};

export default Diamonds;
