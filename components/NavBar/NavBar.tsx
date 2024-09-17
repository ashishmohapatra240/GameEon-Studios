"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (item: string) => {
    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    router.push(path);
    setSelected(item);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-16 px-4 md:px-[100px] flex justify-between items-center z-10">
      <div className="text-white text-xl font-semibold whitespace-nowrap">GameEon Studios</div>
      <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`absolute top-16 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-8 md:flex md:static md:h-auto md:flex-row md:justify-end md:bg-transparent md:gap-8 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
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
