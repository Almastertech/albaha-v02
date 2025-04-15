import Image from "next/image";

export const Hero = ({ data, states_data }) => {
  const files_path = process.env.NEXT_PUBLIC_FILES_PATH;
  return (
    <>
      <section className="relative bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/assets/location/AlbahaLocation.jpeg')] bg-center bg-cover h-[90vh] flex justify-start items-center">
        <div className="w-[50%] flex flex-col gap-6 ms-16 text-white">
          <h2 className="text-3xl">{data.name.arabic}</h2>
          <p className="text-lg">{data?.description}</p>
        </div>
        {states_data.map((item) => (
          <div
            key={item.id}
            className="absolute -bottom-14 end-16 h-[600px] w-[500px] rounded-t-full rounded-b-4xl border-[20px] border-[#11504D] border-b-0">
            <Image
              src={`${files_path}${item.url}`}
              alt={data.name.english}
              fill
              className="w-full rounded-t-full rounded-b-4xl object-cover"
              style={
                item.state === data.state ? { opacity: 1 } : { opacity: 0 }
              }
            />
          </div>
        ))}
      </section>
      <div className="w-full h-[100px] bg-[#1E2123]"></div>
    </>
  );
};
