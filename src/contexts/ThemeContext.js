import { createContext, useReducer } from "react";
import ThemeReducer from "../reducers/ThemeReducer";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [color, dispatch] = useReducer(ThemeReducer, {
    color: "secondary",
    mode: "dark",
  });

  const changeColor = (value) =>
    dispatch({ type: "CHANGE_COLOR", payload: value });
  const changeMode = (value) =>
    dispatch({ type: "CHANGE_MODE", payload: value });

  return (
    <ThemeContext.Provider value={{ ...color, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
