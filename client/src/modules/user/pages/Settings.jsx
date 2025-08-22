import React, { useState } from "react";
import { UserCircle, Newspaper } from "lucide-react";
import Profile from "../components/Profile";
import Post from "../components/Post";
const Settings = () => {
  const [currentTab, setCurrTab] = useState("profile");

  const handleSwitchTab = (page) => {
    setCurrTab(page);
  };
  return (
    <div className="font-body flex mt-[6rem] ">
      {/* //!sidebar for profile page */}
      <ul className="md:min-w-[250px] bg-white dark:bg-dark-card h-[calc(100vh-6.5rem)] hidden shadow-md md:flex flex-col md:gap-2">
        <li
          className={`font-body text-center text-xl font-normal my-3 flex items-center justify-center gap-2 cursor-pointer py-3  ${
            currentTab === "profile"
              ? "bg-purple-400 border-l-2 text-white"
              : ""
          } `}
          onClick={() => handleSwitchTab("profile")}
        >
          <UserCircle strokeWidth={1.5} />
          Profile
        </li>
        <li
          className={`font-body text-center text-xl font-normal my-3 flex items-center justify-center gap-2  cursor-pointer py-3  ${
            currentTab === "settings"
              ? "bg-purple-400 border-l-2 text-white"
              : ""
          }`}
          onClick={() => handleSwitchTab("settings")}
        >
          <Newspaper strokeWidth={1.5} />
          Posts
        </li>
      </ul>

      <div className="md:px-4 w-full ">
        {currentTab === "profile" ? <Profile /> : <Post />}
      </div>
    </div>
  );
};

export default Settings;
