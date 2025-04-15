import { Header } from "@/UI/Header";
import { Cards } from "@/components/images/Cards";

function ImagePage() {
  const header_data = {
    title: "مكتبه الصور و الفيديوهات",
    description:
      "استكشف مجموعة من الصور والفيديوهات التي تعرض أحدث مشاريعنا، ورؤيتنا للتطوير، وكواليس العمل في مرصد الباحة. استمتع بجولة بصرية تبرز الجودة والابتكار الذي يميز أعمالنا.",
  };

  return (
    <section className="bg-[#1d1f21] px-20 py-44 flex flex-col justify-center items-center gap-20">
      <Header header={header_data} />
      <Cards />
    </section>
  );
}

export default ImagePage;
