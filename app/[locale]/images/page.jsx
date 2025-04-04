import { Header } from "@/UI/Header";
import { useTranslations } from "next-intl";
import { Cards } from "@/components/images/Cards";

function ImagePage() {
  const t = useTranslations(`images`);
  const header = t.raw("header");
  return (
    <section className="bg-[#1d1f21] px-20 py-44 flex flex-col justify-center items-center gap-20">
      <Header header={header} />
      <Cards />
    </section>
  );
}

export default ImagePage;
