import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="">
      <div className="search">
        <FaSearch className="icon"></FaSearch>
        <input type="text" placeholder="search" />
      </div>
    </div>
  );
};

export default SearchBox;
