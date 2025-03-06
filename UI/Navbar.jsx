"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SeachIcon from "../public/assets/navbar/search.svg";
import DownArrowIcon from "../public/assets/navbar/arrow-down-01.svg";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "use-intl";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [curNav, setCurNav] = useState([]);
  const [activeIndex, setActiveIndex] = useState(10);

  const t = useTranslations("homepage");
  const data = t.raw("nav_bar");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
        setShowContainer(false);
        setActiveIndex(10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed transition-all duration-[0.35s] text-sm text-white z-50 top-0 w-full ${
        showNav
          ? "bg-[#1E2123]/[0.85] backdrop-blur-2xl px-14 py-6"
          : "bg-transparent px-20 py-16"
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

      <NavContainer showContainer={showContainer} curNav={curNav} />
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
  <ul className="flexify gap-10">
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
    className="flexify gap-2 hover:opacity-80 transition-opacity cursor-pointer select-none">
    <span>{data.title}</span>

    <DownArrowIcon
      className={`scale-80 transition-transform ${
        isActive ? "rotate-180" : ""
      }`}
    />
  </li>
);

const NavContainer = ({ showContainer, curNav }) => (
  <div
    className={`absolute transition-all duration-300 overflow-hidden bg-[#1E2123] left-0  w-full top-[100%] -z-10  ${
      showContainer ? "opacity-100 h-[300px] " : "h-0 opacity-0 "
    } `}>
    <ul className={` h-[300px] flex flex-col flex-wrap gap-2 p-10 w-[60%] `}>
      {curNav.map((item, index) => (
        <li
          key={index}
          className={`hover:text-[#DED3B3] transition-all cursor-pointer text-lg w-fit `}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Lang_Search = ({ data }) => {
  const router = useRouter();
  const path = usePathname();

  const handleLangSwitch = () => {
    router.push(path.startsWith("/ar") ? "/en" : "/ar");
  };

  return (
    <div className="flexify gap-10">
      <SeachIcon className="scale-80" />
      <button className="cursor-pointer" onClick={handleLangSwitch}>
        {data.lang_switch}
      </button>
    </div>
  );
};

export default Navbar;
