"use client";
import Image from "next/image";

export const CloudsLayer = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 flexify">
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src={`/assets/home/stats/clouds/cloud1.png`}
          alt="Cloud 1"
          width={1000}
          height={300}
          className="cloud absolute top-0 left-[-30%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud2.png`}
          alt="Cloud 2"
          width={800}
          height={250}
          className="cloud1 absolute top-1/2 left-[10%]"
        />
        {/* <Image
              src={`/assets/home/stats/clouds/cloud.png`}
              alt="Cloud 2"
              width={1300}
              height={250}
              className="cloud absolute top-20 left-[10%]"
            /> */}
        <Image
          src={`/assets/home/stats/clouds/cloud1.png`}
          alt="Cloud 1"
          width={1600}
          height={300}
          className="cloud2 absolute -top-20 left-[-30%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud2.png`}
          alt="Cloud 2"
          width={1200}
          height={250}
          className="cloud absolute top-20 left-[10%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud3.png`}
          alt="Cloud 3"
          width={1000}
          height={350}
          className="cloud2 absolute top-[80%] left-[-40%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud1.png`}
          alt="Cloud 4"
          width={1200}
          height={325}
          className="cloud absolute top-1/3 left-[120%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud3.png`}
          alt="Cloud 3"
          width={700}
          height={350}
          className="cloud absolute top-40 left-[100%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud4.png`}
          alt="Cloud 4"
          width={1350}
          height={325}
          className="cloud2 absolute top-1/2 left-[20%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud2.png`}
          alt="Cloud 4"
          width={1050}
          height={325}
          className="cloud1 absolute top-10 left-[20%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud1.png`}
          alt="Cloud 5"
          width={800}
          height={400}
          className="cloud2 absolute top-1/2 left-[-50%]"
        />
        <Image
          src={`/assets/home/stats/clouds/cloud2.png`}
          alt="Cloud 6"
          width={1000}
          height={275}
          className="cloud absolute -bottom-10 left-5"
        />
      </div>
    </div>
  );
};
