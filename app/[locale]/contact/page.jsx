import ContactInfo from "@/components/contact/ContactInfo";
import { Form } from "@/components/contact/Form";
import { Header } from "@/UI/Header";

function ContactPage() {
  return (
    <section className="bg-[#1d1f21] px-24 py-32 flex flex-col justify-center items-center gap-0">
      <Header keyword="contact" />
      <Form />
      <ContactInfo />
    </section>
  );
}

export default ContactPage;
