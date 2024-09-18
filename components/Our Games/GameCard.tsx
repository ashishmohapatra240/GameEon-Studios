import React from "react";
import Image from "next/image";
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
    <div className="p-6 bg-neutral-950 rounded-3xl border border-zinc-800 flex flex-col md:flex-row gap-5 items-center">
      <div className="relative w-full md:w-60 h-40 md:h-48 rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <div className="text-white text-xl font-medium">{title}</div>
          <div className="text-white/60 text-sm mt-2">{description}</div>
        </div>
        <div className="mt-4 self-start">
          <StoreButton
            store="android"
            url={storeUrl}
            width={150}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
