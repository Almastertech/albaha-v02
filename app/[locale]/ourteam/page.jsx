import getData from "@/lib/api";
import Image from "next/image";

function OurTeamPage() {
  return (
    <section className="bg-[#011616] pt-36">
      <TeamsHeader />
      <TeamCards />
    </section>
  );
}

const TeamsHeader = () => {
  return (
    <>
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
    </>
  );
};

const TeamCards = async () => {
  const team_data = await getData("teams");

  return (
    <div className="flex flex-wrap justify-center gap-24 bg-[#232629] p-24 mt-10">
      {team_data.map((item, index) => (
        <div
          key={index}
          className=" text-white rounded-lg shadow-lg overflow-hidden w-72">
          {item.pic && (
            <div className="relative w-full h-[250px]">
              <Image
                src={item.pic}
                alt={item.title}
                fill
                className="absolute object-top"
              />
            </div>
          )}

          <div className="p-4 text-center text-white relative border-t border-[#232629] bg-[#232629] before:absolute before:-top-10 before:left-0 before:w-full before:h-14 before:bg-[#232629] before:-skew-y-6">
            <h3 className="text-xl font-bold pb-4 mb-8 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[30%] before:h-1 before:rounded-lg before:bg-[#11504D]">
              {item.title}
            </h3>
            <div
              className="text-lg"
              dangerouslySetInnerHTML={{ __html: item.content1 }}
            />
            {/* <p className="text-lg">{item.content1}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeamPage;
