import TeamCards from "@/components/team/TeamCards";
import TeamsHeader from "@/components/team/TeamHeader";
import getData from "@/lib/api";
import Image from "next/image";

function OurTeamPage() {
  return (
    <section className="bg-[#011616] pt-36">
      <TeamsHeader />
      <TeamCards />
    </section>
  );
}

export default OurTeamPage;
