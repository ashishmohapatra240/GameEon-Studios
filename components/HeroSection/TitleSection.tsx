import Image from "next/image";

const TitleSection = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-10 sm:py-16 md:py-20">
    <Image
      height={200}
      width={200}
      src="/images/mg-logo.png"
      alt="Mumbai Gullies"
      className="h-auto w-auto"
    />
    <span className="text-white text-3xl sm:text-3xl md:text-4xl font-bold leading-tight mt-4">
      is exactly the game we have<br/>collectively dreamt for
    </span>
    <div className="text-white/70 text-sm sm:text-base md:text-lg font-regular leading-tight mt-4 mb-16">
      A game inspired by the amazing contrast of life of Mumbai City,<br/> A city
      where the landscape changes every few meters.
    </div>
  </div>
);

export default TitleSection;
