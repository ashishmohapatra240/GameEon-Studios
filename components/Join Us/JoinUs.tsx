import React from "react";

const JoinUsSection = () => {
  return (
    <div
      className="w-full h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/JoinUs.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative p-10 rounded-lg flex flex-col justify-center items-center z-10 max-w-screen-lg mx-auto">
        <h1 className="text-white text-6xl font-bold text-center mb-6">
          Let’s Work Together
        </h1>
        <p className="text-white text-lg font-medium leading-7 text-center mb-10">
          At GameEon Studios, we are excited about what lies ahead in the world
          of gaming.
        </p>

        <div className="w-full flex items-center max-w-md space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-4 rounded-lg border border-white text-white/70 bg-transparent outline-none transition duration-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 h-12  "
          />
          <button className="h-12 min-w-[120px] px-6 bg-teal-500 rounded-lg flex items-center justify-center text-white font-semibold transition duration-200 hover:bg-teal-600">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
