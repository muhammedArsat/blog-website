import React from "react";
import BlogImg from "../../../assets/blog-cover.webp";
const BlogHeader = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col justify-center items-center font-body gap-3">
        {/* //*Author name  */}
        <p>
          {" "}
          <span className="text-purple-500">Ethan Caldwell</span> on October 16,
          2024
        </p>

        {/* //!Blog heading */}
        <h1 className="font-heading text-5xl font-bold max-w-4xl text-center">
          How Tech Shapes the Future of Work in 2024
        </h1>

        {/* //!Blog short description  */}
        <p className="font-body text-lg text-light-secondary dark:text-dark-secondary max-w-3xl text-center">
          Revision Welcome to ultimate source for fresh perspectives! Explore
          curated content to enlighten, entertain and engage global readers.
        </p>

        {/* //!Blog Category */}

        <div className="flex justify-center items-center gap-3">
          <div className="flex justify-center items-center p-1 rounded-lg shadow-lg dark:bg-dark-card min-w-[75px] text-sm uppercase">
            Business
          </div>
          <div className="flex justify-center items-center p-1 rounded-lg shadow-lg dark:bg-dark-card min-w-[75px] text-sm uppercase">
            Web
          </div>
        </div>
      </div>

      <div className="flex justify-center  w-full  items-stretch ">
        <img
          src={BlogImg}
          alt="blog-image"
          className="  object-cover  md:w-[65%] md:h-[620px] rounded-lg"
        />
      </div>
    </div>
  );
};

export default BlogHeader;
