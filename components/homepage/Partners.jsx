import LineTitle from "@/UI/LineTitle";
import VerticalMarquee from "./VarticalMarquee";
import Button from "@/UI/Button";

function Partners({ data }) {
  return (
    <section
      id="partners"
      className="snap-start text-white bg-[url('/assets/home/partners/bg-section5.png')] bg-center bg-cover h-screen">
      <div className="w-full h-full bg-black/50 flexify-col justify-end p-res gap-20 py-10 pt-16">
        <div className="flexify-col gap-4">
          <LineTitle>شركاء النجاح</LineTitle>
          <p className="w-[80%] text-center mb-6">
            نفتخر بشراكتنا مع +200 شراكة استراتيجية محلية وعالمية، تُمهد لمستقبل
            مشرق
          </p>
          {/* <Button> مشاهدة المزيد</Button> */}
        </div>

        <VerticalMarquee data={data} />
      </div>
    </section>
  );
}

export default Partners;
