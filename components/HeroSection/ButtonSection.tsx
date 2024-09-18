const ButtonSection = () => (
  <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 flex gap-6 pt-10">
    <div className="w-40 h-12 px-9 py-3.5 bg-gradient-to-r from-teal-500 to-teal-500 rounded-lg flex justify-center items-center">
      <div className="text-white text-base font-semibold">Get started</div>
    </div>
    <div className="w-40 h-12 px-9 py-3.5 rounded-lg border border-white flex justify-center items-center">
      <div className="text-white text-base font-normal">Learn more</div>
    </div>
  </div>
);

export default ButtonSection;
