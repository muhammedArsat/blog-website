import React from "react";
import ProfileImg from "../../../assets/profile_fallback.svg";
import {
  User,
  Mail,
  Briefcase,
  Phone,
  Building2,
  MapPin,
  Info,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="font-body text-xl flex flex-col gap-6 w-full p-4 sm:h-[300px] overflow-auto md:h-[calc(100vh-6rem)]">
      <h1 className="text-2xl font-bold">Edit Profile</h1>
      <div className="flex justify-start items-center">
        <img
          src={ProfileImg}
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-light-secondary">
            Name
          </label>
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="name"
              type="text"
              className="input-base pl-10 w-full"
              placeholder="E.g John Deo"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-light-secondary">
            Email
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="email"
              type="text"
              name="email"
              className="input-base pl-10 w-full cursor-not-allowed bg-gray-100 dark:bg-gray-900"
              placeholder="example@gmail.com"
              disabled
            />
          </div>
        </div>

        {/* Job */}
        <div className="flex flex-col gap-2">
          <label htmlFor="job" className="text-light-secondary">
            Job
          </label>
          <div className="relative">
            <Briefcase
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="job"
              type="text"
              name="job"
              className="input-base pl-10 w-full"
              placeholder="E.g Software Developer"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-light-secondary">
            Phone
          </label>
          <div className="relative">
            <Phone
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="phone"
              type="text"
              name="phone"
              className="input-base pl-10 w-full"
              placeholder="E.g 9446630483"
            />
          </div>
        </div>

        {/* City */}
        <div className="flex flex-col gap-2">
          <label htmlFor="city" className="text-light-secondary">
            City
          </label>
          <div className="relative">
            <Building2
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="city"
              type="text"
              name="city"
              className="input-base pl-10 w-full"
              placeholder="E.g Mcallen"
            />
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label htmlFor="country" className="text-light-secondary">
            Country
          </label>
          <div className="relative">
            <MapPin
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              id="country"
              type="text"
              name="country"
              className="input-base pl-10 w-full"
              placeholder="E.g New york"
            />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="flex flex-col gap-2">
        <label htmlFor="about" className="text-light-secondary">
          About
        </label>
        <div className="relative">
          <Info className="absolute left-3 top-3 text-gray-400" size={20} />
          <textarea
            id="about"
            name="about"
            className="input-base pl-10 w-full min-h-[100px] resize-none"
            placeholder="E.g About Yourself"
          ></textarea>
        </div>
      </div>

      <div>
        <button className="bg-accent hover:bg-accent-hover active:bg-accent-active dark:bg-accent-darkHover dark:active:bg-accent-darkActive cursor-pointer text-white px-3 py-2 rounded-lg w-full">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
