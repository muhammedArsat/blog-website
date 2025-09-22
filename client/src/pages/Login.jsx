import React, { useState } from "react";
import LoginIcon from "../assets/icon-login.svg";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex items-center min-h-screen">
      <div className="basis-7/12 relative md:flex md:flex-col space-y-4  pt-24 bg-violet-600 rounded-r-lg min-h-screen hidden justify-center items-center">
        <h3 className="text-white absolute  top-3 left-3">Blogsphere</h3>
        <h4 className=" absolute top-9 left-3 font-primary tracking-wide text-slate-200">
          Read. Write. Inspire.
        </h4>
        <h2  className="text-center px-4 text-white mb-10">Start your journey today — every story deserves to be heard."</h2>
        <img src={LoginIcon} alt="Login logo" className="w-[350px]" />
      </div>
      <div className=" relative flex flex-col p-3 justify-center items-center w-full space-y-4   md:basis-5/12 min-h-screen">
        <h3 className="md:hidden absolute  top-3 left-3">Blogsphere</h3>
        <h4 className="md:hidden absolute top-9 left-3 font-primary tracking-wide text-neutral-700">
          Read. Write. Inspire.
        </h4>
        <h1>Login </h1>
        <h3>Sign in to learn the new things</h3>

        <div className="flex flex-col space-y-2 w-full md:w-[60%] relative">
          <span className="absolute top-11 left-3">
            <Mail strokeWidth={1} />
          </span>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="input-base"
            name="email"
            placeholder="example@gmail.com"
          />
        </div>
        <div className="flex flex-col space-y-2 w-full md:w-[60%] relative">
          <span className="absolute top-11 left-3">
            <Lock strokeWidth={1} />
          </span>
          <label htmlFor="password">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            name="password"
            placeholder="Minimum 6 characters"
            className="input-base"
          />
          <span
            className="absolute top-11 right-3 cursor-pointer"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <EyeOff strokeWidth={1} />
            ) : (
              <Eye strokeWidth={1} />
            )}
          </span>
        </div>
        <div className="w-full md:w-[60%]">
          <button className="bg-violet-600  text-white font-primary tracking-wide w-full p-2 rounded-lg hover:bg-violet-500 active:bg-violet-800 transition-all cursor-pointer ">
            Sign in
          </button>
        </div>

        <div className="cursor-pointer" onClick={()=>navigate('/sign-up')}>
          <h4 className="font-primary">
            Create a new account ?{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Register here
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
