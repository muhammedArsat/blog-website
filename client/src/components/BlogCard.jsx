import React from "react";
import { MessageCircle, BookmarkCheckIcon, Trash } from "lucide-react";
import BlogImg from '../assets/icon-blog.webp'
const BlogCard = ({isHistory}) => {
  return (
    <div className="flex justify-center items-start  md:items-center space-x-4 border-b border-neutral-200 p-2">
      <div className="flex flex-col space-y-4 basis-3/4">
        <h2>When Letting Go Is the Healthiest Thing You Can Do</h2>
        <h3>
          On trauma, impermanence, and the hard truth that some relationships
          were never meant to last.
        </h3>
        <div className="flex justify-between items-center ">
          <div className="flex space-x-8 items-center">
            <p>Aug 21, 2025</p>
            <span className="flex justify- items-center gap-1">
              <MessageCircle strokeWidth={1} fill="gray" color="white" />
              50
            </span>
          </div>

          <div className="flex flex-row-reverse gap-1 md:gap-4">
            <span className="cursor-pointer">
              <BookmarkCheckIcon strokeWidth={1}/>
            </span>
            <span className={`${isHistory ? 'block':'hidden'} cursor-pointer` }>
              <Trash strokeWidth={1} color="red"/>
            </span>
          </div>
        </div>
      </div>
      <div className="basis-1/4 ">
        <img src={BlogImg} alt="blog image" className="object-contain rounded-sm md:w-60" />
      </div>
    </div>
  );
};

export default BlogCard;
