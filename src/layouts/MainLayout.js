import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import ThemeSelector from "../components/ThemeSelector";
import { Outlet } from "react-router-dom";
import ChangeMode from "../components/ChangeMode";
import { ThemeContext } from "../contexts/ThemeContext";

function MainLayout() {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`bg-${mode}`}>
      <Navbar />
      <div className="container" style={{ display: "flex" }}>
        <div className="me-auto  ">
          <ChangeMode />
        </div>
        <div className="ms-auto ">
          <ThemeSelector />
        </div>
      </div>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
