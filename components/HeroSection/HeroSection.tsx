import React from "react";
import TitleSection from "./TitleSection";
import ButtonSection from "./ButtonSection";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        src="videos/MumbaiGullies.mp4"
      />
      <div className="absolute inset-0 bg-black/40" />
      <TitleSection />
      <ButtonSection />
    </div>
  );
};

export default HeroSection;
