import React from "react";
import Blog from "../modules/blog/pages/Blog.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from "../layouts/HeaderLayout.jsx";
import BlogDetail from "../modules/blog/pages/BlogDetail.jsx";
import Settings from "../modules/user/pages/Settings.jsx";
const RoutePaths = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Blog />} />
          <Route path="/blog-details/:id" element={<BlogDetail />} />
          <Route path="/profile" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutePaths;
