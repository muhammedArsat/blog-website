import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Sidelayout from "../layouts/Sidelayout";
import Settings from "../pages/Settings";
import Library from "../pages/Library";
import History from "../pages/History";
import Write from "../pages/Write";
import Header from "../components/Header";
import Headerlayout from "../layouts/Headerlayout";

const Routepath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route element={<Headerlayout />}>
          <Route element={<Sidelayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/Profile" element={<Settings />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<History />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default Routepath;
