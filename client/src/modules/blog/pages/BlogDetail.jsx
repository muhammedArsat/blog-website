import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogContent from "../components/BlogContent";
const BlogDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 p-2 mt-28 ">
      <BlogHeader />
      <BlogContent />
    </div>
  );
};

export default BlogDetail;
