import { Hero } from "@/components/location/Hero";
import { TouristDestinations } from "@/components/location/TouristDestinations";
import { useTranslations } from "next-intl";

function LocationPage() {
  const t = useTranslations(`location`);

  const hero_data = t.raw("hero");
  const direction_data = t.raw("directions");
  return (
    <>
      <Hero data={hero_data} />
      <TouristDestinations data={direction_data} />
    </>
  );
}

export default LocationPage;
