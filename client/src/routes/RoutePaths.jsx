import React from "react";
import Blog from "../modules/blog/pages/Blog.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLayout from "../layouts/HeaderLayout.jsx";
const RoutePaths = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path="/" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutePaths;
