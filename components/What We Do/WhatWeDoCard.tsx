import React from 'react';
import Image from 'next/image';

interface WhatWeDoProps {
  title: string;
  description: string;
  imageUrl: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-72 h-96 relative flex flex-col bg-neutral-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-lg">
      <div className="relative w-full h-2/3">
        <Image
          src={imageUrl || '/placeholder.png'}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>

      <div className="flex flex-col justify-center p-4 h-1/3">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-white/60 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
