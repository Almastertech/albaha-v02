import { CardsContainer } from "@/components/reports/CardsContainer";
import { Header } from "@/UI/Header";
import { useTranslations } from "next-intl";

const ReportsPage = () => {
  const t = useTranslations(`reports`);
  const header = t.raw("header");
  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-44 flex flex-col justify-center items-center gap-20">
      <Header header={header} />
      <CardsContainer />
    </section>
  );
};

export default ReportsPage;
