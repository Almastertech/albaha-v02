import { PaginationButton } from "../reports/CardsContainer";
import { Cards } from "./Cards";

export function News({ data, isEnglish }) {
  return (
    <div className="w-full flex flex-col gap-20">
      <h3 className="text-center text-[27px] text-white">
        {isEnglish ? "News" : "الأخبار"}
      </h3>
      <Cards isEnglish={isEnglish} data={data} />
      {/* <PaginationButton /> */}
    </div>
  );
}
