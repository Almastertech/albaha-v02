import { PaginationButton } from "../reports/CardsContainer";
import { Cards } from "./Cards";

export function News({ data }) {
  return (
    <div className="w-full flex flex-col gap-20">
      <h3 className="text-center text-[27px] text-white">الأخبار</h3>
      <Cards data={data} />
      {/* <PaginationButton /> */}
    </div>
  );
}
