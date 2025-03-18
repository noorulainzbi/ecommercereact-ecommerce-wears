import React, { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useShopContext();
  const location = useLocation();
  const isVisible = showSearch && location.pathname.includes("collection");

  return isVisible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center px-5 py-2 border border-gray-400 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 ">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-sm outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search Products"
        />
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />
      </div>
      <img
        src={assets.cross_icon}
        alt="cross-icon"
        className="w-3 cursor-pointer inline"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
