import { Menu, Search, NotebookPenIcon } from "lucide-react";
import React from "react";
import Profile from "../assets/icon-avatar.svg";
const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 py-2 px-4 flex justify-between">
      <div className="flex justify-center items-center space-x-4">
        <span className="cursor-pointer">
          <Menu strokeWidth={1} />
        </span>
        <h4 className="text-[32px] font-bold font-primary">Blogsphere</h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input-base rounded-full bg-neutral-50"
          />
          <span className="absolute left-3 top-3">
            <Search strokeWidth={1} />
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-8 cursor-pointer">
        <span className="flex justify-center items-center space-x-1">
          <NotebookPenIcon strokeWidth={1} />
          <p>write</p>
        </span>
        <img src={Profile} alt="profile" className="w-9 h-9 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
