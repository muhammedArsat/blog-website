import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
const HeaderLayout = () => {
  return (
    <div className="flex flex-col gap-2">
      <Navbar />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
