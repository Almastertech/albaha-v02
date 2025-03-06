"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SeachIcon from "../public/assets/navbar/search.svg";
import DownArrowIcon from "../public/assets/navbar/arrow-down-01.svg";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const nav_data = [
  {
    title: "الرؤية والأهداف",
    subnavs: [
      { title: "المكتب الإستراتيجي لتطوير منطقة الباحة", href: "#" },
      { title: "المرصد الحضري لمنطقة الباحة", href: "#" },
      { title: "فريق العمل", href: "#" },
      { title: "طلب البيانات", href: "#" },
      { title: "إدارة المحتوى", href: "#" },
      { title: "شركائنا", href: "#" },
    ],
  },
  {
    title: "الجغرافيا والمكان",
    subnavs: [
      { title: "منطقة الباحة", href: "#" },
      { title: "محافظة العقيق", href: "#" },
      { title: "محافظة الحجره", href: "#" },
      { title: "محافظة المخواة", href: "#" },
      { title: "محافظة المندق", href: "#" },
      { title: "محافظة بالجرشي", href: "#" },
      { title: "محافظة بني حسن", href: "#" },
      { title: "محافظة غامد الزناد", href: "#" },
      { title: "ملفات التحميل", href: "#" },
      { title: "محافظة القرى", href: "#" },
    ],
  },
  {
    title: "المؤشرات الحضرية لمنطقة الباحة",
    subnavs: [{ title: "المؤشرات الحضرية لمنطقة الباحة", href: "#" }],
  },
  {
    title: "أخبار المرصد",
    subnavs: [
      { title: "الأخبار", href: "#" },
      { title: "الصور والفيديوهات", href: "#" },
      { title: "مكتبة المرصد", href: "#" },
    ],
  },
];

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [curNav, setCurNav] = useState([]);
  const [activeIndex, setActiveIndex] = useState(10);

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
    setCurNav(nav_data[index].subnavs);
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
          activeIndex={activeIndex}
          handleNavItemClick={handleNavItemClick}
        />
        <Lang_Search />
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
    />
  </Link>
);

const Navigations = ({ activeIndex, handleNavItemClick }) => (
  <ul className="flexify gap-10">
    {nav_data.map((item, index) => (
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
    <ul className={` h-[300px] flex flex-col flex-wrap gap-2 p-10 w-[40%] `}>
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

const Lang_Search = () => {
  const router = useRouter();
  const path = usePathname();

  const handleLangSwitch = () => {
    router.push(path.startsWith("/ar") ? "/en" : "/ar");
  };

  return (
    <div className="flexify gap-10">
      <SeachIcon className="scale-80" />
      <button className="cursor-pointer" onClick={handleLangSwitch}>
        الانجليزية
      </button>
    </div>
  );
};

export default Navbar;
