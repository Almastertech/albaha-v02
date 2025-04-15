"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SeachIcon from "../public/assets/navbar/search.svg";
import DownArrowIcon from "../public/assets/navbar/arrow-down-01.svg";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "use-intl";
import { Link } from "@/i18n/navigation";

function Navbar({ showNav, setShowNav }) {
  const [showContainer, setShowContainer] = useState(false);
  const [curNav, setCurNav] = useState([]);
  const [activeIndex, setActiveIndex] = useState(10);

  const t = useTranslations("nav");
  const data = t.raw("nav_bar");

  const handleNavItemClick = (index) => {
    setCurNav(data.nav_data[index].subnavs);
    setActiveIndex(index);
    setShowContainer(true);
  };

  return (
    <nav
      onMouseOver={() => setShowNav(true)}
      onMouseLeave={() => {
        setShowNav(window.scrollY > 100);
        setShowContainer(false);
        setActiveIndex(10);
        setCurNav([]);
      }}
      className={`fixed transition-all duration-[0.35s]   text-sm px-14  text-white z-50 top-0 w-full ${
        showNav ? "bg-[#1E2123]/[0.85] backdrop-blur-2xl" : "bg-transparent "
      }`}>
      <div className="flex items-center justify-between relative z-50">
        <Logo />
        <Navigations
          data={data}
          activeIndex={activeIndex}
          handleNavItemClick={handleNavItemClick}
        />
        <Lang_Search data={data} />
      </div>

      <NavContainer
        setShowContainer={setShowContainer}
        showContainer={showContainer}
        curNav={curNav}
      />
    </nav>
  );
}

const Logo = () => (
  <Link href={`/`}>
    <Image
      src={`/assets/navbar/Logo.svg`}
      alt="Logo"
      height={100}
      width={200}
      quality={100}
      priority
    />
  </Link>
);

const Navigations = ({ activeIndex, handleNavItemClick, data }) => (
  <ul className="flexify ">
    {data.nav_data.map((item, index) => (
      <NavItem
        key={item.title}
        data={item}
        isActive={activeIndex === index}
        onClick={() => handleNavItemClick(index)}
      />
    ))}
  </ul>
);

const NavItem = ({ data, isActive, onClick }) => (
  <li
    onClick={onClick}
    className={`flexify gap-0 hover:opacity-80 border-b-[3px] border-transparent transition-colors cursor-pointer select-none py-10 px-4  ${
      isActive && "border-white"
    }`}>
    <span>{data.title}</span>

    <DownArrowIcon
      className={`scale-80 transition-transform ${
        isActive ? "rotate-180 " : ""
      }`}
    />
  </li>
);

const NavContainer = ({ showContainer, curNav, setShowContainer }) => {
  const path = usePathname();
  const isEnglish = path.includes("/en");
  return (
    <div
      className={`absolute transition-all duration-300 overflow-hidden bg-[#1E2123] left-0  w-full top-[100%] -z-10  ${
        showContainer ? "opacity-100 h-[300px] " : "h-0 opacity-0 "
      } `}>
      <ul className={` h-[300px] flex flex-col flex-wrap  p-10 px-14 w-[70%] `}>
        {curNav.map((item, index) => (
          <li
            key={index}
            className={`hover:text-[#DED3B3] transition-all cursor-pointer text-lg w-[50%] border-white/5 ${
              isEnglish ? "border-r-2" : "border-l-2"
            }`}>
            <Link
              className=" py-1 px-10"
              onClick={() => setShowContainer(false)}
              target={item.target && item.target}
              href={item.href}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Lang_Search = ({ data }) => {
  const path = usePathname();

  return (
    <div className="flexify gap-10">
      {/* <SeachIcon className="scale-80" /> */}
      <div
        // href={path.startsWith("/ar") ? "/en" : "/ar"}
        className="cursor-pointer">
        {data.lang_switch}
      </div>
    </div>
  );
};

export default Navbar;
