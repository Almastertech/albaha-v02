"use client";
import LineTitle from "@/UI/LineTitle";
import VerticalMarquee from "./VarticalMarquee";
import Button from "@/UI/Button";
import { useTranslations } from "use-intl";

function Partners({ data }) {
  const t = useTranslations("homepage");
  const partnersTranslation = t.raw("partners");

  return (
    <section
      id="partners"
      className="snap-start text-white bg-[url('/assets/home/partners/bg-section5.png')] bg-center bg-cover h-screen">
      <div className="w-full h-full bg-black/50 flexify-col justify-end p-res gap-20 py-10 pt-16">
        <div className="flexify-col gap-4">
          <LineTitle>{partnersTranslation.title}</LineTitle>
          <p className="w-[80%] text-center mb-6">
            {partnersTranslation.description}
          </p>
          {/* <Button> مشاهدة المزيد</Button> */}
        </div>

        <VerticalMarquee data={data} />
      </div>
    </section>
  );
}

export default Partners;
