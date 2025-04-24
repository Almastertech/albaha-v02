import Image from "next/image";

export const TouristDestinations = ({ data }) => {
  return (
    <>
      <section className="bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/location/AlbahaFagr.jpg')] bg-center bg-cover h-[90vh] flex justify-center items-center gap-10 px-16">
        <div className="basis-[48%] flex flex-col justify-center items-start gap-10">
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-2xl">{data?.name.arabic}</h2>
            <p className="text-lg">{data?.description}</p>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <h2 className="text-2xl">{data?.heading2}</h2>
            <p className="text-lg">{data?.desc2}</p>
          </div>
          <div className="flex items-center flex-wrap gap-12 text-white">
            {data?.sectorIndicators.map((info) => (
              <div key={info.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">{info.name.arabic}</p>
                  <div className="w-8 h-[2px] bg-white"></div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-lg">{info.value}</p>
                  <p className="text-lg">{info.unit1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-[45%]">
          <div className="w-full relative">
            <Image
              src="/assets/location/Container.png"
              alt="Elzapher city"
              width={500}
              height={500}
              objectFit="center"
              className="w-full"
            />
            <Areas />
          </div>
        </div>
      </section>
      <div className="w-full h-[100px] bg-[#1E2123]"></div>
    </>
  );
};

const Areas = () => {
  const areaInfo = [
    {
      id: 1,
      img: "/assets/location/KhairaForest.jpg",
      alt: "Khaira Forest",
      areaName: "حديقة غابة الخيرة",
      position: "top-14 start-20",
    },
    {
      id: 2,
      img: "/assets/location/ShidaUp.jpg",
      alt: "Shida Up",
      areaName: "منتزه جبل شدا الأعلي",
      position: "top-44 start-32",
    },
    {
      id: 3,
      img: "/assets/location/ShidaDown.jpg",
      alt: "Shida Down",
      areaName: "منتزه جبل شدا الأسفل",
      position: "bottom-48 start-24",
    },
    {
      id: 4,
      img: "/assets/location/HossamPark.jpg",
      alt: "Hossam Park",
      areaName: "منتزه الأمير حسام",
      position: "bottom-20 start-52",
    },
    {
      id: 5,
      img: "/assets/location/Blgshry.jpg",
      alt: "Blgshry",
      areaName: "منتزه القمع في بلجرشي",
      position: "bottom-38 end-28",
    },
    {
      id: 6,
      img: "/assets/location/RaghdanForest.jpg",
      alt: "Raghdan Forest",
      areaName: "غابة رغدان",
      position: "bottom-66 end-48",
    },
    {
      id: 7,
      img: "/assets/location/Museum.jpg",
      alt: "Albaha Museum",
      areaName: "متحف الباحة",
      position: "top-32 end-20",
    },
    {
      id: 8,
      img: "/assets/location/EyeVillage.jpg",
      alt: "Eye Village",
      areaName: "قرية ذي عين الأثرية",
      position: "top-12 end-48",
    },
  ];
  return (
    <>
      {areaInfo.map((area) => (
        <div
          key={area.id}
          className={`absolute ${area.position} border-4 border-[#11504D] rounded-lg h-12 w-16  group `}>
          <Image
            src={area.img}
            alt={area.alt}
            fill
            className="object-cover rounded-lg"
            quality={50}
          />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 p-1 rounded-lg bg-[#11504D] transition-opacity opacity-0 group-hover:opacity-100 before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-[#11504D]">
            <p className="text-[12px] text-white text-nowrap">
              {area.areaName}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
