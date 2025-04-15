import HomeHero from "@/components/homepage/HomeHero";
import VisionsAndGoals from "@/components/homepage/VisionsAndGoals";
import MailingList from "@/components/homepage/MailingList";
import Partners from "@/components/homepage/Partners";
import Library from "@/components/homepage/Library";
import AlbahaStats from "@/components/homepage/AlbahaStats";
import Sectors from "@/components/homepage/Sectors";

import getData from "@/lib/api";

export default async function HomePage() {
  const { fixedData, govs, sectors, partners, mediaFiles, news } =
    await getData("home");

  return (
    <>
      <HomeHero data={fixedData} />
      {/* <VisionsAndGoals data={visions_data} /> */}
      <AlbahaStats data={govs} />
      <Sectors data={sectors} />
      <Partners data={partners} />
      <Library data={news} media={mediaFiles} />
      <MailingList />
    </>
  );
}
