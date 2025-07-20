import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import "./ThemeSelector.css";
const themeColors = ["light", "dark"];

export default function ChangeMode() {
  const { changeMode } = useContext(ThemeContext);
   return (
    <div className="container theme-selector">
      <div className="theme-links">
        {themeColors.map((color) => (
          <span
            key={color}
            className={`bg-${color}`}
            onClick={() => changeMode(color)}
          ></span>
        ))}
      </div>
    </div>
  );
  
}
