"use client";

import { Link } from "@/i18n/navigation";
import getData from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const Social = () => {
  const [fixedData, setFixedData] = useState([]);

  useEffect(() => {
    const getFixedData = async () => {
      const res = await getData("home");
      setFixedData(res.fixedData);
    };

    getFixedData();
  }, []);

  const social_data = [
    {
      image: "/assets/footer/facebook.svg",
      alt: "facebook",
      href: fixedData.find((item) => item?.id === "Facebook-Url")?.content1,
    },
    {
      image: "/assets/footer/x.svg",
      alt: "x",
      href: fixedData.find((item) => item?.id === "Twitter-Url")?.content1,
    },
    {
      image: "/assets/footer/youtube.svg",
      alt: "youtube",
      href: fixedData.find((item) => item?.id === "Youtube-Url")?.content1,
    },
  ];

  return (
    <div className="flexify self-end gap-3">
      {social_data.map((icon) => (
        <Link target="_blank" href={icon.href} key={icon.alt}>
          <Image src={icon.image} alt={icon.alt} width={30} height={30} />
        </Link>
      ))}
    </div>
  );
};

export default Social;
