import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
const HeaderLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderLayout;
