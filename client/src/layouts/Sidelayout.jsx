import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Sidelayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  return (
    <div className="flex items-start">
      <Sidebar isSidebarVisible={isSidebarVisible} />
      <main className="pl-4 md:pl-[250px] flex md:pt-10 " >
        <Outlet />
      </main>
    </div>
  );
};

export default Sidelayout;
