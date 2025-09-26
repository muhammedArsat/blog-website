import React from "react";
import BlogHeader from "../components/BlogHeader";
import BlogContent from "../components/BlogContent";
import CommentSection from "../components/CommentSection";

const Blog = () => {
  return (
    <div className="w-full flex flex-col space-y-4">
      <BlogHeader />
      <BlogContent />
      <CommentSection />
    </div>
  );
};

export default Blog;
