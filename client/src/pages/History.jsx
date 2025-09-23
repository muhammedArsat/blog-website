import React from "react";
import BlogCard from "../components/BlogCard";
const History = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h2>History</h2>

      <h3 className="text-neutral-400 text-center w-full">
        You haven’t viewed any blogs yet. Start viewing others thoughts!
      </h3>

      <BlogCard isHistory={true}/>
      <BlogCard isHistory={true}/>
      <BlogCard isHistory={true}/>
      <BlogCard isHistory={true}/>
      <BlogCard isHistory={true}/>
      <BlogCard isHistory={true}/>


    </div>
  );
};

export default History;
