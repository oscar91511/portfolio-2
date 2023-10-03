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
      <Route path="/" Component={Home} />
      <Route path="/Work" Component={Work} />
      <Route path="/Projects" Component={Projects} />
      <Route path="/Resume" Component={Resume} />
      <Route path="/Contact" Component={Contact} />
    </Routes>
  );
};

export default AppRoutes;
