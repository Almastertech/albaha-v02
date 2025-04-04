import ContactInfo from "@/components/contact/ContactInfo";
import { Form } from "@/components/contact/Form";
import { Header } from "@/UI/Header";
import { useTranslations } from "next-intl";

function ContactPage() {
  const t = useTranslations(`contact`);
  const header = t.raw("header");
  return (
    <section className="bg-[#1d1f21] px-24 py-44 flex flex-col justify-center items-center gap-20">
      <Header header={header} />
      <Form />
      <ContactInfo />
    </section>
  );
}

export default ContactPage;
