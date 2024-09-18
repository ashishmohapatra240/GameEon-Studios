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
        preload="auto"
        playsInline
        src="https://cdn.jsdelivr.net/gh/ashishmohapatra240/GameEon-Studios/public/videos/MumbaiGullies.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <TitleSection />
      <ButtonSection />
    </div>
  );
};

export default HeroSection;
