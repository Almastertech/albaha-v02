import Image from "next/image";

export const Hero = ({ data, states_data, isEnglish }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;

  const images = isEnglish
    ? [
        {
          image: "/assets/location/AreaEn/Al-Eaqiq.png",
          name: "Al Aqiq",
          state: "akik",
        },
        {
          image: "/assets/location/AreaEn/Al-Hujra_.png",
          name: "Al Hujrah",
          state: "hogra",
        },
        {
          image: "/assets/location/AreaEn/Al-Qury.png",
          name: "Al Qura",
          state: "kora",
        },
        {
          image: "/assets/location/AreaEn/Al-Makhawaa.png",
          name: "Al Makhwah",
          state: "makhwa",
        },
        {
          image: "/assets/location/AreaEn/Al- Mandaq_.png",
          name: "Al Mandaq",
          state: "mandak",
        },
        {
          image: "/assets/location/AreaEn/Beljurashi.png",
          name: "Baljurashi",
          state: "balghrshy",
        },
        {
          image: "/assets/location/AreaEn/Beni  Hassan_.png",
          name: "Bani Hasan",
          state: "banyhasan",
        },
        {
          image: "/assets/location/AreaEn/Ghamid  Al-Zanad.png",
          name: "Ghamid Al-Zinad",
          state: "ghamed",
        },
        {
          image: "/assets/location/AreaEn/Qalwa.png",
          name: "Qilwah",
          state: "kalwa",
        },
        {
          image: "/assets/location/AreaEn/Al-Baha_.png",
          name: "Al Baha",
          state: "baha",
        },
      ]
    : [
        {
          image: "/assets/location/Area/العقيق.png",
          name: "العقيق",
          state: "akik",
        },
        {
          image: "/assets/location/Area/الحجرة.png",
          name: "محافظة الحجرة",
          state: "hogra",
        },
        {
          image: "/assets/location/Area/القري.png",
          name: "محافظة القرى",
          state: "kora",
        },
        {
          image: "/assets/location/Area/المخواة.png",
          name: "محافظة المخواة",
          state: "makhwa",
        },
        {
          image: "/assets/location/Area/المندق.png",
          name: "محافظة المندق",
          state: "mandak",
        },
        {
          image: "/assets/location/Area/بلجراشي.png",
          name: "محافظة بلجرشي",
          state: "balghrshy",
        },
        {
          image: "/assets/location/Area/بنى  حسن.png",
          name: "محافظة بنى حسن",
          state: "banyhasan",
        },
        {
          image: "/assets/location/Area/غامد الزناد.png",
          name: "محافظة غامد الزناد",
          state: "ghamed",
        },
        {
          image: "/assets/location/Area/قلوة.png",
          name: "محافظة قلوة",
          state: "kalwa",
        },
        {
          image: "/assets/location/Area/الباحة.png",
          name: "الباحة (مقر الإمارة)",
          state: "baha",
        },
      ];

  return (
    <>
      <section className="relative bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/location/AlbahaFagr.jpg')] bg-center bg-cover h-[90vh] flex justify-start items-center">
        <div className="w-[50%] flex flex-col gap-6 ms-16 text-white">
          <h2 className="text-3xl">{data?.name}</h2>
          <p className="text-lg">{data?.description}</p>
          <div className="flex items-center flex-wrap gap-12 text-white">
            {data?.sectorIndicators.map((info) => (
              <div key={info.id} className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <p className="text-lg font-bold">{info.name}</p>
                  <div className="w-8 h-[2px] bg-white"></div>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-lg">{info.value}</p>
                  <p className="text-lg">{info.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {images.map((item) => (
          <div
            key={item.state}
            className="absolute -bottom-14 end-16 h-[600px] w-[500px] rounded-t-full rounded-b-4xl border-[20px] border-[#11504D] border-b-0">
            <Image
              src={`${item.image}`}
              alt={data?.name}
              fill
              className="w-full rounded-t-full rounded-b-4xl object-cover"
              style={
                item.state === data?.state ? { opacity: 1 } : { opacity: 0 }
              }
            />
          </div>
        ))}
      </section>
      <div className="w-full h-[100px] bg-[#1E2123]"></div>
    </>
  );
};
