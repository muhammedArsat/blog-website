import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-20 text-center border-b dark:border-b-gray-800">
      {/* Heading */}
      <h1 className="font-heading text-4xl md:text-6xl font-bold text-light-text dark:text-dark-text max-w-5xl">
        Heartfelt{" "}
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Reflections
        </span>
        : Stories of Love, Loss, and Growth
      </h1>

      {/* Subtext */}
      <p className="font-body text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-3xl leading-relaxed">
        Revision Welcomes to ultimate source for fresh perspectives! Explore
        curated content to enlighten, entertain and engage global readers.
      </p>
    </div>
  );
};

export default Header;
