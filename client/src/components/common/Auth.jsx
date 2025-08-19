import React, { useState } from "react";
import { LogIn, LogOut } from "lucide-react";
const Auth = () => {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div className="flex justify-center items-center ">
      <span className={`cursor-pointer ${isLogged ? "block" : "hidden"}`}>
        <LogIn strokeWidth={1.5} />
      </span>
      <span className={`cursor-pointer ${!isLogged ? "block" : "hidden"}`}>
        <LogOut strokeWidth={1.5} />
      </span>
    </div>
  );
};

export default Auth;
