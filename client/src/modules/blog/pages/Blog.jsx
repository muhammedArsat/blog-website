import React, { useState } from "react";
import Header from "../../../components/common/Header";
import Trending from "../../../components/common/Trending.jsx";
import SearchModal from "../../../components/common/SearchModal.jsx";
import BlogCard from "../components/BlogCard.jsx";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  return (
    <div className="relative mt-28">
      <Header />
      <Trending />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center md:px-20 gap-3 px-3">
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
    </div>
  );
};

export default Blog;
