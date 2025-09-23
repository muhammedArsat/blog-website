import React from "react";
import BlogCard from "../components/BlogCard";

const Home = () => {
  return (
    <div className="flex flex-col md:space-y-8 space-y-4">
      <h4 className="text-[18px]">For you</h4>

      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />

    </div>
  );
};

export default Home;
