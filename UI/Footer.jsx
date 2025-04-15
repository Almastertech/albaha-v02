"use client";

import { Link } from "@/i18n/navigation";
import DiamondIcon from "../public/assets/footer/diamond.svg";
import Image from "next/image";
import { useTranslations } from "use-intl";
import getData from "@/lib/api";
import Social from "./Social";
function Footer() {
  const t = useTranslations("footer");
  const sections = t.raw("sections");
  const bottom = t.raw("bottom");
  const copy = t.raw("copy");

  return (
    <footer className="bg-[#232629] text-white text-[13px]">
      <FooterTop sections={sections} />
      <FooterMid />
      <FooterBottom copy={copy} bottom={bottom} />
    </footer>
  );
}

const FooterTop = ({ sections }) => {
  return (
    <div className=" md:px-12 md:py-8 md:pb-4 border-t-4 border-[#DED3B3] flex items-center flex-wrap justify-between">
      {sections.map((section, index) =>
        !Array.isArray(section) ? (
          <div className="flex flex-wrap items-center" key={section.title}>
            <h3 className="text-xl font-bold mb-4">{section.title}</h3>
            <ul className="flex flex-col flex-wrap gap-2 h-[150px] w-[130%]">
              {section.links.map((link, index) => (
                <li key={index}>
                  <Link
                    target={link.target && link.target}
                    className="hover:text-[#DED3B3] transition-colors "
                    href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div key={index} className="flex-col flex gap-4">
            {section.map((item, index) => (
              <div key={index} className="">
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="flex flex-col gap-2">
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        target={link.target && link.target}
                        className="hover:text-[#DED3B3] transition-colors "
                        href={link.href}>
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

const FooterMid = () => {
  return (
    <div className="flex items-center justify-between w-full md:px-12 md:pb-4   ">
      <Image
        src={`/assets/footer/Vector.svg`}
        alt="Logo"
        width={200}
        height={100}
      />
      <Social />
    </div>
  );
};

const FooterBottom = ({ copy, bottom }) => {
  return (
    <div className="bg-[#1E2123] text-[#B2C1C7] text-[10px] md:px-12 md:py-2 flex items-center justify-between">
      <div className="flexify gap-3 ">
        {bottom.map((item, index) => (
          <Link className="flexify gap-3" href={item.href} key={item.title}>
            {index !== 0 && <DiamondIcon />}

            <span>{item.title}</span>
          </Link>
        ))}
      </div>
      <div className="">{copy}</div>
    </div>
  );
};
export default Footer;
