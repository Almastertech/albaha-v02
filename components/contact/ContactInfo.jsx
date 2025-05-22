"use client";
import { useLanguage } from "@/context/languageContext";
import Image from "next/image";

function ContactInfo() {
  const { isEnglish } = useLanguage();
  const contact = [
    {
      id: 1,
      image: "/assets/contact/Email.svg",
      alt: "Email icon",
      title: isEnglish ? "Email" : "البريد الالكتروني",
      p: "Info@gmail.com",
    },
    {
      id: 2,
      image: "/assets/contact/Location.svg",
      alt: "Location icon",
      title: isEnglish ? "Location" : "الموقع",
      p: isEnglish ? "Al Baha" : "الباحه",
    },
    {
      id: 3,
      title: isEnglish ? "Follow Us" : "تابعونا على",
      socialMedia: [
        {
          id: 1,
          image: "/assets/contact/X.svg",
          alt: "X-twitter icon",
          w: 15,
          h: 15,
        },
        {
          id: 3,
          image: "/assets/contact/YouTube.svg",
          alt: "YouTube icon",
          w: 20,
          h: 20,
        },
        {
          id: 2,
          image: "/assets/contact/FaceBook.svg",
          alt: "Facebook icon",
          w: 10,
          h: 10,
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-16">
      <h3 className="text-[28px] text-white text-start">
        {isEnglish ? "Contact Information" : "بيانات الاتصال"}
      </h3>
      <ContactMethod contact={contact} isEnglish={isEnglish} />
      <div className="w-full rounded-2xl">
        <iframe
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59982.427172813565!2d41.418928124988156!3d20.01264003675519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1743551698621!5m2!1sen!2seg"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "16px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default ContactInfo;

const ContactMethod = ({ contact, isEnglish }) => {
  return (
    <div
      className={`w-[60%] flex justify-between items-center gap-20 ${
        isEnglish ? "flex-row" : "flex-row-reverse"
      }`}>
      {contact.map((method) => (
        <div
          key={method.id}
          className={`${method.id !== 3 ? "flex items-center gap-5" : ""}`}>
          {method.image && (
            <Image src={method.image} alt={method.alt} width={20} height={20} />
          )}
          <div
            className={`flex flex-col justify-center ${
              method.id !== 3 ? "gap-3" : "gap-5"
            } text-white`}>
            <p className="text-[20px]">{method.title}</p>
            {method.p ? (
              <p className="text-[14px]">{method.p}</p>
            ) : (
              <div className="flex items-center gap-5">
                {method.socialMedia.map((social) => (
                  <div
                    key={social.alt}
                    className="bg-[#06A69C] w-9 h-9 rounded-full flex items-center justify-center">
                    <Image
                      src={social.image}
                      alt={social.alt}
                      width={social.w}
                      height={social.h}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
