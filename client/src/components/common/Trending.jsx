import React from "react";
import { trendingTopics } from "../../constants/constant.js";

const Trending = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Section Title */}
      <h2 className="text-gray-400 text-sm tracking-widest uppercase mb-6 font-body">
        Explore Trending Topics
      </h2>

      {/* Topics Wrapper */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {trendingTopics.map((topic, idx) => {
          const Icon = topic.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-light-card dark:bg-dark-card shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold font-body">{topic.trending}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
