import ContactInfo from "@/components/contact/ContactInfo";
import { Form } from "@/components/contact/Form";
import { Header } from "@/UI/Header";

function ContactPage() {
  const header_data = {
    title: "لنتواصل مع مرصد الباحة",
    description:
      "هل لديك أي استفسارات أو تساؤلات؟ \n\n  تواصل معنا - يسعدنا سماعك!",
  };
  return (
    <section className="bg-[#1d1f21] px-24 py-44 flex flex-col justify-center items-center gap-20">
      <Header header={header_data} />
      <Form />
      <ContactInfo />
    </section>
  );
}

export default ContactPage;
