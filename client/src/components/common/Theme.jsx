import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import ThemeContext from "../../context/ThemeContext";
const Theme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="flex gap-2 bg-light-card dark:bg-dark-card p-2 rounded-full justify-center items-center">
      <span
        className={`cursor-pointer ${
          !isDark ? "bg-white p-1 rounded-full" : ""
        }`}
        onClick={()=>toggleTheme(false)}
      >
        <Sun strokeWidth={1.5} />
      </span>
      <span className={`cursor-pointer ${
          isDark ? "bg-black  p-1 rounded-full" : ""
        }`}onClick={()=>toggleTheme(true)}>
        <Moon strokeWidth={1.5} />
      </span>
    </div>
  );
};

export default Theme;
