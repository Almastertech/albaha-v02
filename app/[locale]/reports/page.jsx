import { CardsContainer } from "@/components/reports/CardsContainer";
import { Header } from "@/UI/Header";

const ReportsPage = () => {
  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-32 flex flex-col justify-center items-center gap-20">
      <Header keyword="reports" />
      <CardsContainer />
    </section>
  );
};

export default ReportsPage;
