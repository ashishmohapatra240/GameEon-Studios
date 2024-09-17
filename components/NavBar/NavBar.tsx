"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Home");

  const handleNavigation = (item: string) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    router.push(path);
    setSelected(item);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 px-[100px] flex justify-between items-center z-10">
      <div className="text-white text-xl font-semibold">GameEon Studios</div>
      <div className="flex items-center gap-8">
        {["Home", "Services", "Team", "Careers", "Press", "Contact Us"].map((item) => (
          <div
            key={item}
            onClick={() => handleNavigation(item)}
            className={`text-white text-sm ${
              selected === item ? "font-bold" : "font-normal"
            } cursor-pointer`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
