"use client";
import { useTranslations } from "use-intl";
import MailingForm from "./MailingForm";

function MailingList({ data }) {
  const t = useTranslations("homepage");
  const mailingTranslation = t.raw("mailing_list");
  return (
    <section className="snap-start text-white bg-center  bg-[url('/assets/home/mailing_list/bg-section7.png')]  h-fit ">
      <div className="flexify-col gap-4 p-res w-full bg-black/30 h-full">
        <h2 className="text-4xl font-bold">{mailingTranslation.title}</h2>
        <p className="w-[50%] text-center">{mailingTranslation.content}</p>
        <MailingForm placeholder={mailingTranslation.placeholder} />
      </div>
    </section>
  );
}

export default MailingList;
