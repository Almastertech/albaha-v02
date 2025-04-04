import HomeHero from "@/components/homepage/HomeHero";
import VisionsAndGoals from "@/components/homepage/VisionsAndGoals";
import MailingList from "@/components/homepage/MailingList";
import Partners from "@/components/homepage/Partners";
import Library from "@/components/homepage/Library";
import AlbahaStats from "@/components/homepage/AlbahaStats";
import Sectors from "@/components/homepage/Sectors";
import { useTranslations } from "next-intl";
export default async function HomePage() {
  const res = await fetch("http://34.166.121.10:3000/api/home", {
    headers: {
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
    },
  });
  const data = await res.json();
  // const t = useTranslations(`homepage`);

  // const hero_data = t.raw("hero");
  // const visions_data = t.raw("visions_and_goals");
  // const mailing_data = t.raw("mailing_list");
  // const partners_data = t.raw("partners");

  return (
    <>
      <HomeHero data={data?.fixedData} />
      {/* <VisionsAndGoals data={visions_data} /> */}
      <AlbahaStats data={data?.govs} />
      <Sectors data={data?.sectors} />
      {/* <Partners data={data?.partners} /> */}
      <Library />
      {/* <MailingList data={mailing_data} /> */}
    </>
  );
}
