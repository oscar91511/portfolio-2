import React from "react";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import AppRoutes from "./components/appRoutes";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Sidenav />
        <AppRoutes/>
      </Router>
    </div>
  );
}

export default App;
