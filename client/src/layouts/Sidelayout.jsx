import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Sidelayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <div className="flex items-start">
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <main className="p-1 md:pl-[240px] flex md:pt-32 pt-20 w-full " >
        <Outlet />
      </main>
    </div>
  );
};

export default Sidelayout;
