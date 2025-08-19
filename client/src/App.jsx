import React from "react";
import RoutePaths from "./routes/RoutePaths";
import { ThemeProvider } from "./context/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <RoutePaths />
    </ThemeProvider>
  );
};

export default App;
