"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SeachIcon from "../public/assets/navbar/search.svg";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else setShowNav(false);
      }}
      className={`fixed transition-all duration-[0.35s] flex text-sm items-center justify-between text-white z-50 top-0 w-full ${
        showNav
          ? "bg-[#1E2123]/[0.85] backdrop-blur-2xl px-14 py-6"
          : "bg-transparent px-20 py-16"
      }`}>
      <Logo />
      <Lang_Search />
    </nav>
  );
}

const Logo = () => {
  return (
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
};

const Navigations = () => {
  return <div></div>;
};

const Lang_Search = () => {
  const router = useRouter();
  const path = usePathname();

  function handleLangSwitch() {
    if (path.startsWith("/ar")) {
      router.push("/en");
    } else router.push("/ar");

    return;
  }
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
