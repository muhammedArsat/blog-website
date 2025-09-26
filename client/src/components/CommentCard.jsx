import React from "react";
import ProfileImg from "../assets/icon-avatar.svg";
const CommentCard = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <div className="w-full max-w-3xl flex flex-col space-y-4 border-b border-neutral-200 p-2 h-32 overflow-hidden">
        <div className="flex items-center space-x-2 ">
          <img src={ProfileImg} alt="Profile Image" className="w-8 h-8" />
          <span className="flex flex-col space-y-2">
            <h3>Author Name</h3>
            <p>29-sept,2025</p>
          </span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            officiis ratione soluta, quibusdam ipsam temporibus dolores, labore
            maxime repudiandae delectus aspernatur! Aliquam veniam minus ducimus
            quaerat, numquam aut consequuntur ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
