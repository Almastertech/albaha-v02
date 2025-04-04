import Image from "next/image";

export const Hero = ({ data }) => {
  return (
    <>
      <section className="relative bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/location/AlbahaLocation.jpeg')] bg-center bg-cover h-[90vh] flex justify-start items-center">
        <div className="w-[50%] flex flex-col gap-6 ms-16 text-white">
          <h2 className="text-2xl">{data.title}</h2>
          <p className="text-lg">{data.description}</p>
        </div>
        <div className="absolute -bottom-14 end-16 h-[600px] w-[440px] rounded-t-full rounded-b-4xl border-[20px] border-[#11504D] border-b-0">
          <Image
            src="/assets/location/Elzapher.jpg"
            alt="Elzapher city"
            layout="fill"
            objectFit="center"
            className="w-full rounded-t-full rounded-b-4xl"
          />
        </div>
      </section>
      <div className="w-full h-[100px] bg-[#1E2123]"></div>
    </>
  );
};
