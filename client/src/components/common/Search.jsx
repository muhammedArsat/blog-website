import React from "react";
import { Search as SearchIcon } from "lucide-react";
const Search = () => {
  return (
    <div>
      <span className="cursor-pointer">
        <SearchIcon strokeWidth={1.5}/>
      </span>
    </div>
  );
};

export default Search;
