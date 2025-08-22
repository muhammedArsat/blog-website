import React from "react";
import ProfileImg from "../../../assets/blog-cover.webp";
import { MapPin } from "lucide-react";
import { Facebook, Linkedin, Link, Twitter } from "lucide-react";
const AuthorCard = () => {
  return (
    <div className="w-full md:w-[350px] shadow-lg rounded-lg p-3 flex flex-col gap-3 ">
      <h1 className="text-light-secondary dark:text-dark-secondary uppercase text-sm font-body text-left w-full">
        About
      </h1>

      <div className="flex items-center gap-3">
        <img
          src={ProfileImg}
          alt="profile-img"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h1 className="font-body font-bold text-lg">Ethan Caldwell </h1>
          <p className="font-body font-normal text-light-secondary dark:text-dark-secondary">
            Reflective Blogger
          </p>
        </div>
      </div>

      <div className="p-2">
        <p className="font-body text-light-secondary dark:text-dark-secondary w-[320px]">
          Ethan Caldwell shares thoughtful insights and reflections on life,
          culture, and personal growth. His work explores the intersections of
          creativity and experience, offering readers unique perspectives.
        </p>
        <div className="flex items-center gap-3 font-body mt-2">
          <span className="text-purple-600">
            <MapPin />
          </span>
          <p>Paris, France</p>
        </div>
        <div className="flex items-center gap-4  w-full  mt-3 text-light-secondary dark:text-dark-secondary">
          <Twitter className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Facebook className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Linkedin className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
          <Link className="w-6 h-6 cursor-pointer hover:text-purple-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
