import React, { useState } from "react";
import RegisterIcon from "../assets/icon-register.svg";
import { Mail, Lock, ShieldCheck, Eye, EyeOff } from "lucide-react";
const Register = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex justify-start items-center">
      <div className="hidden relative md:flex flex-col space-y-4 pt-24  justify-center items-center basis-7/12 min-h-screen bg-violet-600 rounded-r-lg">
        <h3 className="text-white absolute  top-3 left-3">Blogsphere</h3>
        <h4 className=" absolute top-9 left-3 font-primary tracking-wide text-slate-200">
          Read. Write. Inspire.
        </h4>
        <h2 className="text-center text-white px-10">
          Be part of the community — Register now and let your voice be heard
        </h2>
 
        <img src={RegisterIcon} alt="register-icon" className="w-[350px] " />
      </div>
      <div className="flex flex-col justify-center items-center basis-5/12 space-y-4">
        <h1>Register Now</h1>
        <h3>Create an account to read new stories and trends</h3>
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
          <label htmlFor="email">Password</label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="input-base"
            name="email"
            placeholder="Maximum of 6 characters"
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
        <div className="flex flex-col space-y-2 w-full md:w-[60%] relative">
          <span className="absolute top-11 left-3">
            <ShieldCheck strokeWidth={1} />
          </span>
          <label htmlFor="email">Confirm password</label>
          <input
            type="password"
            className="input-base"
            name="email"
            placeholder="Confirm password"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <button className="bg-violet-600  text-white font-primary tracking-wide w-full p-2 rounded-lg hover:bg-violet-500 active:bg-violet-800 transition-all cursor-pointer ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
