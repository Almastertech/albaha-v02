import { LastNews } from "@/components/news/LastNews";
import { News } from "@/components/news/News";
import { Header } from "@/UI/Header";
import { useTranslations } from "next-intl";

function NewsPage() {
  const t = useTranslations(`news`);
  const header = t.raw("header");
  return (
    <section className="bg-[#1d1f21] px-24 pb-24 pt-44 flex flex-col justify-center items-center gap-20">
      <Header header={header} />
      <LastNews />
      <News />
    </section>
  );
}

export default NewsPage;
