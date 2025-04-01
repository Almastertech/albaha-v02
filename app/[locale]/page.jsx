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
      apiKey:
        "Marsad_Albaha_Z02QjoSF1SlvGgBehTcWb38DEr0skhwq3xfcQGqvHkYBOhTY8iyIWqpBYAGYGjzVECp6V314xmC3BybT6DSAF2BjeTe0vQEWZ3ufdFrFpA4xeZKaPJ",
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
      {/* <HomeHero data={hero_data} /> */}
      {/* <VisionsAndGoals data={visions_data} /> */}
      <AlbahaStats />
      <Sectors data={data} />
      {/* <Partners data={partners_data} /> */}
      <Library />
      {/* <MailingList data={mailing_data} /> */}
    </>
  );
}
