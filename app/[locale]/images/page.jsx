import { Cards } from "@/components/images/Cards";
import { Header } from "@/UI/Header";

function ImagePage() {
  return (
    <section className="bg-[#1d1f21] px-20 py-32 flex flex-col justify-center items-center gap-20">
      <Header keyword="images" />
      <Cards />
    </section>
  );
}

export default ImagePage;
