import WhatWeDo from "./WhatWeDoCard";

const WhatWeDoSection = () => {
  return (
    <div className="bg-neutral-950 py-10">
      <h2 className="text-center text-white text-4xl font-bold mb-10">
        What We Do
      </h2>
      <div className="p-8 flex flex-wrap justify-center items-center gap-8">
        <WhatWeDo
          title="Mobile Games"
          description="GameEon Studios is a leading expert in client services for mobile game development."
          imageUrl="/images/WhatWeDo/MobileGames.png"
        />
        <WhatWeDo
          title="AR/VR"
          description="We specialize in AR/VR development to provide immersive and engaging experiences."
          imageUrl="/images/WhatWeDo/ARVR.png"
        />
        <WhatWeDo
          title="Game Testing"
          description="Ensure that your game is free of bugs, meets quality standards, and is optimized for release."
          imageUrl="/images/WhatWeDo/GameTesting.png"
        />
        <WhatWeDo
          title="3D/2D Art"
          description="GameEon Studios provides professional client services for 3D and 2D game art development."
          imageUrl="/images/WhatWeDo/3D2DArt.png"
        />
      </div>
    </div>
  );
};

export default WhatWeDoSection;
