import React, { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import SearchModal from "./SearchModal";
const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchModel = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <div className="relative">
      <span className="cursor-pointer" onClick={handleSearchModel}>
        <SearchIcon strokeWidth={1.5} />
      </span>
      <div
        className={`absolute top-8 -right-5 opacity-0 transition-all duration-300 z-20 ${
          isSearchOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <SearchModal handleSearch={handleSearchModel} />
      </div>
    </div>
  );
};

export default Search;
