import { Menu, Search, NotebookPenIcon } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import Profile from "../assets/icon-avatar.svg";
import { SidebarContext } from "../providers/SidebarProvider";
import ProfileModel from "./ProfileModel";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const { handleSidebarVisible } = useContext(SidebarContext);
  const [isProfileModelShow, setIsProfileModelShow] = useState(false);
  const profileRef = useRef();
  const location = useLocation();
  const path = location.pathname
  const navigate = useNavigate()
  useEffect(() => {
  const handleClickOutside = (event ) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target )
    ) {
      setIsProfileModelShow(false);
    }
  };

  if (isProfileModelShow) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isProfileModelShow]);

  return (
    <div className="border-b border-neutral-200 py-2 px-4 flex justify-between">
      <div className="flex justify-center items-center space-x-4">
        <span className="cursor-pointer" onClick={handleSidebarVisible}>
          <Menu strokeWidth={1} />
        </span>
        <h4 className="text-[32px] font-bold font-primary">Blogsphere</h4>
        <div className="relative hidden md:block">
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
        <span onClick={()=>navigate("/write")} className=" hidden md:flex  justify-center items-center space-x-1">
          <NotebookPenIcon strokeWidth={1} fill={`${path === '/write'?'black':'white'}`} color={`${path==='/write'?'white':'black'}`} />
          <p>write</p>
        </span>
        <div className="relative z-50">
          <img
            onClick={() => setIsProfileModelShow(!isProfileModelShow)}
            src={Profile}
            alt="profile"
            className="w-9 h-9 cursor-pointer"
          />
          <div
            className={`${
              isProfileModelShow ? "opacity-100 visible" : "opacity-0 invisible"
            } transition-all duration-300`}
            ref={profileRef}
          >
            <ProfileModel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
