import React, { useState } from "react";
import CommentCard from "./CommentCard";
import { ChevronDown, MessageCircleDashed } from "lucide-react";

const CommentSection = () => {
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl flex justify-between items-center">
        <h2>Comments</h2>
        <span className="flex justify-center items-center space-x-2">
          <span className="flex items-center space-x-2">
            <MessageCircleDashed />
            <p>50</p>
          </span>

          <span onClick={() => setShowComments(!showComments)}>
            <ChevronDown
              className={`${
                showComments ? "rotate-0" : "rotate-180"
              } transition-all duration-300 cursor-pointer`}
            />
          </span>
        </span>
      </div>

      <div
        className={`${
          showComments
            ? "opacity-100 visible max-h-screen"
            : "opacity-0 invisible max-h-0"
        } transition-all duration-300 overflow-hidden`}
      >
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default CommentSection;
