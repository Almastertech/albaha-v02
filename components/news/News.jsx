import { PaginationButton } from "../reports/CardsContainer";
import { Cards } from "./Cards";

export function News() {
  return (
    <div className="w-full flex flex-col gap-20">
      <h3 className="text-center text-[27px] text-white">الأخبار</h3>
      <Cards />
      <PaginationButton />
    </div>
  );
}
