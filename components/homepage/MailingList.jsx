import MailingForm from "./MailingForm";

function MailingList({ data }) {
  return (
    <section className="snap-start text-white bg-center  bg-[url('/assets/home/mailing_list/bg-section7.png')]  h-fit ">
      <div className="flexify-col gap-4 p-res w-full bg-black/30 h-full">
        <h2 className="text-4xl font-bold">سجل في القائمة البريدية</h2>
        <p className="w-[50%] text-center">
          أنشئ حساب للاطلاع على آخر أخبار الباحة المشوقة والتعرّف أكثر على
          فعالياتنا
        </p>
        <MailingForm />
      </div>
    </section>
  );
}

export default MailingList;
