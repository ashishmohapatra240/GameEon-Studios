import React from "react";
import StoreButton from "react-mobile-store-button";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  storeUrl: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageUrl,
  storeUrl,
}) => {
  return (
    <div className="p-6 bg-neutral-950 rounded-3xl border border-zinc-800 flex gap-5 items-center">
      <img
        className="w-40 h-32 rounded-2xl object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="text-white text-xl font-medium">{title}</div>
          <div className="text-white/60 text-sm mt-2">{description}</div>
        </div>
        <div className="mt-4 self-start">
          <StoreButton
            store="android" // Use 'ios' for the App Store
            url={storeUrl}
            width={150} // Adjust the size as needed
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
