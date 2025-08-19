import React, { useEffect, useState } from "react";
import { Menu, X, Twitter, Facebook } from "lucide-react";
import Theme from "./Theme";
import Search from "./Search";
import Auth from "./Auth";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleClose = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      setIsMobileNavOpen(false);
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavOpen]);
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <span className="block md:hidden basis-1/4" onClick={handleClose}>
        <Menu strokeWidth={1.5} />
      </span>
      <h1 className="font-heading text-3xl font-bold leading-relaxed basis-2/4 md:basis-1/4 text-center md:text-left">
        Inkspire
      </h1>

      {/* desktop ul  */}
      <ul className=" justify-center items-center gap-6 font-body text-xl font-semibold basis-2/4 hidden md:flex">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="flex justify-end items-center gap-6 font-body basis-1/4">
        <Search />

        <div className="hidden  md:flex md:justify-center md:items-center gap-3  p-1">
          <Theme />
          <Auth />
        </div>
      </div>

      {/* mobile ul  */}
      <ul
        className={` justify-center items-center gap-6 font-body text-lg font-semibold md:hidden absolute left-0 w-full bg-white/90 dark:bg-black/90 inset-y-0 backdrop-blur-sm transition-all duration-300 ${
          !isMobileNavOpen ? "-translate-x-[100%]" : "translate-x-0"
        }`}
      >
        <div className="flex justify-between items-center px-3">
          <h1 className="text-3xl font-heading mb-4 ">Inkspire</h1>
          <span className="cursor-pointer" onClick={handleClose}>
            <X strokeWidth={1.5} />
          </span>
        </div>
        <li className="cursor-pointer p-3 text-[18px]">Home</li>
        <li className="cursor-pointer p-3 text-[18px]">About</li>
        <li className="cursor-pointer p-3 text-[18px]">Contact</li>
        <div className="flex  justify-between items-center absolute bottom-0 w-full border-t p-2">
          <div className="flex gap-3">
            <span className="bg-light-card dark:bg-dark-card rounded-full p-2">
              <Twitter />
            </span>
            <span className="bg-light-card dark:bg-dark-card rounded-full p-2">
              <Facebook />
            </span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Theme />
            <Auth />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
