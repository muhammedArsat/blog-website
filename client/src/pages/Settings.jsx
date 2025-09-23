import React from "react";
import ProfileIcon from "../assets/icon-avatar.svg";
const Settings = () => {
  return (
    <div className="w-full flex flex-col gap-8 pb-3 p-2">
      <div className="flex justify-between items-end md:px-4">
        <div>
          <h2>Profile</h2>
          <p>Update your photo and personal details</p>
        </div>

        <div>
          <button className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 text-white py-2 px-4 cursor-pointer  rounded-lg">Update</button>
        </div>
      </div>

      <div className="flex items-start md:space-x-4 gap-3">
        <img src={ProfileIcon} alt="profile icon" className="w-24 h-24" />
        <div className="flex flex-col space-y-4">
          <p>
            Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
            side.
          </p>
          <div className="flex justify-start space-x-4">
            <button className="bg-green-400 hover:bg-green-300 active:bg-green-500 p-2 rounded-lg text-white font-primary cursor-pointer">
              Update
            </button>
            <button className="bg-red-400 hover:bg-red-300 active:bg-red-500 p-2 rounded-lg text-white font-primary cursor-pointer">
              Delete
            </button>
          </div>
        </div>
      </div>

      <form onSubmit={""} className="flex flex-col  space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="input-base md:w-[80%]"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className="input-base md:w-[80%]"
            placeholder="John Doe"
          />
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="name">Phone</label>
          <input
            type="text"
            name="phone"
            className="input-base md:w-[80%]"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            name="bio"
            className="input-base md:w-[80%]"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="bio">About me</label>
          <textarea
            type="text"
            name="bio"
            className="input-base md:w-[80%]"
            placeholder="John Doe"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Settings;
