import React from "react";
import { Outlet } from "react-router-dom";

import "./index.css";

const App = () => {
  return (
    <div className="middle_content middle_padding">
      <Outlet></Outlet>
    </div>
  );
};

export default App;
