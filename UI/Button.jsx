"use client";
import { usePathname } from "next/navigation";
import LeftArrowIcon from "../public/assets/footer/arrow-left.svg";

function Button({ children, className }) {
  const path = usePathname();
  return (
    <button
      className={`bg-[#F4F6F7] text-black text-[12px] font-semibold px-6 py-3 cursor-pointer w-fit flexify gap-3 ${className}`}>
      <div> {children}</div>
      <div className={`${path.includes("/en") && "rotate-180"}`}>
        <LeftArrowIcon />
      </div>
    </button>
  );
}

export default Button;
