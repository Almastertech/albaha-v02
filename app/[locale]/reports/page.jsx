import { CardsContainer } from "@/components/reports/CardsContainer";
import { Header } from "@/UI/Header";

const ReportsPage = () => {
  const header_data = {
    title: "مكتبه المرصد",
    description:
      "توفر مكتبة المرصد مجموعة من التقارير والوثائق التي تسلط الضوء على أحدث المشاريع، الدراسات، والإنجازات، مما يمنح الزوار نظرة معمقة على مسيرة التطوير والابتكار.",
  };

  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-44 flex flex-col justify-center items-center gap-20">
      <Header header={header_data} />
      <CardsContainer />
    </section>
  );
};

export default ReportsPage;
