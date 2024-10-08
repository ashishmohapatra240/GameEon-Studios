import Details from "@/components/Details/Details";
import HeroSection from "@/components/HeroSection/HeroSection";
import JoinUsSection from "@/components/Join Us/JoinUs";
import OurClients from "@/components/Our Clients/OurClients";
import OurGames from "@/components/Our Games/OurGames";
import Testimonials from "@/components/Testimonials/Testimonial";
import WhatWeDoSection from "@/components/What We Do/WhatWeDo";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Details/>
      <OurGames/>
      <WhatWeDoSection/>
      <OurClients/>
      <Testimonials/>
      <JoinUsSection/>
    </div>
  );
}
