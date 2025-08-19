import React from "react";
import { X } from "lucide-react";
import { trendingTopics } from "../../constants/constant";
const SearchModal = ({ handleSearch }) => {
  return (
    <div className="bg-white dark:bg-black w-[350px] md:min-w-[450px] p-3 rounded-lg shadow-lg flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="font-body font-medium text-lg tracking-wide">
          What are you looking for?
        </h1>
        <span className="cursor-pointer" onClick={handleSearch}>
          <X />
        </span>
      </div>

      <div className="relative font-body ">
        <input
          type="text"
          placeholder="Search here"
          className="input-base p-4 border-gray-600 border w-full rounded-lg "
        />
        <button className="absolute top-1 right-1 bg-accent dark:bg-accent-dark text-white px-4 py-3 rounded-lg active:bg-accent-active dark:active:bg-accent-darkActive dark:hover:bg-accent-darkHover hover:bg-accent-hover">
          Search
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {trendingTopics.map((topic, _idx) => {
          return <h1 className=" bg-white dark:bg-dark-card rounded-lg p-2 shadow-lg uppercase text-sm font-medium cursor-pointer ">{topic.trending}</h1>;
        })}
      </div>
    </div>
  );
};

export default SearchModal;
