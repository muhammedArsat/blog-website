import React, { useContext, useRef } from "react";
import { Home, Bookmark, User, History, MoonIcon } from "lucide-react";
import { SidebarContext } from "../providers/SidebarProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarVisible } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div
      className={`${
        isSidebarVisible ? "translate-x-0" : "-translate-x-full"
      } z-50 md:translate-x-0 bg-white fixed transition-all top-18 duration-300  w-[200px] border-r border-neutral-200 min-h-screen`}
      
    >
      <ul className="flex flex-col space-y-4 pt-4">
        <li className="flex gap-4 items-center py-2 px-5 cursor-pointer " onClick={()=>navigate("/home")}>
          <span>
            <Home strokeWidth={1} fill={`${path === '/home'?'black':'white'}`}/>
          </span>
          Home
        </li>
        <li className="cursor-pointer flex justify-start gap-4 items-center space-x-4 py-2 px-5"onClick={()=>navigate("/library")}>
          <Bookmark strokeWidth={1} fill={`${path === '/library'?'black':'white'}`} />
          Library
        </li>
        <li className=" cursor-pointer flex justify-start gap-4 items-center space-x-4 py-2 px-5"onClick={()=>navigate("/history")}>
          <History strokeWidth={1} fill={`${path === '/history'?'black':'white'}`} color={`${path==='/history'?'white':'black'}`}/>
          History
        </li>
        <li className=" cursor-pointer flex justify-start gap-4 items-center space-x-4 py-2 px-5" onClick={()=>navigate("/profile")}>
          <User strokeWidth={1} fill={`${path === '/profile'?'black':'white'}`} />
          Profile
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
