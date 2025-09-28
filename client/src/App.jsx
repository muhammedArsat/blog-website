import React from "react";
import Routepath from "./routes/Routepath";
import Header from "./components/Header";
import SidebarProvider from "./providers/SidebarProvider";

const App = () => {
  return (
    <SidebarProvider>  
      <Routepath />
    </SidebarProvider>
  );
};

export default App;
