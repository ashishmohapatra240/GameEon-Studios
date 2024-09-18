import Details from "@/components/Details/Details";
import HeroSection from "@/components/HeroSection/HeroSection";
import OurClients from "@/components/Our Clients/OurClients";
import OurGames from "@/components/Our Games/OurGames";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Details/>
      <OurGames/>
      <OurClients/>
    </div>
  );
}
