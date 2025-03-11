import LineTitle from "@/UI/LineTitle";
import VerticalMarquee from "./VarticalMarquee";
import Button from "@/UI/Button";

function Partners({ data }) {
  return (
    <section className="snap-start text-white bg-[url('/assets/home/partners/bg-section5.png')] bg-center bg-cover h-screen">
      <div className="w-full h-full bg-black/50 flexify-col justify-end p-res gap-20 py-40">
        <div className="flexify-col gap-4">
          <LineTitle>{data.title}</LineTitle>
          <p className="w-[80%] text-center mb-6">{data.description}</p>
          <Button>{data.cta} </Button>
        </div>

        <VerticalMarquee data={data.partners_icons} />
      </div>
    </section>
  );
}

export default Partners;
