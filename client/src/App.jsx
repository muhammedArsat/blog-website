import React from "react";
import RoutePaths from "./routes/RoutePaths";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
const App = () => {
  return (
    <ThemeProvider>
      <RoutePaths />
    </ThemeProvider>
  );
};

export default App;
