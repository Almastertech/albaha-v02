import { useTranslations } from "next-intl";

export function Header({ keyword }) {
  const t = useTranslations(keyword);
  const header = t.raw("header");
  return (
    <div className="w-[80%] mx-auto flex flex-col justify-center items-center gap-5 text-white text-center">
      <h2 className="text-[30px] font-bold"> {header.title}</h2>
      <p className="text-[18px]">{header.cta}</p>
      {/* <p className="text-[18px] -mt-5">{header.cta2}</p> */}
    </div>
  );
}
