import React from "react";
import ProfileImg from "../assets/icon-avatar.svg";
import { Settings, Info } from "lucide-react";
const ProfileModel = () => {
  return (
    <div className="absolute z-50 flex flex-col space-y-4 top-full mt-2 right-0 p-3 rounded-lg shadow-xl w-[200px] bg-white">
      <div className="flex  justify-center space-x-4 items-center">
        <img src={ProfileImg} alt="profile image" className="w-10 h-10" />
        <span className="flex flex-col">
          <p>Username</p>
          <span className="text-[12px] tracking-wider text-neutral-600">
            View profile
          </span>
        </span>
      </div>
      <div className="border-b border-neutral-200 p-2">
        <ul className="flex flex-col gap-3">
          <li className="flex justify-start gap-4 items-center">
            <Settings strokeWidth={1} />
            Settings
          </li>
          <li className="flex justify-start gap-4 items-center">
            <Info strokeWidth={1} />
            Help
          </li>
        </ul>
      </div>
      <div className="flex flex-col space-y-1  group w-full">
        <span className="group-hover:text-black text-[14px] text-neutral-500 font-primary tracking-wide">
          Sign out
        </span>
        <span className=" group-hover:text-black text-[14px] text-neutral-500 font-primary tracking-wide">
          ars.....@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ProfileModel;
