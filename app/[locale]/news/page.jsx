import { LastNews } from "@/components/news/LastNews";
import { News } from "@/components/news/News";
import getData from "@/lib/api";
import { Header } from "@/UI/Header";
import { useTranslations } from "use-intl";

async function NewsPage() {
  const { latestNews, allNews } = await getData("news");

  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-32 flex flex-col justify-center items-center gap-16">
      <Header keyword="news" />
      <LastNews data={latestNews} />
      <News data={allNews} />
    </section>
  );
}

export default NewsPage;
