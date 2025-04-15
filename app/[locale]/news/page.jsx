import { LastNews } from "@/components/news/LastNews";
import { News } from "@/components/news/News";
import getData from "@/lib/api";
import { Header } from "@/UI/Header";

async function NewsPage() {
  const { latestNews, allNews } = await getData("news");
  const header_data = {
    title: "آخر الأخبار والتحديثات",
    description:
      "كن على اطلاع دائم بآخر الأخبار والتقارير والتحديثات حول مشاريع ومبادرات مرصد. نقدم لك أحدث المستجدات والتطورات والفعاليات المهمة المتعلقة بأعمالنا، بما في ذلك مشاركاتنا في المؤتمرات والمعارض الكبرى. تابع كل جديد في عالم البيانات والتحليلات مع مرصد.",
  };

  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-44 flex flex-col justify-center items-center gap-20">
      <Header header={header_data} />
      <LastNews data={latestNews} />
      <News data={allNews} />
    </section>
  );
}

export default NewsPage;
