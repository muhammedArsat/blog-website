import React from "react";
import ProfileImg from "../assets/icon-avatar.svg";
const BlogHeader = () => {
  return (
    <div className="flex justify-start items-center w-full flex-col  space-y-4">
      <h1 className="w-full md:max-w-3xl ">
        Your ChatGPT History Just Went Public on Google. Here’s What I Did in 10
        Mins to Fix It.
      </h1>
      <div className="flex items-center  w-full md:max-w-3xl space-x-8">
        <div className="flex items-center space-x-4">
          <img src={ProfileImg} alt="profile image" className="w-8 h-8" />
          <p>Author</p>
        </div>
        <p>2 mins read</p>
        <p>26,Aug 2025</p>
      </div>
    </div>
  );
};

export default BlogHeader;
