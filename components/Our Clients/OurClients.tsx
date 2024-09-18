import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import LogoData from "./Logos";

const OurClients = () => {
  const Logos = [...LogoData["Logos"]];

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-8 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Previous Sponsors
          </h2>
          <p className="mt-4 max-w-6xl text-xl text-gray-500 mx-auto py-8">
          Join the league of satisfied clients! GameEon Studios delivers exceptional gaming solutions tailored to your needs. Our client’s success is our top priority. At GameEon Studios, we work closely with you to create immersive gaming experiences that engage and entertain.
          </p>
        </div>

        <div className="py-16">
          <Marquee gradient={false} speed={50}>
            {Logos.map((sponsor, index) => (
              <div key={index} className="px-8">
                <Image
                  height={120}
                  width={120}
                  src={sponsor.url}
                  alt={`${sponsor.name} logo`}
                  className="h-auto w-auto"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
