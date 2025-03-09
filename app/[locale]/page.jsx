import { useTranslations } from "next-intl";
import HomeHero from "@/components/homepage/HomeHero";
import VisionsAndGoals from "@/components/homepage/VisionsAndGoals";
import MailingList from "@/components/homepage/MailingList";
import Partners from "@/components/homepage/Partners";
import Library from "@/components/homepage/Library";
import AlbahaStats from "@/components/homepage/AlbahaStats";
export default function HomePage() {
  const t = useTranslations(`homepage`);

  const hero_data = t.raw("hero");
  const visions_data = t.raw("visions_and_goals");
  const mailing_data = t.raw("mailing_list");
  const partners_data = t.raw("partners");

  return (
    <>
      <HomeHero data={hero_data} />
      <VisionsAndGoals data={visions_data} />
      <AlbahaStats />
      <Partners data={partners_data} />
      <Library />
      <MailingList data={mailing_data} />
    </>
  );
}
