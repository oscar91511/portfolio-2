import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import Projects from "./Projects";
import Resume from "./Resume";
import Contact from "./Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Work" element={<Work />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Resume" element={<Resume />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
