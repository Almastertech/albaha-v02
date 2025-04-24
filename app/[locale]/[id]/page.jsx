import { Hero } from "@/components/location/Hero";
import { TouristDestinations } from "@/components/location/TouristDestinations";
import getData from "@/lib/api";

async function LocationPage({ params }) {
  const states_data = await getData("govs");
  const { id } = await params;
  const currState = states_data.find((state) => state.state === id);
  return (
    <>
      <Hero states_data={states_data} data={currState} />
      {/* <TouristDestinations data={currState} /> */}
    </>
  );
}

export default LocationPage;
