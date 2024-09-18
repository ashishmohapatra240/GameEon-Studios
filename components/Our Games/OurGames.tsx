"use client";
import React from "react";
import GameCard from "./GameCard";

const gameData = [
  {
    title: "Cricket CEO 2021",
    description:
      "For all you cricket fans out there, the Intensity of Cricket CEO game is now available on your mobile!!! Welcome to the most authentic, complete, and surreal Cricket experience on Android - Cricket CEO. Ever wanted to be a cricket team franchise owner? Well, this is your chance! Cricket CEO Games is here - A free cricket manager game where you take control of the cricket nation club of your dreams. Cricket CEO is the best in a class cricket game.",
    imageUrl: "/images/Cricket-CEO-2021.png",
    storeUrl:
      "https://play.google.com/store/apps/details?id=gameeon.cricket.ceo&hl=en-IN",
  },
  {
    title: "Proving Grounds",
    description:
      "Proving Grounds Multiplayer is a fun real classic racing game with top 30 graphics and high quality, giving you ultimate visual enjoyment. Looking for a realistic car racing experience with actual cars, tracks, and some of the most beautiful graphics ever? Check out our new Proving Grounds Multiplayer Car racing game. Drive on real 3D tracks at wild top speed. fully control the vehicle, nitrogen drift for no limit, overtake on a curve, and experience the growth of the legendary driver!",
    imageUrl: "/images/Proving-Grounds.png",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.gameeon.provinggrounds.racing.multiplayer&hl=en-IN",
  },
  {
    title: "Ultimate Monster Truck",
    description:
      "3D stunt racing simulator is actually a sky stunt racing game for free with amazing monster trucks. Have you ever experienced extreme car stunts with real impossible tracks like a full-speed car racing game No, then this Ultimate Monster Truck: 3D stunt racing simulator is solely made for you. In this real stunts monster truck game, you'll be having multiple monster trucks you can perform tremendous fearless monster stunts with a lot of different monster trucks.",
    imageUrl: "/images/Ultimate-Monster-Truck.png",
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.coolscape.ultimatemonstertruck&hl=en-IN",
  },
];

const OurGames = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-950">
      <div className="max-w-screen-lg w-full py-10 px-4">
        <h2 className="text-center text-white text-4xl font-bold mb-10">Our Games</h2>
        <div className="flex flex-col gap-6">
          {gameData.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              description={game.description}
              imageUrl={game.imageUrl}
              storeUrl={game.storeUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurGames;
