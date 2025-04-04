import Image from "next/image";

function OurTeamPage() {
  return (
    <section className="bg-[#011616] pt-36">
      <div className="flex items-center px-24">
        <Image
          src="/assets/ourteam/Square.svg"
          alt="square icon"
          width={140}
          height={140}
        />
        <h3 className="text-2xl text-white -ms-10">تعرف على فريقنا المتميز</h3>
      </div>
      <div className="ms-10 px-24 mt-16">
        <p className="text-lg text-white mb-4">
          نحن نفخر بوجود نخبة من الخبراء والمتخصصين الذين يعملون معًا لتحقيق
        </p>
        <p className="text-lg text-white">
          التميز والابتكار. اكتشف المزيد عن فريقنا ودوره في تحقيق رؤيتنا!
        </p>
      </div>
      <TeamCards />
    </section>
  );
}

export default OurTeamPage;

const TeamCards = () => {
  const images = [
    {
      id: 1,
      img: "/assets/ourteam/TeamMember.png",
      alt: "Khalid Fawzi",
      name: "د. خالد فوزي الحمودي",
      desc: "نائب الرئيس لقطاع التخطيط ومدير عام التخطيط الحضري",
    },
    {
      id: 2,
      img: "/assets/ourteam/TeamMember.png",
      alt: "Turkey Khalid",
      name: "م. تركي خالد البوق",
      desc: "رئيس قسم المرصد الحضري ونظم المعلومات الجغرافية",
    },
    {
      id: 3,
      img: "/assets/ourteam/TeamMember2.jpg",
      alt: "Shahd Elkady",
      name: "أ. شهد القاضي",
      desc: "مساعد اخصائي مراصد حضرية",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-24 bg-[#232629] p-24 mt-10">
      {images.map((image, index) => (
        <div
          key={index}
          className=" text-white rounded-lg shadow-lg overflow-hidden w-72">
          <div className="relative w-full h-[250px]">
            <Image
              src={image.img}
              alt={image.alt}
              layout="fill"
              objectFit="top"
              className="absolute"
            />
          </div>
          <div className="p-4 text-center text-white relative border-t border-[#232629] bg-[#232629] before:absolute before:-top-10 before:left-0 before:w-full before:h-14 before:bg-[#232629] before:-skew-y-6">
            <h3 className="text-xl font-bold pb-4 mb-8 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[30%] before:h-1 before:rounded-lg before:bg-[#11504D]">
              {image.name}
            </h3>
            <p className="text-lg">{image.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
